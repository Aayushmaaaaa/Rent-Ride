// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfileDashboard from './components/UserProfileDashboard';
import RidesDashboard from './components/RidesDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserProfileDashboard />} />
          <Route path="/rides" element={<RidesDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;