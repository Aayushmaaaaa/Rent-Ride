// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const { submitKyc } = require("../controller/kycController");

// const router = express.Router();

// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = Date.now() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });

// const upload = multer({ storage });

// // Route to handle KYC form submission
// router.post("/submit", upload.single("licenseImage"), submitKyc);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  submitKyc,
  getAllKyc,
  updateKycStatus,
} = require("../controller/kycController");

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Routes
router.post("/submit", upload.single("licenseImage"), submitKyc);
router.get("/all", getAllKyc);
router.put("/update/:id", updateKycStatus);

module.exports = router;
