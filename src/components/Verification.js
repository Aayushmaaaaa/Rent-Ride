// components/Verification.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Verification.css';
import logo from '../assets/drifty-logo.png';

function Verification({ onVerificationSuccess }) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate here

  const handleCodeChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        const nextInput = document.querySelector(`.code-input:nth-child(${index + 2}) input`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const verifyCode = () => {
    const enteredCode = code.join('');
    console.log('Entered Code:', enteredCode);

    if (enteredCode === '123456') {
      console.log('Code Matched! Calling onVerificationSuccess...');
      onVerificationSuccess(); // Call the prop to update state in App.js
      // Navigation to /kyc will happen in App.js useEffect
    } else {
      console.log('Code Did NOT Match! Displaying error...');
      setError('Invalid verification code.');
    }
  };

  return (
    <div className="verification-container">
      <div className="left-section">
        <img src={logo} alt="Drifty Logo" className="verification-logo" />
      </div>
      <h1>Get Code From Your Email</h1>
      <p>Enter your code from: yours*******@gmail.com</p>
      <div className="code-inputs">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="code-input">
            <input
              type="text"
              maxLength="1"
              value={code[index]}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Backspace' && !code[index] && index > 0) {
                  const prevInput = document.querySelector(`.code-input:nth-child(${index}) input`);
                  if (prevInput) {
                    prevInput.focus();
                  }
                }
              }}
            />
          </div>
        ))}
      </div>
      <button onClick={verifyCode}>Verify</button>
      {error && <p className="error-message">{error}</p>}
      <p className="resend-code">
        Didn't get the code? <a href="#">Resend</a>
      </p>
    </div>
  );
}

export default Verification;
