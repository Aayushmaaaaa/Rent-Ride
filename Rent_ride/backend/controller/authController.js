// const User = require("../models/User");
// const generateToken = require("../utils/token");
// const sendVerificationEmail = require("../utils/sendEmail");

// // exports.registerUser = async (req, res) => {
// //   const { name, email, password } = req.body;
// //   try {
// //     const userExists = await User.findOne({ email });
// //     if (userExists)
// //       return res.status(400).json({ message: "User already exists" });

// //     const user = await User.create({ name, email, password });
// //     res.status(201).json({
// //       _id: user._id,
// //       name: user.name,
// //       email: user.email,
// //       token: generateToken(user._id),
// //     });
// //   } catch (err) {
// //     res.status(500).json({ message: "Server error", error: err.message });
// //   }
// // };

// exports.registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists)
//       return res.status(400).json({ message: "User already exists" });

//     const verificationCode = Math.floor(
//       100000 + Math.random() * 900000
//     ).toString();

//     const user = await User.create({ name, email, password, verificationCode });

//     await sendVerificationEmail(email, verificationCode); // ⬅️ send the code

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       message: "Verification code sent to email.",
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// exports.verifyUser = async (req, res) => {
//   const { email, code } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     if (user.verificationCode !== code)
//       return res.status(400).json({ message: "Invalid verification code" });

//     user.isVerified = true;
//     user.verificationCode = null;
//     await user.save();

//     const token = generateToken(user._id);

//     res.status(200).json({
//       message: "Email verified successfully.",
//       token,
//       user: { _id: user._id, name: user.name, email: user.email },
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Verification failed", error: err.message });
//   }
// };

const User = require("../models/User");
const generateToken = require("../utils/token");
const sendVerificationEmail = require("../utils/sendEmail");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = await User.create({ name, email, password, verificationCode });

    await sendVerificationEmail(email, verificationCode);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "Verification code sent to email.",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("Stored password hash:", user.password); // Debug log
    console.log("Entered password:", password); // Debug log
    const isMatch = await user.matchPassword(password);
    console.log("Password match result:", isMatch); // Debug log

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (!user.isVerified) {
      return res
        .status(403)
        .json({ message: "Please verify your email before logging in" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.verifyUser = async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.verificationCode !== code)
      return res.status(400).json({ message: "Invalid verification code" });

    user.isVerified = true;
    user.verificationCode = null;
    await user.save();

    const token = generateToken(user._id);

    res.status(200).json({
      message: "Email verified successfully.",
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Verification failed", error: err.message });
  }
};
