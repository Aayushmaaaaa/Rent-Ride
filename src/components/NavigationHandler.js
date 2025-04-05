// import React, { useState, useEffect } from "react";
// import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Verification from "./components/Verification";
// import KycVerification from './components/KycVerification';

// function NavigationHandler() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isVerified, setIsVerified] = useState(false);
//   const navigate = useNavigate();

//   const handleSignupClick = () => {
//     setIsLoggedIn(true);
//   };

//   const handleVerificationSuccess = () => {
//     setIsVerified(true);
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate('/verification');
//     }
//   }, [isLoggedIn, navigate]);

//   useEffect(() => {
//     if (isVerified) {
//       navigate('/kyc');
//     }
//   }, [isVerified, navigate]);

//   return (
//     <Routes>
//       {/* Route for Signup */}
//       <Route path="/" element={<Navigate to="/signup" />} />
//       <Route path="/signup" element={<Signup onSignupClick={handleSignupClick} />} />

//       {/* Route for Login */}
//       <Route path="/login" element={<Login />} />

//       {/* Route for Verification (only shows if the user is logged in) */}
//       <Route
//         path="/verification"
//         element={isLoggedIn ? <Verification onVerificationSuccess={handleVerificationSuccess} /> : <Navigate to="/signup" />}
//       />

//       {/* Route for KYC Verification (only shows if logged in and verified) */}
//       <Route
//         path="/kyc"
//         element={isLoggedIn && isVerified ? <KycVerification /> : <Navigate to="/signup" />}
//       />
//     </Routes>
//   );
// }

// export default NavigationHandler;

// import React, { useState, useEffect } from "react";
// import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
// import Signup from "./Signup"; // Corrected path
// import Login from "./Login";   // Corrected path
// import Verification from "./Verification"; // Corrected path
// import KycVerification from "./KycVerification"; // Corrected path

// function NavigationHandler() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isVerified, setIsVerified] = useState(false);
//   const navigate = useNavigate();

//   const handleSignupClick = () => {
//     setIsLoggedIn(true);
//   };

//   const handleVerificationSuccess = () => {
//     setIsVerified(true);
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate('/verification');
//     }
//   }, [isLoggedIn, navigate]);

//   useEffect(() => {
//     if (isVerified) {
//       navigate('/kyc');
//     }
//   }, [isVerified, navigate]);

//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/signup" />} />
//       <Route path="/signup" element={<Signup onSignupClick={handleSignupClick} />} />
//       <Route path="/login" element={<div><h1>Login Component</h1></div>} />
//       <Route
//         path="/verification"
//         element={isLoggedIn ? <Verification onVerificationSuccess={handleVerificationSuccess} /> : <Navigate to="/signup" />}
//       />
//       <Route
//         path="/kyc"
//         element={isLoggedIn && isVerified ? <KycVerification /> : <Navigate to="/signup" />}
//       />
//     </Routes>
//   );
// }

// export default NavigationHandler;

import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";


import Signup from "./Signup";
import Login from "./Login";
import Verification from "./Verification";
import KycVerification from "./KycVerification";
function NavigationHandler() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setIsLoggedIn(true);
  };

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/verification');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (isVerified) {
      navigate('/kyc');
    }
  }, [isVerified, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route
        path="/signup"
        element={<Signup onSignupClick={handleSignupClick} />}
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/verification"
        element={isLoggedIn ? (
          <Verification onVerificationSuccess={handleVerificationSuccess} />
        ) : (
          <Navigate to="/signup" />
        )}
      />
      <Route
        path="/kyc"
        element={isLoggedIn && isVerified ? <KycVerification /> : <Navigate to="/signup" />}
      />
    </Routes>
  );
}

export default NavigationHandler;