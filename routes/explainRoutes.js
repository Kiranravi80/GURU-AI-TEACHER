const express = require('express');
const router = express.Router();
const { explainContent } = require('../controllers/explainController');
const authenticateUser = require('../middleware/authMiddleware');

router.post('/', authenticateUser, explainContent);

module.exports = router;
