import React, { useState } from 'react';
import './DriftySignup.css'; // Reusing the same CSS for consistency

import googleLogo from '../assets/google-logo.png';
import bmwCar from '../assets/bmw-car.png';
import driftyLogo from '../assets/drifty-logo.png';

function DriftyLogin() {
  // States for input values and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Validation function for email and password
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.');
      return false;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }

    setError(''); // Clear error if validation passes
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with login (you can integrate backend logic here)
      alert('Login successful');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={driftyLogo} alt="Drifty Logo" className="logo" />
        <h2>Login</h2>
        <p>Drive Swiftly with Drifty!</p>

        <button className="google-signup">
          <img src={googleLogo} alt="Google" />
          Continue with Google
        </button>

        <div className="or-divider">OR</div>

        <input
          type="text"
          placeholder="Email/Phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="error-message">{error}</div>}

        <button className="signup-button" onClick={handleSubmit}>LOGIN</button>

        <p className="login-link">
          Don't Have an Account? <a href="/">SIGN UP</a>
        </p>
      </div>

      <div className="design-elements">
        <img src={bmwCar} alt="BMW Car" className="car-image" />
        <div className="green-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </div>
    </div>
  );
}

export default DriftyLogin;

