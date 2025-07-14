const { DalleImage } = require('../utils/imageGen');

exports.generateImage = async (req, res) => {
  const { topic, style } = req.body;

  if (!topic) return res.status(400).json({ error: 'Topic is required' });

  const prompt = `Generate a ${style || 'academic illustration'} of: ${topic}`;

  try {
    const imageUrl = await DalleImage(prompt);
    res.json({ imageUrl });
  } catch (err) {
    console.error('Image generation failed:', err);
    res.status(500).json({ error: 'Image generation failed' });
  }
};
