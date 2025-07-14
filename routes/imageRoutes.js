const express = require('express');
const router = express.Router();
const { generateImage } = require('../controllers/imageController');

// POST /api/image
router.post('/image', generateImage);

module.exports = router;
