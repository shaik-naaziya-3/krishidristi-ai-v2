from pathlib import Path
import sys
import json
import torch
import numpy as np
from torchvision import transforms, models
from PIL import Image
from torch import nn

from gradcam import generate_gradcam_image

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "models" / "plant_disease_model.pth"

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def validate_input_quality(pil_image):
    """
    Validates leaf image quality & basic domain bounds.
    Returns (is_valid, reason) tuple.
    """
    w, h = pil_image.size
    if w < 50 or h < 50:
        return False, "Image dimensions are too small for reliable leaf diagnosis (min 50x50)."

    img_np = np.array(pil_image.convert("RGB")).astype(np.float32)

    # 1. Blank / Monochrome check (low pixel standard deviation across channels)
    std_dev = np.std(img_np)
    if std_dev < 8.0:
        return False, "Image lacks sufficient contrast or visual detail (blank or single-color image)."

    # 2. Extreme Brightness / Over-exposure & Under-exposure check
    mean_val = np.mean(img_np)
    if mean_val < 12.0:
        return False, "Image is extremely dark / underexposed. Please capture under better lighting."
    if mean_val > 245.0:
        return False, "Image is overexposed / washed out. Please capture with reduced glare."

    # 3. Basic texture / detail variance check
    diff_h = np.abs(img_np[:-1, :, :] - img_np[1:, :, :])
    diff_v = np.abs(img_np[:, :-1, :] - img_np[:, 1:, :])
    texture_score = np.mean(diff_h) + np.mean(diff_v)
    if texture_score < 3.0:
        return False, "Image appears smooth or blurry without clear leaf texture."

    # 4. Color / Out-of-Domain Vegetation Check (Detecting non-plant sky/metal/blue objects)
    r, g, b = img_np[:, :, 0], img_np[:, :, 1], img_np[:, :, 2]
    # Dominant blue sky / non-organic object mask
    blue_sky_mask = (b > (r + 25)) & (b > (g + 15)) & (b > 100)
    blue_sky_ratio = np.mean(blue_sky_mask)
    if blue_sky_ratio > 0.65:
        return False, "Image contains dominant blue sky or non-plant background. Please focus closely on the crop leaf."

    return True, "Valid leaf image"


def main():
    if len(sys.argv) < 2:
        print(json.dumps({
            "success": False,
            "error": "Image path is required"
        }))
        sys.exit(1)

    image_path = Path(sys.argv[1])
    heatmap_output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else None

    if not image_path.exists():
        print(json.dumps({
            "success": False,
            "error": "Image file not found"
        }))
        sys.exit(1)

    try:
        checkpoint = torch.load(MODEL_PATH, map_location=DEVICE)
        classes = checkpoint["classes"]
        image_size = checkpoint.get("image_size", 224)

        model = models.mobilenet_v3_small(weights=None)
        model.classifier[3] = nn.Linear(
            model.classifier[3].in_features,
            len(classes)
        )
        model.load_state_dict(checkpoint["model_state_dict"])
        model = model.to(DEVICE)
        model.eval()

        transform = transforms.Compose([
            transforms.Resize((image_size, image_size)),
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            )
        ])

        image = Image.open(image_path).convert("RGB")

        # Validate input image quality
        is_valid_quality, quality_reason = validate_input_quality(image)

        image_tensor = transform(image).unsqueeze(0).to(DEVICE)

        # Predict
        outputs = model(image_tensor)
        probabilities = torch.softmax(outputs, dim=1)
        confidence, predicted_index = torch.max(probabilities, dim=1)

        predicted_class = classes[predicted_index.item()]
        confidence_score = round(confidence.item() * 100, 2)

        # Confidence level classification & safety thresholding
        if not is_valid_quality:
            confidence_level = "Low"
            is_low_confidence = True
            confidence_score = min(confidence_score, 45.0) # Force low confidence if quality check failed
        elif confidence_score >= 80.0:
            confidence_level = "High"
            is_low_confidence = False
        elif confidence_score >= 60.0:
            confidence_level = "Medium"
            is_low_confidence = False
        else:
            confidence_level = "Low"
            is_low_confidence = True

        # Top 3 predictions
        top_probabilities, top_indices = torch.topk(
            probabilities[0],
            min(3, len(classes))
        )
        top_predictions = []
        for probability, index in zip(top_probabilities, top_indices):
            top_predictions.append({
                "class": classes[index.item()],
                "confidence": round(probability.item() * 100, 2)
            })

        # Generate Grad-CAM Heatmap
        heatmap_file_str = None
        if heatmap_output_path and not is_low_confidence:
            try:
                out_path = generate_gradcam_image(
                    model=model,
                    transform=transform,
                    original_pil_image=image,
                    input_tensor=image_tensor,
                    device=DEVICE,
                    output_path=heatmap_output_path
                )
                heatmap_file_str = str(out_path)
            except Exception as cam_err:
                heatmap_file_str = None

        result = {
            "success": True,
            "prediction": predicted_class,
            "confidenceScore": confidence_score,
            "confidenceLevel": confidence_level,
            "isLowConfidence": is_low_confidence,
            "qualityCheckPassed": is_valid_quality,
            "qualityReason": quality_reason,
            "topPredictions": top_predictions,
            "heatmapPath": heatmap_file_str
        }

        print(json.dumps(result))

    except Exception as error:
        print(json.dumps({
            "success": False,
            "error": str(error)
        }))
        sys.exit(1)

if __name__ == "__main__":
    main()