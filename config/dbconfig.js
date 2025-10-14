// In Athena mode, we don't connect to MongoDB, but we need this file
// to maintain compatibility with the app.js structure

const connectDB = async () => {
  console.log('Running in Athena mode - no MongoDB connection required');
  return true; // Return success to prevent errors
};

module.exports = connectDB;