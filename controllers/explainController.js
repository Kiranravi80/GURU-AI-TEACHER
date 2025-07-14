const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.explainContent = async (req, res) => {
  const { text } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an educational assistant that explains concepts in a simple and engaging way.',
        },
        {
          role: 'user',
          content: text,
        },
      ],
    });

    const explanation = completion.choices[0].message.content.trim();
    res.json({ explanation });
  } catch (err) {
    console.error('Explanation error:', err.message);
    res.status(500).json({ error: 'AI explanation failed.' });
  }
};
