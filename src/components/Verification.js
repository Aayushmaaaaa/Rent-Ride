import React, { useState } from 'react';
import './Verification.css';
import driftyLogo from '../assets/drifty-logo.png'; // Corrected import path

function Verification() {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join('');
    console.log('Entered Code:', enteredCode);
    // Implement your verification logic here
  };

  const handleResend = () => {
    console.log('Resend code');
    // Implement your resend logic here
  };

  return (
    <div className="verification-container">
      <div className="verification-form">
        <div className="logo-container">
          <div className="logo">
            <img src={driftyLogo} alt="Drifty Logo" />
          </div>
        </div>
        <h2>Get Code From Your Email</h2>
        <p>Enter your code from: yours******@gmail.com</p>
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <p className="resend-link">
          Didn't get the code? <button onClick={handleResend}>Resend</button>
        </p>
        <button className="verify-button" onClick={handleVerify}>
          Verify
        </button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
}

export default Verification;