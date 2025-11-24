const mongoose = require('mongoose');
const logger = require('../utils/logger');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/komunify';

const connectDB = async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logger.info('Connected to MongoDB');
};

module.exports = { connectDB };
