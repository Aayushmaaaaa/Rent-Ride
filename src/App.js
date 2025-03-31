// import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Verification from './components/Verification';

function App() {
    const [isVerified, setIsVerified] = useState(false);

    const handleSignupClick = () => {
        setIsVerified(true);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={isVerified ? <Verification /> : <Signup onSignupClick={handleSignupClick} />} />
                    {/* Removed redundant /verification route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
