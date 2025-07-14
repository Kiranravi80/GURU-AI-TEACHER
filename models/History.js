const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
  explanation: String,
  audioUrl: String,
  imageUrl: String,
  videoUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('History', historySchema);
