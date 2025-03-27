import React, { useState } from 'react';
import './DriftySignup.css'; // Reusing the same CSS for consistency

import googleLogo from '../assets/google-logo.png';
import bmwCar from '../assets/bmw-car.png';
import driftyLogo from '../assets/drifty-logo.png';

function DriftyLogin() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={driftyLogo} alt="Drifty Logo" className="logo" />
        <h2>{isSignup ? 'Create your account.' : 'Login'}</h2>
        <p>Drive Swiftly with Drifty!</p>

        <button className="google-signup">
          <img src={googleLogo} alt="Google" />
          Continue with Google
        </button>

        <div className="or-divider">OR</div>

        <input type="text" placeholder="Email/Phone" />
        <input type="password" placeholder="Password" />

        {isSignup && (
          <label>
            <input type="checkbox" /> I Agree To All Terms, Privacy Policy And Fees.
          </label>
        )}

        <button className="signup-button">{isSignup ? 'SIGN UP' : 'LOGIN'}</button>

        <p className="login-link">
          {isSignup ? (
            <>Already Have an Account? <a href="#" onClick={() => setIsSignup(false)}>LOGIN</a></>
          ) : (
            <>Don't Have an Account? <a href="#" onClick={() => setIsSignup(true)}>SIGN UP</a></>
          )}
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
