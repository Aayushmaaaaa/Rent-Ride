// src/pages/AdminLoginPage.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../component/Images/Logo.png"; // Assuming path to your logo
import "./AdminLoginPage.css"; // Create this CSS file

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would authenticate against a backend.
    if (username === "admin" && password === "123456") {
      console.log("Admin logged in successfully!");
      // Redirect to the MainContent route
      navigate("/dealsdetails"); // Assuming "/dealsdetails" is the correct route
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <Link to="/" className="back-link">
            &larr; Back to Login Options
          </Link>
          <img src={Logo} alt="Drifty Logo" className="admin-login-logo" />
          <h2>Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="admin-login-form">
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="admin-login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;