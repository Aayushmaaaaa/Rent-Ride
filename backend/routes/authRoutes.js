const express = require("express");
const { registerUser } = require("../controllers/authController"); // ✅ Correct path

const router = express.Router();

router.post("/signup", registerUser);

module.exports = router;
