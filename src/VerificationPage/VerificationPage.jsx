// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import logo from "../assets/drifty-logo.png";
// import "./Verification.css";

// function VerificationPage({ onVerificationSuccess }) {
//   const [code, setCode] = useState(['', '', '', '', '', '']);
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleCodeChange = (index, value) => {
//     if (/^\d?$/.test(value)) {
//       const newCode = [...code];
//       newCode[index] = value;
//       setCode(newCode);
//       if (value && index < 5) {
//         const nextInput = document.querySelector(`.code-input:nth-child(${index + 2}) input`);
//         if (nextInput) {
//           nextInput.focus();
//         }
//       }
//     }
//   };

//   const verifyCode = () => {
//     const enteredCode = code.join('');
//     console.log('Entered Code:', enteredCode);

//     if (enteredCode === '123456') {
//       console.log('Code Matched! Calling onVerificationSuccess...');
//       onVerificationSuccess(); // Call the prop to update state in App.js
//       navigate('/'); // Use navigate to go to the home page
//     } else {
//       console.log('Code Did NOT Match! Displaying error...');
//       setError('Invalid verification code.');
//     }
//   };

//   return (
//     <div className="verification-container">
//       <div className="left-section">
//         <img src={logo} alt="Drifty Logo" className="verification-logo" />
//       </div>
//       <h1>Get Code From Your Email</h1>
//       <p>Enter your code from: yours*******@gmail.com</p>
//       <div className="code-inputs">
//         {[0, 1, 2, 3, 4, 5].map((index) => (
//           <div key={index} className="code-input">
//             <input
//               type="text"
//               maxLength="1"
//               value={code[index]}
//               onChange={(e) => handleCodeChange(index, e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Backspace' && !code[index] && index > 0) {
//                   const prevInput = document.querySelector(`.code-input:nth-child(${index}) input`);
//                   if (prevInput) {
//                     prevInput.focus();
//                   }
//                 }
//               }}
//             />
//           </div>
//         ))}
//       </div>
//       <button onClick={verifyCode}>Verify</button>
//       {error && <p className="error-message">{error}</p>}
//       <p className="resend-code">
//         Didn't get the code? <a href="#">Resend</a>
//       </p>
//     </div>
//   );
// }

// export default VerificationPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/drifty-logo.png";
import "./Verification.css";

function VerificationPage({ onVerificationSuccess }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      navigate("/signup"); // Redirect if no email found
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleCodeChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        const nextInput = document.querySelector(
          `.code-input:nth-child(${index + 2}) input`
        );
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const verifyCode = async () => {
    const enteredCode = code.join("");
    if (enteredCode.length !== 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code: enteredCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Verification failed.");
        return;
      }

      localStorage.setItem("token", data.token); // Store token after verification
      onVerificationSuccess();
      navigate("/"); // Redirect to home
    } catch (err) {
      setError("An error occurred during verification.");
      console.error(err);
    }
  };

  return (
    <div className="verification-container">
      <div className="left-section">
        <img src={logo} alt="Drifty Logo" className="verification-logo" />
      </div>
      <h1>Get Code From Your Email</h1>
      <p>
        Enter your code from: {email.replace(/(.{3}).+(@.+)/, "$1*******$2")}
      </p>
      <div className="code-inputs">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="code-input">
            <input
              type="text"
              maxLength="1"
              value={code[index]}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !code[index] && index > 0) {
                  const prevInput = document.querySelector(
                    `.code-input:nth-child(${index}) input`
                  );
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

export default VerificationPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const VerificationPage = () => {
//   const [code, setCode] = useState(["", "", "", "", "", ""]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Get email from localStorage
//   const email = localStorage.getItem("email");

//   useEffect(() => {
//     if (!email) {
//       setError("No email found. Please sign up again.");
//       navigate("/signup");
//     }
//   }, [email, navigate]);

//   const handleChange = (index, value) => {
//     const newCode = [...code];
//     newCode[index] = value.slice(0, 1); // Limit to 1 character
//     setCode(newCode);

//     // Move focus to next input
//     if (value && index < 5) {
//       document.getElementById(`code-${index + 1}`).focus();
//     }
//   };

//   const handleVerify = async () => {
//     const verificationCode = code.join("");
//     if (verificationCode.length !== 6) {
//       setError("Please enter a 6-digit code.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, code: verificationCode }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Verification failed");
//       }

//       alert("Email verified successfully!");
//       localStorage.removeItem("email"); // Clear email after verification
//       navigate("/login"); // Redirect to login page
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-6">
//       <h2 className="text-2xl font-semibold">Verify Your Email</h2>
//       {error && <p className="text-red-600">{error}</p>}
//       <p>Enter the 6-digit code sent to {email}</p>
//       <div className="flex gap-2">
//         {code.map((digit, index) => (
//           <input
//             key={index}
//             id={`code-${index}`}
//             type="text"
//             value={digit}
//             onChange={(e) => handleChange(index, e.target.value)}
//             className="border p-2 rounded w-12 text-center"
//             maxLength="1"
//             autoFocus={index === 0}
//           />
//         ))}
//       </div>
//       <button
//         onClick={handleVerify}
//         className="bg-blue-500 text-white p-2 rounded"
//       >
//         Verify
//       </button>
//     </div>
//   );
// };

// export default VerificationPage;
