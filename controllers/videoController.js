const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

exports.generateVideo = async (req, res) => {
  const { audioUrl, imageUrl } = req.body;

  if (!audioUrl || !imageUrl)
    return res.status(400).json({ error: 'Audio and image URLs required.' });

  const audioPath = path.join(__dirname, '..', '..', audioUrl.replace('/uploads/', 'uploads/'));
  const imagePath = path.join(__dirname, '..', '..', imageUrl.replace('/uploads/', 'uploads/'));
  const outputFile = `uploads/video-${Date.now()}.mp4`;
  const outputPath = path.join(__dirname, '..', '..', outputFile);

  ffmpeg()
    .addInput(imagePath)
    .loop()
    .addInput(audioPath)
    .outputOptions([
      '-c:v libx264',
      '-tune stillimage',
      '-c:a aac',
      '-b:a 192k',
      '-shortest',
    ])
    .save(outputPath)
    .on('end', () => {
      res.json({ videoUrl: `/uploads/${path.basename(outputPath)}` });
    })
    .on('error', (err) => {
      console.error('FFmpeg error:', err);
      res.status(500).json({ error: 'Video generation failed.' });
    });
};
