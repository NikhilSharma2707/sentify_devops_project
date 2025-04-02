const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/sentify';
  let retries = 5;
  while (retries) {
    try {
      const conn = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return; // Successful connection, exit the function.
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      // Wait 5 seconds before retrying.
      await new Promise(res => setTimeout(res, 5000));
    }
  }
  console.error('Failed to connect to MongoDB after several attempts. Exiting...');
  process.exit(1);
};

module.exports = connectDB;
