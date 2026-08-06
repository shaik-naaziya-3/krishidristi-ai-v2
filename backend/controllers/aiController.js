const { analyzeCropDisease, generateFarmingChatResponse } = require('../services/geminiService');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// @desc    Translate text dynamically into target language
// @route   POST /api/ai/translate
const translateText = async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
      return res.status(400).json({ message: 'Text and targetLanguage are required' });
    }

    if (targetLanguage.toLowerCase() === 'en' || targetLanguage.toLowerCase() === 'english') {
      return res.json({ translatedText: text });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `Translate the following agriculture/farming web app text accurately into ${targetLanguage}. Output ONLY the translated text without extra formatting:\n\n${typeof text === 'object' ? JSON.stringify(text) : text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let translatedText = response.text().trim();

    if (typeof text === 'object') {
      try {
        translatedText = JSON.parse(translatedText);
      } catch (e) {
        const cleanJson = translatedText.replace(/^```json\s*|```$/g, '');
        translatedText = JSON.parse(cleanJson);
      }
    }

    res.json({ translatedText });
  } catch (error) {
    console.error('Translation Error:', error);
    res.status(500).json({ message: 'Translation failed', error: error.message });
  }
};

// @desc    Analyze crop disease leaf image
// @route   POST /api/ai/analyze-crop
const analyzeCrop = async (req, res) => {
  try {
    const { imageBase64, language = 'en' } = req.body;
    const result = await analyzeCropDisease(imageBase64, 'image/jpeg', language);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    AI Chat Assistant response
// @route   POST /api/ai/chat
const chatAssistant = async (req, res) => {
  try {
    const { message, history = [], language = 'en' } = req.body;
    const reply = await generateFarmingChatResponse(message, history, language);
    res.json({ response: reply });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  translateText,
  analyzeCrop,
  chatAssistant
};