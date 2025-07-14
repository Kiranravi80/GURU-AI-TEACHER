const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

exports.generateTTS = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text required' });

  try {
    const outputPath = path.join(__dirname, '..', '..', 'uploads', `tts-${Date.now()}.mp3`);

    // ELEVENLABS CONFIG
    const voiceId = process.env.ELEVENLABS_VOICE_ID;
    const apiKey = process.env.ELEVENLABS_API_KEY;

    const response = await axios({
      method: 'POST',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
      responseType: 'stream',
      data: {
        text,
        voice_settings: { stability: 0.3, similarity_boost: 0.8 },
      },
    });

    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    writer.on('finish', () => {
      return res.json({ audioUrl: `/uploads/${path.basename(outputPath)}` });
    });

    writer.on('error', (err) => {
      console.error(err);
      return res.status(500).json({ error: 'Audio generation failed.' });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'TTS service failed.' });
  }
};
