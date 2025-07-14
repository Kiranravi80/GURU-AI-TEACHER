const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { saveSession } = require('../controllers/sessionController');

// POST /api/session
router.post('/session', authenticateUser, saveSession);

module.exports = router;
