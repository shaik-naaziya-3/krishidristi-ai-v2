from pathlib import Path
from PIL import Image

DATASET_DIR = Path(__file__).resolve().parent.parent / "dataset"

total = 0
bad = []

for class_dir in sorted(DATASET_DIR.iterdir()):
    if not class_dir.is_dir():
        continue

    class_total = 0
    class_bad = 0

    for image_path in class_dir.iterdir():
        if not image_path.is_file():
            continue

        total += 1
        class_total += 1

        try:
            with Image.open(image_path) as img:
                img.verify()
        except Exception:
            bad.append(str(image_path))
            class_bad += 1

    print(f"{class_dir.name}: {class_total} files, {class_bad} bad")

print("\nTotal files:", total)
print("Bad images:", len(bad))

if bad:
    print("\nFirst bad files:")
    for path in bad[:10]:
        print(path)