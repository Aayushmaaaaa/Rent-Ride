import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import googleLogo from '../assets/google.png';

import appleLogo from '../assets/apple-logo.png';
import driftyLogo from '../assets/drifty-logo.png';
import audiCar from '../assets/audi-car.png'; // Import car image

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Add your login logic here (or simulate login)
    // For now, let's just navigate back to signup as an example

    navigate("/"); // navigate to signup page
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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-options">
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
            <label className="remember-me">
              <input type="checkbox" /> Remember for 30 days
            </label>
          </div>
          <button type="submit" className="login-button">
            Login
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
