// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Load environment variables from a .env file (like MONGO_URI)
require("dotenv").config();

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Try to connect to MongoDB using the connection string stored in the environment variable
    await mongoose.connect(process.env.MONGO_URI);

    // If successful, log a success message
    console.log("MongoDB Connected...");
  } catch (error) {
    // If there's an error during connection, log the error message
    console.error("MongoDB Connection Error:", error);

    // Exit the process with failure (non-zero status)
    process.exit(1);
  }
};

// Export the connectDB function so it can be used in other files (e.g., app.js or index.js)
module.exports = connectDB;
