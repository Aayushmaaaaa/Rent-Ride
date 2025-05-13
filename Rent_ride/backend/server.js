require("dotenv").config(); // at the very top

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/admindb");
const kycRoutes = require("./routes/kycRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/kyc", kycRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const authRoutes = require("./routes/authRoutes");
const admincarRoutes = require("./routes/admincarRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/cars", admincarRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🚗 Car Rental Backend API is running!");
});

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
