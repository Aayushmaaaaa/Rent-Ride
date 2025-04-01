const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const validateSignup = require("../middleware/validateSignup");
const validateLogin = require("../middleware/validateLogin");

const router = express.Router();

router.post("/signup", validateSignup, registerUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;