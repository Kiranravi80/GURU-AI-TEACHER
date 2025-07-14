const openai = require('../utils/openai');

exports.chatWithGuru = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are GURU, an educational AI assistant.' },
        { role: 'user', content: message },
      ],
    });

    res.json({ response: response.choices[0].message.content });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: 'GURU could not respond.' });
  }
};
