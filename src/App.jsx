import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VehicleSearchPage from "./component/VehicleSearch/VehicleSearchPage";
import CarDetailPage from "./component/cardetails/CarDetailPage";
import MainContent from "./dealsDetails/MainContent";
import Booking from "./component/Booking/Booking";
import LandingPage from "./component/Landingpage/Landingpage";
import HomePage from "./component/Landingpage/HomePage";
// import HomePage from "./component/Landingpage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage/>}  />
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/search" element={<VehicleSearchPage />} />
        <Route path="/cardetails/:id" element={<CarDetailPage />} />
       <Route path="/dealsdetails" element={<MainContent/>}/>
       <Route path="/booking/:id" element={<Booking/>}/>
      </Routes>
    </Router>
  );
}

export default App;
