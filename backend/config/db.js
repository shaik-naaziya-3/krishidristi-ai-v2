const mongoose = require('mongoose');

let isMockMode = false;
const mockStore = {
  users: [],
  scanReports: [],
  savedTips: [],
  schemes: []
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/krishidrishti', {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
    isMockMode = false;
  } catch (error) {
    console.warn(`[MongoDB Warning]: Local MongoDB connection failed (${error.message}). Operating in Graceful Fallback Mode.`);
    isMockMode = true;
  }
};

const getIsMockMode = () => isMockMode;
const getMockStore = () => mockStore;

module.exports = { connectDB, getIsMockMode, getMockStore };
