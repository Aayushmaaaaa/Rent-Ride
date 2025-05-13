const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carName: String,
    carNumber: String,
    carType: String,
    phoneNumber: String,
    ratePerDay: String,
    seats: Number,
    bookingType: String,
    gearType: String,
    airCondition: String,
    photos: [String], // ✅ updated from photo: String
    driverName: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("admincar", carSchema);
