import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Verification from "./components/Verification";
import KycVerification from './components/KycVerification';

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [isKycCompleted, setIsKycCompleted] = useState(false);

  const handleSignupClick = () => {
    setIsVerified(true); // Set as verified when signup is clicked
  };

  const handleKycCompletion = () => {
    setIsKycCompleted(true);  // Set KYC as completed
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Signup */}
          <Route path="/" element={<Signup onSignupClick={handleSignupClick} />} />

          {/* Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Route for Verification (only shows if the user is signed up) */}
          <Route
            path="/verification"
            element={isVerified ? <Verification /> : <Signup onSignupClick={handleSignupClick} />}
          />

          {/* Route for KYC Verification */}
          <Route
            path="/kyc"
            element={
              isVerified && !isKycCompleted ? (
                <KycVerification onKycComplete={handleKycCompletion} />
              ) : (
                <h2>KYC Completed!</h2> // Display this message after KYC is completed
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



