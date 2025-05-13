import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import googleLogo from "../assets/google.png";
import appleLogo from "../assets/apple-logo.png";
import driftyLogo from "../assets/drifty-logo.png";
import audiCar from "../assets/audi-car.png";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email.includes("@")) {
      return 'Please include an "@" in the email address.';
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    let isValid = true;

    const emailErrorMessage = validateEmail(email);
    if (emailErrorMessage) {
      setEmailError(emailErrorMessage);
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setEmailError(data.message || "Login failed");
        return;
      }

      // ✅ Save token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          _id: data._id,
          name: data.name,
          email: data.email,
        })
      );
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");
      onLoginSuccess();
      navigate("/");
    } catch (err) {
      setEmailError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          <div className="logo">
            <img src={driftyLogo} alt="Drifty Logo" />
          </div>
        </div>
        <h2>Welcome Back</h2>
        <br></br>
        <br></br>
        <p>Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="show-password-label">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show Password
          </label>
          <label className="remember-me">
            <input type="checkbox" /> Remember for 30 days
          </label>
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="social-login">
          <button className="google-login">
            <img src={googleLogo} alt="Google Logo" /> Sign in with Google
          </button>
          <button className="apple-login">
            <img src={appleLogo} alt="Apple Logo" /> Sign in with Apple
          </button>
        </div>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <div className="login-image">
        <img src={audiCar} alt="Car" />
      </div>
    </div>
  );
}

export default Login;
