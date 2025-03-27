import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DriftyLogin from "./components/DriftyLogin";
import DriftySignup from './components/DriftySignup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DriftySignup />} />
        <Route path="/login" element={<DriftyLogin />} />
      </Routes>
    </Router>
  );
}

export default App;