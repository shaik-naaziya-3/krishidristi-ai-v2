const { generateFarmingChatResponse } = require('../services/geminiService');
const { assessEnvironmentalRisk } = require('../services/environmentalRiskService');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/*
============================================================
DISEASE KNOWLEDGE BASE
CNN identifies the disease.
This database provides the structured agricultural information.
============================================================
*/

const diseaseDatabase = {

  Tomato___Late_blight: {
    cropName: 'Tomato',
    diseaseName: 'Tomato Late Blight',
    severityLevel: 'High',

    diseaseDescription:
      'Late blight is a serious tomato disease that can rapidly damage leaves, stems and fruits, especially under cool and wet conditions.',

    symptoms: [
      'Dark brown or water-soaked spots on leaves',
      'Brown lesions spreading rapidly across leaves',
      'White fungal growth may appear under leaves during humid conditions',
      'Brown or dark lesions on tomato fruits'
    ],

    possibleCauses: [
      'High humidity and prolonged leaf wetness',
      'Frequent rainfall or overhead irrigation',
      'Poor air circulation between plants',
      'Infected plant debris'
    ],

    chemicalTreatment: [
      'Use fungicides recommended by your local agricultural department',
      'Mancozeb-based fungicide may be used according to the product label',
      'Metalaxyl + Mancozeb products may be considered where locally recommended'
    ],

    organicTreatment: [
      'Remove severely infected leaves',
      'Use Trichoderma-based biological products where appropriate',
      'Neem-based preparations can be used as part of an integrated crop management approach'
    ],

    fertilizerRecommendations: [
      'Avoid excessive nitrogen application',
      'Maintain balanced NPK nutrition',
      'Ensure adequate potassium availability'
    ],

    preventionMethods: [
      'Avoid overhead irrigation',
      'Maintain good spacing for air circulation',
      'Remove infected plant material',
      'Avoid working with wet plants'
    ],

    futurePrecautions: [
      'Use disease-tolerant varieties where available',
      'Practice crop rotation',
      'Monitor crops regularly during wet weather'
    ],

    weatherImpact:
      'Cool temperatures, high humidity and frequent rainfall can increase late blight risk.',

    recoverySuggestions:
      'Remove heavily infected plant parts and improve air circulation. Follow locally recommended fungicide instructions when necessary.',

    smartRecommendations: [
      'Check rainfall forecasts before spraying',
      'Inspect nearby plants regularly',
      'Avoid unnecessary leaf wetness'
    ]
  },

  Tomato___Early_blight: {
    cropName: 'Tomato',
    diseaseName: 'Tomato Early Blight',
    severityLevel: 'Moderate',

    diseaseDescription:
      'Early blight is a fungal disease that commonly produces dark lesions on tomato leaves and can reduce plant productivity.',

    symptoms: [
      'Dark circular spots on older leaves',
      'Concentric ring patterns inside lesions',
      'Yellowing around infected areas',
      'Premature leaf drop'
    ],

    possibleCauses: [
      'Warm and humid conditions',
      'Extended leaf wetness',
      'Infected crop residues',
      'Poor field sanitation'
    ],

    chemicalTreatment: [
      'Use a locally recommended fungicide according to its label',
      'Mancozeb-based fungicides may be used where recommended',
      'Follow agricultural department recommendations for disease severity'
    ],

    organicTreatment: [
      'Remove infected leaves',
      'Maintain field sanitation',
      'Use appropriate biological control products where available'
    ],

    fertilizerRecommendations: [
      'Maintain balanced nutrition',
      'Avoid excessive nitrogen',
      'Maintain adequate potassium'
    ],

    preventionMethods: [
      'Remove infected crop debris',
      'Avoid overhead irrigation',
      'Maintain proper plant spacing',
      'Rotate crops'
    ],

    futurePrecautions: [
      'Use healthy planting material',
      'Monitor older leaves regularly',
      'Maintain good field sanitation'
    ],

    weatherImpact:
      'Warm, humid weather and prolonged leaf wetness can increase early blight development.',

    recoverySuggestions:
      'Remove badly affected leaves and improve ventilation around plants.',

    smartRecommendations: [
      'Monitor lower leaves first',
      'Avoid watering foliage',
      'Check weather conditions before spraying'
    ]
  },

  Tomato___Bacterial_spot: {
    cropName: 'Tomato',
    diseaseName: 'Tomato Bacterial Spot',
    severityLevel: 'Moderate',

    diseaseDescription:
      'Bacterial spot causes small dark lesions on tomato leaves, stems and fruits and can become severe under warm and wet conditions.',

    symptoms: [
      'Small dark spots on leaves',
      'Yellowing around leaf lesions',
      'Dark spots on fruit',
      'Leaf damage under severe infection'
    ],

    possibleCauses: [
      'Warm and wet weather',
      'Infected seeds or plant material',
      'Water splash between plants',
      'Poor sanitation'
    ],

    chemicalTreatment: [
      'Use locally recommended bactericides according to label instructions',
      'Copper-based products may be recommended for bacterial spot management'
    ],

    organicTreatment: [
      'Remove severely infected plant parts',
      'Maintain field sanitation',
      'Avoid spreading contaminated plant material'
    ],

    fertilizerRecommendations: [
      'Maintain balanced crop nutrition',
      'Avoid excessive nitrogen',
      'Ensure adequate potassium'
    ],

    preventionMethods: [
      'Use healthy seed',
      'Avoid overhead irrigation',
      'Remove infected plant debris',
      'Avoid handling plants when wet'
    ],

    futurePrecautions: [
      'Practice crop rotation',
      'Use disease-free planting material',
      'Monitor plants regularly'
    ],

    weatherImpact:
      'Warm, humid and rainy conditions can favor bacterial spot development.',

    recoverySuggestions:
      'Remove heavily infected material and reduce leaf wetness.',

    smartRecommendations: [
      'Avoid splash irrigation',
      'Inspect new lesions regularly',
      'Follow local agricultural recommendations'
    ]
  },

  Tomato___healthy: {
    cropName: 'Tomato',
    diseaseName: 'Healthy',
    severityLevel: 'Low',

    diseaseDescription:
      'The tomato leaf was classified as healthy by the trained CNN model.',

    symptoms: [],
    possibleCauses: [],
    chemicalTreatment: [],
    organicTreatment: [],

    fertilizerRecommendations: [
      'Continue balanced crop nutrition based on soil requirements'
    ],

    preventionMethods: [
      'Continue regular crop monitoring',
      'Maintain proper irrigation',
      'Maintain field sanitation'
    ],

    futurePrecautions: [
      'Inspect plants regularly for early disease symptoms'
    ],

    weatherImpact:
      'Monitor weather conditions because prolonged humidity and rainfall can increase disease risk.',

    recoverySuggestions:
      'No disease treatment is required based on this prediction.',

    smartRecommendations: [
      'Continue regular monitoring',
      'Maintain balanced irrigation and nutrition'
    ]
  },

  Potato___Early_blight: {
    cropName: 'Potato',
    diseaseName: 'Potato Early Blight',
    severityLevel: 'Moderate',

    diseaseDescription:
      'Early blight of potato causes dark lesions on leaves and can reduce plant growth and tuber yield.',

    symptoms: [
      'Dark spots on older leaves',
      'Concentric ring patterns',
      'Yellowing around lesions',
      'Premature leaf death'
    ],

    possibleCauses: [
      'Warm humid weather',
      'Leaf wetness',
      'Plant stress',
      'Infected crop residue'
    ],

    chemicalTreatment: [
      'Use locally recommended fungicides according to label instructions',
      'Follow agricultural department recommendations'
    ],

    organicTreatment: [
      'Remove severely infected foliage',
      'Maintain crop sanitation',
      'Use suitable biological products where recommended'
    ],

    fertilizerRecommendations: [
      'Maintain balanced nutrition',
      'Avoid excessive nitrogen',
      'Ensure sufficient potassium'
    ],

    preventionMethods: [
      'Remove infected residues',
      'Avoid prolonged leaf wetness',
      'Maintain proper plant spacing'
    ],

    futurePrecautions: [
      'Use healthy seed tubers',
      'Practice crop rotation',
      'Monitor lower leaves'
    ],

    weatherImpact:
      'Warm and humid conditions with prolonged leaf wetness can increase disease development.',

    recoverySuggestions:
      'Remove heavily infected leaves and improve field conditions.',

    smartRecommendations: [
      'Monitor older leaves regularly',
      'Check weather before spraying'
    ]
  },

  Potato___Late_blight: {
    cropName: 'Potato',
    diseaseName: 'Potato Late Blight',
    severityLevel: 'High',

    diseaseDescription:
      'Late blight is a destructive potato disease that can spread rapidly during cool, wet and humid weather.',

    symptoms: [
      'Water-soaked dark lesions',
      'Rapid browning of leaves',
      'White growth may occur under leaves in humid conditions',
      'Dark lesions on stems and tubers'
    ],

    possibleCauses: [
      'Cool wet weather',
      'High humidity',
      'Frequent rainfall',
      'Infected plant material'
    ],

    chemicalTreatment: [
      'Use locally recommended late-blight fungicides according to label instructions',
      'Follow agricultural department recommendations'
    ],

    organicTreatment: [
      'Remove severely infected foliage',
      'Maintain field sanitation',
      'Use suitable biological products where locally recommended'
    ],

    fertilizerRecommendations: [
      'Maintain balanced nutrition',
      'Avoid excessive nitrogen',
      'Maintain adequate potassium'
    ],

    preventionMethods: [
      'Avoid excessive leaf wetness',
      'Maintain adequate spacing',
      'Remove infected plant material',
      'Monitor crops during rainy weather'
    ],

    futurePrecautions: [
      'Use tolerant varieties where available',
      'Practice crop rotation',
      'Monitor weather conditions'
    ],

    weatherImpact:
      'Cool temperatures, high humidity and frequent rainfall can strongly increase late blight risk.',

    recoverySuggestions:
      'Remove severely affected foliage and follow locally recommended disease management practices.',

    smartRecommendations: [
      'Monitor rainfall forecasts',
      'Inspect plants after rainy periods',
      'Avoid unnecessary overhead irrigation'
    ]
  },

  Potato___healthy: {
    cropName: 'Potato',
    diseaseName: 'Healthy',
    severityLevel: 'Low',

    diseaseDescription:
      'The potato leaf was classified as healthy by the trained CNN model.',

    symptoms: [],
    possibleCauses: [],
    chemicalTreatment: [],

    organicTreatment: [],

    fertilizerRecommendations: [
      'Maintain balanced nutrition according to soil requirements'
    ],

    preventionMethods: [
      'Continue regular crop monitoring',
      'Maintain proper irrigation',
      'Maintain field sanitation'
    ],

    futurePrecautions: [
      'Use healthy planting material',
      'Monitor plants regularly'
    ],

    weatherImpact:
      'Wet and humid conditions can increase the risk of potato diseases.',

    recoverySuggestions:
      'No disease treatment is required based on this prediction.',

    smartRecommendations: [
      'Continue regular monitoring',
      'Check weather conditions during the growing season'
    ]
  },

  'Pepper,_bell___Bacterial_spot': {
    cropName: 'Bell Pepper',
    diseaseName: 'Bell Pepper Bacterial Spot',
    severityLevel: 'Moderate',

    diseaseDescription:
      'Bacterial spot can affect pepper leaves and fruits and is favored by warm, wet conditions.',

    symptoms: [
      'Small dark leaf spots',
      'Yellowing around lesions',
      'Dark fruit lesions',
      'Leaf damage during severe infection'
    ],

    possibleCauses: [
      'Warm humid weather',
      'Water splash',
      'Infected plant material',
      'Poor sanitation'
    ],

    chemicalTreatment: [
      'Use locally recommended bactericides according to product label instructions',
      'Copper-based products may be recommended for bacterial spot management'
    ],

    organicTreatment: [
      'Remove infected plant parts',
      'Maintain field sanitation',
      'Avoid spreading contaminated plant material'
    ],

    fertilizerRecommendations: [
      'Maintain balanced nutrition',
      'Avoid excessive nitrogen',
      'Ensure adequate potassium'
    ],

    preventionMethods: [
      'Use healthy seed',
      'Avoid overhead irrigation',
      'Remove infected debris',
      'Avoid handling wet plants'
    ],

    futurePrecautions: [
      'Practice crop rotation',
      'Use disease-free planting material'
    ],

    weatherImpact:
      'Warm and wet conditions can increase bacterial spot development.',

    recoverySuggestions:
      'Reduce leaf wetness and remove severely affected plant material.',

    smartRecommendations: [
      'Monitor new lesions',
      'Avoid splash irrigation',
      'Check local disease advisories'
    ]
  },

  'Pepper,_bell___healthy': {
    cropName: 'Bell Pepper',
    diseaseName: 'Healthy',
    severityLevel: 'Low',

    diseaseDescription:
      'The bell pepper leaf was classified as healthy by the trained CNN model.',

    symptoms: [],
    possibleCauses: [],
    chemicalTreatment: [],
    organicTreatment: [],

    fertilizerRecommendations: [
      'Maintain balanced nutrition according to soil requirements'
    ],

    preventionMethods: [
      'Continue regular crop monitoring',
      'Maintain proper irrigation',
      'Maintain field sanitation'
    ],

    futurePrecautions: [
      'Inspect plants regularly for disease symptoms'
    ],

    weatherImpact:
      'Warm humid weather can increase disease risk, so continue monitoring.',

    recoverySuggestions:
      'No disease treatment is required based on this prediction.',

    smartRecommendations: [
      'Continue regular monitoring',
      'Maintain balanced irrigation and nutrition'
    ]
  }
};


/*
============================================================
HELPER
============================================================
*/

function buildReport(prediction, environmentalRisk = null, heatmapUrl = null) {

  const className = prediction.prediction;
  const baseReport = diseaseDatabase[className];

  const confidenceLevel = prediction.confidenceLevel || (prediction.confidenceScore >= 80 ? 'High' : prediction.confidenceScore >= 60 ? 'Medium' : 'Low');
  const isLowConfidence = prediction.isLowConfidence !== undefined ? prediction.isLowConfidence : (prediction.confidenceScore < 60);

  const lowConfidenceWarning = isLowConfidence
    ? 'Low-confidence AI prediction (under 60%). Please capture a clearer, well-lit image of the leaf focusing closely on affected spots, or consult a local agricultural extension specialist.'
    : null;

  if (!baseReport) {
    return {
      cropName: 'Unknown',
      diseaseName: 'Unknown',
      confidenceScore: prediction.confidenceScore,
      confidenceLevel,
      isLowConfidence,
      lowConfidenceWarning,
      heatmapUrl,
      environmentalRisk,
      severityLevel: 'Unknown',
      diseaseDescription:
        'The trained CNN model produced a prediction that is not currently available in the disease knowledge base.',
      symptoms: [],
      possibleCauses: [],
      chemicalTreatment: [],
      organicTreatment: [],
      fertilizerRecommendations: [],
      preventionMethods: [],
      futurePrecautions: [],
      weatherImpact: '',
      recoverySuggestions: '',
      smartRecommendations: [],
      topPredictions: prediction.topPredictions || []
    };
  }

  return {
    ...baseReport,
    confidenceScore: prediction.confidenceScore,
    confidenceLevel,
    isLowConfidence,
    lowConfidenceWarning,
    heatmapUrl,
    environmentalRisk,
    topPredictions: prediction.topPredictions || []
  };
}


/*
============================================================
TRANSLATE TEXT
============================================================
*/

const translateText = async (req, res) => {

  try {

    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
      return res.status(400).json({
        message: 'Text and targetLanguage are required'
      });
    }

    if (
      targetLanguage.toLowerCase() === 'en' ||
      targetLanguage.toLowerCase() === 'english'
    ) {
      return res.json({
        translatedText: text
      });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash'
    });

    const prompt = `
Translate the following agriculture/farming text accurately into ${targetLanguage}.

IMPORTANT:
- Preserve medical/agricultural meaning.
- Do not add information.
- Do not remove information.
- Output only the translation.

Text:

${typeof text === 'object'
  ? JSON.stringify(text)
  : text}
`;

    const result = await model.generateContent(prompt);

    let translatedText =
      result.response.text().trim();

    if (typeof text === 'object') {

      try {

        translatedText =
          JSON.parse(translatedText);

      } catch (e) {

        const cleanJson =
          translatedText
            .replace(/^```json\s*/i, '')
            .replace(/```$/i, '')
            .trim();

        translatedText =
          JSON.parse(cleanJson);
      }
    }

    res.json({
      translatedText
    });

  } catch (error) {

    console.error(
      '[Translation Error]:',
      error
    );

    res.status(500).json({
      message: 'Translation failed',
      error: error.message
    });
  }
};


/*
============================================================
CNN CROP ANALYSIS
============================================================
*/

const analyzeCrop = async (req, res) => {

  try {

    const {
      language = 'en',
      temp,
      humidity,
      rainProb,
      weatherCondition,
      imageBase64
    } = req.body;

    let imagePath = req.file ? req.file.path : null;
    let filename = req.file ? req.file.filename : null;

    if (!imagePath && (imageBase64 || req.body.image)) {
      const rawBase64 = imageBase64 || req.body.image;
      const base64Data = rawBase64.replace(/^data:image\/\w+;base64,/, '');
      const uploadsDir = path.join(__dirname, '../uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      filename = `base64_${Date.now()}.jpg`;
      imagePath = path.join(uploadsDir, filename);
      fs.writeFileSync(imagePath, Buffer.from(base64Data, 'base64'));
    }

    if (!imagePath) {
      return res.status(400).json({
        message: 'No crop image was provided. Please upload or capture a leaf photo.'
      });
    }

    console.log('');
    console.log('============================================================');
    console.log('[CNN CROP ANALYSIS]');
    console.log('============================================================');

    console.log('Image Path:', imagePath);
    console.log('Filename:', filename);
    console.log('Language:', language);

    // Prepare Grad-CAM heatmap destination path
    const heatmapsDir = path.join(__dirname, '../uploads/heatmaps');
    if (!fs.existsSync(heatmapsDir)) {
      fs.mkdirSync(heatmapsDir, { recursive: true });
    }
    const heatmapFilename = `gradcam_${Date.now()}_${filename}`;
    const heatmapPath = path.join(heatmapsDir, heatmapFilename);
    const heatmapUrl = `/uploads/heatmaps/${heatmapFilename}`;

    const pythonScript = path.join(
      __dirname,
      '../../ml/predict.py'
    );

    const venvWinPath = path.join(__dirname, '../../ml/.venv/Scripts/python.exe');
    const venvLinuxPath = path.join(__dirname, '../../ml/.venv/bin/python');

    let pythonExecutable = process.env.PYTHON_PATH || process.env.PYTHON_EXECUTABLE;
    if (!pythonExecutable) {
      if (process.platform === 'win32' && fs.existsSync(venvWinPath)) {
        pythonExecutable = venvWinPath;
      } else if (fs.existsSync(venvLinuxPath)) {
        pythonExecutable = venvLinuxPath;
      } else {
        pythonExecutable = process.platform === 'win32' ? 'python' : 'python3';
      }
    }

    const pythonProcess = spawn(
      pythonExecutable,
      [
        pythonScript,
        imagePath,
        heatmapPath
      ],
      {
        windowsHide: true
      }
    );

    let output = '';
    let errorOutput = '';

    pythonProcess.stdout.on(
      'data',
      (data) => {
        output += data.toString();
      }
    );

    pythonProcess.stderr.on(
      'data',
      (data) => {
        errorOutput += data.toString();
      }
    );

    pythonProcess.on(
      'close',
      (code) => {

        console.log(
          '[CNN Exit Code]:',
          code
        );

        if (errorOutput) {

          console.log(
            '[CNN STDERR]:',
            errorOutput
          );
        }

        if (code !== 0) {

          return res.status(500).json({
            message: 'CNN prediction failed.',
            error:
              errorOutput ||
              'Unknown ML error'
          });
        }

        try {

          const prediction =
            JSON.parse(
              output.trim()
            );

          if (!prediction.success) {

            return res.status(400).json({
              message:
                prediction.error || 'CNN could not analyze the image.',
              error:
                prediction.error
            });
          }

          console.log(
            '[CNN Prediction]:',
            prediction
          );

          // Evaluate environmental risk fusion model
          const weatherContext = {
            temp: parseFloat(temp) || 26,
            humidity: parseFloat(humidity) || 65,
            rainProb: parseFloat(rainProb) || 20,
            condition: weatherCondition || 'Clear'
          };

          const rawReport = buildReport(prediction);
          const environmentalRisk = assessEnvironmentalRisk(
            rawReport.cropName,
            rawReport.diseaseName,
            weatherContext
          );

          const report = buildReport(
            prediction,
            environmentalRisk,
            fs.existsSync(heatmapPath) ? heatmapUrl : null
          );

          return res.status(200).json({
            success: true,
            report
          });

        } catch (parseError) {

          console.error(
            '[CNN Output Parse Error]:',
            parseError
          );

          console.error(
            '[CNN Raw Output]:',
            output
          );

          return res.status(500).json({
            message:
              'Failed to parse CNN output.',
            error: parseError.message
          });
        }
      }
    );

  } catch (error) {

    console.error(
      '[Crop Analysis Server Error]:',
      error
    );

    res.status(500).json({
      message:
        'Server error during crop analysis.',
      error: error.message
    });
  }
};


/*
============================================================
AI CHAT ASSISTANT
============================================================
*/

const chatAssistant = async (
  req,
  res
) => {

  try {

    const {
      message,
      history = [],
      language = 'en'
    } = req.body;

    const reply =
      await generateFarmingChatResponse(
        message,
        history,
        language
      );

    res.json({
      response: reply
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });
  }
};


/*
============================================================
EXPORTS
============================================================
*/

module.exports = {

  translateText,

  analyzeCrop,

  chatAssistant

};