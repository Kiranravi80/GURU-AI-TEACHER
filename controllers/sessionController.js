const Session = require('../models/Session');

exports.saveSession = async (req, res) => {
  const { fileName, explanation, imageUrl, audioUrl, videoUrl } = req.body;

  try {
    const session = new Session({
      userId: req.user.id,
      fileName,
      explanation,
      imageUrl,
      audioUrl,
      videoUrl,
    });

    await session.save();
    res.json({ message: 'Session saved successfully', session });
  } catch (err) {
    console.error('Save session error:', err);
    res.status(500).json({ error: 'Failed to save session' });
  }
};
