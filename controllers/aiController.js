const { OpenAI } = require('../utils/openai');

exports.generateExplanation = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.length < 20) {
      return res.status(400).json({ error: 'Insufficient content for explanation.' });
    }

    const prompt = `Explain the following text in a clear, academic tone suitable for students:\n\n"${text}"`;

    const explanation = await OpenAI(prompt);

    res.json({ explanation });
  } catch (err) {
    console.error('AI Error:', err);
    res.status(500).json({ error: 'AI explanation failed.' });
  }
};
