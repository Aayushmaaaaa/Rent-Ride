// src/AuthPage/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import googleLogo from '../assets/google.png';
import appleLogo from '../assets/apple-logo.png';
import driftyLogo from '../assets/drifty-logo.png';
import audiCar from '../assets/audi-car.png'; // Assuming it's in src/assets

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      return 'Please include an "@" in the email address.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    let isValid = true;

    const emailErrorMessage = validateEmail(email);
    if (emailErrorMessage) {
      setEmailError(emailErrorMessage);
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    }

    if (isValid) {
      console.log('Login submitted:', { email, password });
      // Simulate successful login - In a real app, you'd check credentials here
      // For demonstration, we'll just check if the email and password are not empty
      if (email && password) {
        alert('Login Successful! Navigating to verification...');
        onLoginSuccess(); // Call the callback to update isLoggedIn in App
        navigate("/verification");
      } else {
        // In a real scenario, you would have logic to verify against a backend
        alert('Invalid email or password.');
        setEmailError('Invalid email or password.');
        setPasswordError('Invalid email or password.');
      }
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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
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