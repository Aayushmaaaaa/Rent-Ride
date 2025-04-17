// Import the User model for interacting with the users collection in MongoDB
const User = require("../models/User");

// Import bcryptjs for password hashing
const bcrypt = require("bcryptjs");

// Import jsonwebtoken for creating JWT tokens
const jwt = require("jsonwebtoken");

//Register a new user 
const registerUser = async (req, res) => {
  // Destructure name, email, and password from the request body
  const { name, email, password } = req.body;
  console.log("Received signup request:", req.body); // Debug message

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password using bcrypt with 10 salt rounds
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    // Create a new user object and save it to the database
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    console.log("User saved to database:", newUser);

    // Generate a JWT token that includes the user ID and expires in 7 days
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    console.log("JWT Token Generated");

    // Send success response with the user data (excluding password) and token
    res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
      token,
    });
  } catch (error) {
    // Log and return any server error
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// =============================
// 📌 Login Existing User
// =============================
const loginUser = async (req, res) => {
  // Destructure email and password from the request body
  const { email, password } = req.body;
  console.log("Received login request for:", email);

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    console.log("User found in database:", user ? "Yes" : "No");
    
    // If user not found, return unauthorized response
    if (!user) {
      console.log("Login failed: User not found");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the given password with the stored hashed password
    console.log("Comparing password with hash");
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);
    
    // If password doesn't match, return unauthorized response
    if (!isMatch) {
      console.log("Login failed: Password doesn't match");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token if credentials are valid
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    console.log("Login successful, JWT Token Generated for user:", user.email);

    // Send success response with user data (excluding password) and token
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    // Log and return any server error
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Export both functions to be used in routes (e.g., userRoutes.js)
module.exports = { registerUser, loginUser };
