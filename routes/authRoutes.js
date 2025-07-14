const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/google', async (req, res) => {
  const { email, name } = req.body;
  try {
    // create JWT token
    const token = jwt.sign({ id: email, name }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Auth failed' });
  }
});

module.exports = router;
