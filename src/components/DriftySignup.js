import React from 'react';
import './DriftySignup.css'; // Corrected import

import googleLogo from '../assets/google-logo.png';
import bmwCar from '../assets/bmw-car.png';
import driftyLogo from '../assets/drifty-logo.png';

function DriftySignup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={driftyLogo} alt="Drifty Logo" className="logo" />
        <h2>Create your account.</h2>
        <p>Drive Swiftly with drifty!</p>

        <button className="google-signup">
          <img src={googleLogo} alt="Google" />
          Continue with Google
        </button>

        <div className="or-divider">OR</div>

        <input type="text" placeholder="Email/Phone" />
        <input type="password" placeholder="Password" />

        <label>
          <input type="checkbox" />
          I Agree To All Terms, Privacy Policy And Fees.
        </label>

        <button className="signup-button">SIGN UP</button>

        <p className="login-link">
          Already Have an Account? <a href="/login">LOGIN</a>
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

export default DriftySignup;