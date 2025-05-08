import React from "react";
import { Link } from "react-router-dom";
import Logo from "../component/Images/Logo.png"; // Assuming path to your logo
import "./AuthPage.css";

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img src={Logo} alt="Drifty Logo" className="auth-logo" />
          <h1>Welcome to Drifty!</h1>
          <p>Please choose your login type.</p>
        </div>
        <div className="auth-buttons">
          <Link to="/login/user" className="auth-button user">
            <span className="button-icon">👤</span> User Login
          </Link>
          <Link to="/login/admin" className="auth-button admin">
            <span className="button-icon">🛡️</span> Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

