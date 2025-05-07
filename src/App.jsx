import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import VehicleSearchPage from "./component/VehicleSearch/VehicleSearchPage";
import CarDetailPage from "./component/cardetails/CarDetailPage";
import MainContent from "./dealsDetails/MainContent";
import Booking from "./component/Booking/Booking";
import LandingPage from "./component/Landingpage/Landingpage";
import HomePage from "./component/Landingpage/HomePage";
import DriverVerification from "./dealsDetails/DriverVerification";
import UserVerification from "./dealsDetails/UserVerification";
import ProfileSettings from "./dealsDetails/ProfileSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/search" element={<VehicleSearchPage />} />
        <Route path="/cardetails/:id" element={<CarDetailPage />} />
        <Route path="/dealsdetails">
          <Route index element={<MainContent/>}/>
          <Route path="vehicles" element={<MainContent/>}/>
          <Route path="driver-verification" element={<DriverVerification/>}/>
          <Route path="user-verification" element={<UserVerification/>}/>
          <Route path="profile-settings" element={<ProfileSettings/>} />
        </Route>
        <Route path="/booking/:id" element={<Booking/>}/>
      </Routes>
    </Router>
  );
}

export default App;
