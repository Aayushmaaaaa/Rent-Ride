const AdminCar = require("../models/adminCar");

// Add a new car
exports.addCar = async (req, res) => {
    
  try {
    const {
      carName,
      carNumber,
      carType,
      phoneNumber,
      ratePerDay, // ✅ Changed key name
      driverName, // ✅ New field
      seats,
      bookingType,
      gearType,
      airCondition,
    } = req.body;

    // const photos = req.files ? req.files.map((file) 0=> file.filename) : [];
    const photos = req.files ? req.files.map((file) => file.filename.trim()) : [];


    const newCar = new AdminCar({
      carName,
      carNumber,
      carType,
      phoneNumber,
      ratePerDay,
      driverName,
      seats,
      bookingType,
      gearType,
      airCondition,
      photos,
    });

    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    console.error("Add Car Error:", err.message);
    res.status(500).json({ error: "Failed to add car" });
  }
};

// Get all cars
exports.getCars = async (req, res) => {
  try {
    const cars = await AdminCar.find().sort({ createdAt: -1 });
    res.json(cars);
  } catch (err) {
    console.error("Get Cars Error:", err.message);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
};
exports.getCarById = async (req, res) => {
  try {
    const car = await AdminCar.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json(car);
  } catch (err) {
    console.error("Get Car By ID Error:", err.message);
    res.status(500).json({ error: "Failed to fetch car details" });
  }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
  console.log("ID received:", req.params.id);
  try {
    const deletedCar = await AdminCar.findByIdAndDelete(req.params.id);

    if (!deletedCar) {
      console.log("Car not found");
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    console.error("Delete Car Error:", err.message);
    res.status(500).json({ error: "Failed to delete car" });
  }
};
