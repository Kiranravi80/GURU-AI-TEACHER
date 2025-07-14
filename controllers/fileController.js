const fs = require('fs');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const pptxParser = require('pptx2json'); // use alternative if needed
const path = require('path');

exports.handleFileUpload = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const filePath = path.join(__dirname, '..', '..', file.path);
    const ext = path.extname(file.originalname).toLowerCase();

    let extractedText = '';

    if (ext === '.pdf') {
      const data = await pdfParse(fs.readFileSync(filePath));
      extractedText = data.text;
    } else if (ext === '.docx') {
      const result = await mammoth.extractRawText({ path: filePath });
      extractedText = result.value;
    } else if (ext === '.pptx') {
      const parsed = await pptxParser(filePath);
      extractedText = parsed.texts.join('\n');
    } else if (ext === '.txt') {
      extractedText = fs.readFileSync(filePath, 'utf-8');
    } else {
      return res.status(400).json({ error: 'Unsupported file format' });
    }

    res.json({ text: extractedText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process file' });
  }
};
