import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Verification.css';
import logo from '../assets/drifty-logo.png';

function Verification() {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCodeChange = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    };

    const verifyCode = () => {
        const enteredCode = code.join('');

        // Replace with your actual backend verification logic
        if (enteredCode === '123456') {
            navigate('/kyc');
        } else {
            setError('Incorrect code. Please try again.');
        }
    };

    return (
        <div className="verification-container">
            <div className="left-section">
                <img src={logo} alt="Drifty Logo" className="verification-logo" />
            </div>
            <div className="right-section">
                <h1>Get Code From Your Email</h1>
                <p>Enter your code from: your********@gmail.com</p>
                <div className="code-inputs">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleCodeChange(index, e.target.value)}
                        />
                    ))}
                </div>
                {error && <p className="error">{error}</p>}
                <button onClick={verifyCode}>Verify Code</button>
                <p className="resend-code">Didn't get the code? <a href="#">Resend</a></p>
            </div>
            
        </div>
    );
}

export default Verification;