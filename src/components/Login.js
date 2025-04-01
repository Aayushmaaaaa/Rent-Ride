import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import googleLogo from "../assets/google.png";
import appleLogo from "../assets/apple-logo.png";
import driftyLogo from "../assets/drifty-logo.png";
import audiCar from "../assets/audi-car.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

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
        throw new Error(data.message || "Failed to login");
      }

      // Store the token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Show success alert instead of redirecting
      alert(`Login successful! Welcome back, ${data.user.name}!`);

      // Optional: Clear the form
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "An error occurred during login");
    } finally {
      setLoading(false);
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
        <p>Enter your credentials to access your account</p>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-options">
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
            <label className="remember-me">
              <input type="checkbox" /> Remember for 30 days
            </label>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="social-login">
          <button className="google-login">
            <img src={googleLogo} alt="Google Logo" />
            Sign in with Google
          </button>
          <button className="apple-login">
            <img src={appleLogo} alt="Apple Logo" />
            Sign in with Apple
          </button>
        </div>
        <p className="signup-link">
          Don't have an account? <Link to="/">Sign up</Link>
        </p>
      </div>
      <div className="signup-image">
        <img src={audiCar} alt="Car" />
      </div>
    </div>
  );
}

export default Login;
