const mongoose = require('mongoose');

let isMockMode = false;

const mockStore = {
  users: [],
  scanReports: [],
  savedTips: [],
  schemes: []
};

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error('[MongoDB Error]: MONGODB_URI is not configured.');
    isMockMode = true;
    return;
  }

  try {
    console.log('[MongoDB] Connecting to MongoDB Atlas...');

    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      family: 4
    });

    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
    console.log('[MongoDB] Database:', conn.connection.name);

    isMockMode = false;

  } catch (error) {
    console.error('[MongoDB Atlas Error]:', error.message);

    // Do NOT silently pretend Atlas is connected.
    isMockMode = true;

    console.warn(
      '[MongoDB] Atlas connection failed. Application is using temporary fallback storage.'
    );
  }
};

const getIsMockMode = () => isMockMode;

const getMockStore = () => mockStore;

module.exports = {
  connectDB,
  getIsMockMode,
  getMockStore
};