const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const authRoutes = require('./routes/auth');
const foodRoutes = require('./routes/food');
const loansRoutes = require('./routes/loans');
const communitiesRoutes = require('./routes/communities');
const projectsRoutes = require('./routes/projects');
const chatRoutes = require('./routes/chat');

const { errorHandler } = require('./middleware/errorHandler');
const logger = require('./utils/logger');

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(compression());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('combined', { stream: logger.stream }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/loans', loansRoutes);
app.use('/api/communities', communitiesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/chat', chatRoutes);

// health
app.get('/health', (req, res) => res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' }));

// error handler (last middleware)
app.use(errorHandler);

module.exports = app;
