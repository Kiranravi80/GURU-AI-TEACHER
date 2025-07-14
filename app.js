const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');

require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/explain', require('./routes/explainRoutes'));
app.use('/api/tts', require('./routes/ttsRoutes'));
app.use('/api/image', require('./routes/imageRoutes'));
app.use('/api/video', require('./routes/videoRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/session', require('./routes/sessionRoutes'));

app.get('/', (req, res) => {
  res.send('🌟 GURU AI Assistant Backend is Running');
});

module.exports = app;
