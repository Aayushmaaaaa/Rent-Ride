import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import googleLogo from '../assets/google.png';
import appleLogo from '../assets/apple-logo.png';
import audiCar from '../assets/audi-car.png';
import driftyLogo from '../assets/drifty-logo.png';

function Signup({ onSignupClick }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
      setError('Please enter your name.');
      return false;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    if (!agreeTerms) {
      setError('Please agree to the terms and policy.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signup submitted:', { name, email, password, agreeTerms });

      // Simulate successful signup (remove the fetch call)
      console.log('Simulating successful signup...');
      onSignupClick(); // Navigate to Verification
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="logo-container">
          <div className="logo">
            <img src={driftyLogo} alt="Drifty Logo" />
          </div>
        </div>
        <h2>Get Started Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            Agree to the terms & policy
          </label>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <div className="social-signup">
          <button className="google-signup">
            <img src={googleLogo} alt="Google Logo" />
            Sign in with Google
          </button>
          <button className="apple-signup">
            <img src={appleLogo} alt="Apple Logo" />
            Sign in with Apple
          </button>
        </div>
        <p className="login-link">
          Have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
      <div className="signup-image">
        <img src={audiCar} alt="Car" />
      </div>
    </div>
  );
}

export default Signup;
