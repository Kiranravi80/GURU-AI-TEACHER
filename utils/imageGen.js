const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates an image from prompt using DALL·E via OpenAI API
 * @param {string} prompt - Description for the image
 * @returns {Promise<string>} - URL of the generated image
 */
async function generateImage(prompt) {
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1024x1024',
    });

    return response.data[0].url;
  } catch (error) {
    console.error('Image generation error:', error.message);
    throw new Error('Failed to generate image');
  }
}

module.exports = { generateImage };
