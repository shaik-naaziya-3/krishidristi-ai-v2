const express = require('express');
const router = express.Router();
const { translateText, analyzeCrop, chatAssistant } = require('../controllers/aiController');

router.post('/translate', translateText);
router.post('/analyze-crop', analyzeCrop);
router.post('/chat', chatAssistant);

module.exports = router;