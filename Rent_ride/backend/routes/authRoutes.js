const express = require("express");
const {
  registerUser,
  loginUser,
  verifyUser,
} = require("../controller/authController");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/verify", verifyUser);

module.exports = router;
