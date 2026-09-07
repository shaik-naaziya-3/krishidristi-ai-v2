# SIH 2024 / Project Presentation Demo & Defense Guide

## 1. Executive Summary (3-Minute Hackathon Pitch)

> **"Namaste Judges! Over 140 million smallholder farmers in India lose up to 35% of their crop yields every year due to delayed disease identification, erratic micro-weather, and literacy barriers."**
> 
> **"KrishiDrishti AI 3.0 is a Multilingual, Voice-Enabled, Explainable, and Environment-Aware Agricultural Decision-Support System designed specifically for Indian agriculture."**
> 
> **"Unlike generic chatbots or black-box classifiers, KrishiDrishti AI combines lightweight PyTorch MobileNetV3-Small vision models with PyTorch Grad-CAM explainability heatmaps, rule-based environmental disease-risk fusion, and voice accessibility across 6 major Indian languages."**

---

## 2. Live Demo Script & Step-by-Step Flow

### Demo 1: Multilingual Voice Welcome & Dashboard
1. Select language badge at top right (e.g. **Telugu / Hindi / Tamil**).
2. Show dynamic greeting with active location and weather forecast (Open-Meteo live API).
3. Demonstrate **Read Page** button reading dashboard content aloud in native TTS voice.

### Demo 2: AI Crop Leaf Scan & High-Confidence Diagnosis
1. Click **AI Crop Scanner**.
2. Upload a sample leaf image (e.g. *Tomato Early Blight*).
3. Click **Analyze Leaf**.
4. Point out key outputs:
   - **Disease Diagnosis**: *Tomato Early Blight*
   - **Confidence Score**: *89.17% (High Confidence)*
   - **Severity Level**: *Moderate*

### Demo 3: Grad-CAM Explainable AI Exhibit
1. Scroll down to the **Grad-CAM AI Visual Explainability Heatmap** card.
2. Show judges the side-by-side composite exhibit:
   > *"Judges, our AI does not just give a percentage. Grad-CAM highlights the exact lesion areas (Red/Yellow heat zones) that influenced the neural network prediction, building trust with extension workers and farmers."*

### Demo 4: Environmental Disease Risk Multimodal Fusion
1. Show the **Environmental Disease Risk Fusion** card.
2. Explain the fusion model:
   > *"Even if a leaf appears healthy or mild, high relative humidity (85%) and recent rainfall increase fungal spore germination risk. Our system fuses live weather metrics with plant pathology to warn farmers before disease spreads."*

### Demo 5: Low-Confidence Safety Alert & Out-of-Domain Protection
1. Upload a blurry, dark, or blank image.
2. The AI safety filter detects low quality / low confidence (< 60%).
3. Point out the prominent amber safety banner:
   > *"Safety is paramount. Rather than making false guesses, KrishiDrishti AI flags low confidence and requests a clearer photo, preventing improper pesticide application."*

---

## 3. Technical Defense Strategy & Likely Judge Questions

### Q1: "Is 96.58% accuracy realistic in real agricultural fields?"
- **Defense Answer**: *"96.58% is our empirical validation accuracy on the PlantVillage validation dataset under controlled conditions. In real-world field conditions with complex backgrounds and shadows, performance can vary. That is precisely why we built our Grad-CAM explainability exhibit and low-confidence safety filter (< 60%), which alerts farmers whenever prediction certainty drops."*

### Q2: "Is your environmental risk fusion model a trained neural network or rule-based?"
- **Defense Answer**: *"Our environmental risk engine is a transparent, rule-based fusion model built on established agronomic disease infection curves (Phytophthora for late blight and Alternaria for early blight based on temperature and humidity thresholds). This guarantees explainability and eliminates black-box hallucinations for critical spraying decisions."*

### Q3: "How is your model optimized for edge / mobile deployment?"
- **Defense Answer**: *"We chose MobileNetV3-Small as our base architecture (5.95 MB FP32). Using PyTorch dynamic INT8 quantization, we reduced model storage size by **28.74% down to 4.24 MB** while maintaining 96.0% accuracy, making it ideal for edge deployment on low-cost Android devices."*

### Q4: "How do you ensure safe pesticide advice?"
- **Defense Answer**: *"We do NOT use LLMs to hallucinate chemical dosages. All chemical and organic treatment advisories come from a verified, structured agricultural database aligned with registered product labels and state agricultural department guidelines."*

---

## 4. SIH Readiness Checklist
- [x] Multilingual text & TTS voice in 6 languages (`en`, `te`, `hi`, `ta`, `kn`, `ml`)
- [x] PyTorch MobileNetV3-Small Disease Classification (96.58% accuracy)
- [x] PyTorch Grad-CAM visual heatmap explainability
- [x] Out-of-domain image safety & low-confidence warning triggers
- [x] Multimodal environmental disease risk fusion
- [x] MongoDB Atlas persistent scan history storage
- [x] Open-Meteo live weather forecasting API
- [x] Responsive mobile UI with dark mode, high contrast, and large text accessibility
