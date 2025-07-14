const express = require('express');
const router = express.Router();
const { generateTTS } = require('../controllers/ttsController');

// POST /api/tts
router.post('/tts', generateTTS);

module.exports = router;
