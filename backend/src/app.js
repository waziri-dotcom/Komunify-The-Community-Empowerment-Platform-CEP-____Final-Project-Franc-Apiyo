// src/app.js
// Express app setup.

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

const authRoutes = require('./routes/auth');
const foodRoutes = require('./routes/food');
const loansRoutes = require('./routes/loans');
const communitiesRoutes = require('./routes/communities');
const projectsRoutes = require('./routes/projects');
const chatRoutes = require('./routes/chat');

const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/loans', loansRoutes);
app.use('/api/communities', communitiesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/chat', chatRoutes);

// Health
app.get('/health', (req, res) => res.json({ ok: true }));

// Static (if needed)
app.use('/static', express.static(path.join(__dirname, '..', 'public')));

// Error handler (should be last)
app.use(errorHandler);

module.exports = app;
