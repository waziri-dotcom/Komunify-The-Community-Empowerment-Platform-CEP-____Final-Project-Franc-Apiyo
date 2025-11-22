// src/config/db.js
// MongoDB connection using mongoose.

const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/komunify';
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(uri, opts);
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[${new Date().toISOString()}] MongoDB connected`);
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}

module.exports = { connectDB };
