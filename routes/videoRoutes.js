const express = require('express');
const router = express.Router();
const { generateVideo } = require('../controllers/videoController');

// POST /api/video
router.post('/video', generateVideo);

module.exports = router;
