const express = require('express');
const router = express.Router();
const { chatWithGuru } = require('../controllers/chatController');
const authenticateUser = require('../middleware/authMiddleware');

router.post('/', authenticateUser, chatWithGuru);

module.exports = router;
