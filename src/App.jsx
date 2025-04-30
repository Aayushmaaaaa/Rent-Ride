import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VehicleSearchPage from "./component/VehicleSearchPage";
import CarDetailPage from "./component/cardetails/CarDetailPage";
import MainContent from "./dealsDetails/MainContent";
// import HomePage from "./component/Landingpage/HomePage";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehicleSearchPage />} />
        <Route path="/cardetails/:id" element={<CarDetailPage />} />
       <Route path="/dealsdetails" element={<MainContent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
