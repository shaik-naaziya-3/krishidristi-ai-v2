const mongoose = require('mongoose');

let isMockMode = false;
const mockStore = {
  users: [],
  scanReports: [],
  savedTips: [],
  schemes: []
};

const connectDB = async () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/krishidrishti';

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: isProduction ? 10000 : 3000
    });
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
    isMockMode = false;
  } catch (error) {
    if (isProduction) {
      console.error(`[MongoDB Atlas Production Error]: Connection failed (${error.message}).`);
      isMockMode = false;
    } else {
      console.warn(`[MongoDB Warning]: Local MongoDB connection failed (${error.message}). Operating in Graceful Fallback Mode.`);
      isMockMode = true;
    }
  }
};

const getIsMockMode = () => isMockMode;
const getMockStore = () => mockStore;

module.exports = { connectDB, getIsMockMode, getMockStore };
