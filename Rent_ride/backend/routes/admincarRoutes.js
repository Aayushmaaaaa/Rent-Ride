const express = require("express");
const router = express.Router();
const multer = require("multer");
const admincarController = require("../controller/admincarController");

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

// Multer middleware
const upload = multer({ storage });

// Add a new car (with a photo)
// router.post("/add", upload.single("photos"), admincarController.addCar);
router.post("/add", upload.array("photos", 5), admincarController.addCar);

// Get all cars
router.get("/", admincarController.getCars);
router.get("/:id", admincarController.getCarById);

// Delete a car by ID
router.delete("/:id", admincarController.deleteCar);

module.exports = router;
