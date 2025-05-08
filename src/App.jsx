import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import VehicleSearchPage from "./component/VehicleSearch/VehicleSearchPage";
import CarDetailPage from "./component/cardetails/CarDetailPage";
import MainContent from "./dealsDetails/MainContent";
import Booking from "./component/Booking/Booking";
import DetailsPage from "./component/DetailsPage/DetailsPage";
import TermsAndPolicies from "./component/TermsAndPoliciesPage/TermsAndPoliciesPage";
// Import the new component
import RidesDashboard from './component/dashboard/RidesDashboard';
import ListVehicleForm from "./component/List Your Vehicles/ListVehicleForm";
import UserProfileDashboard from './component/dashboard/UserProfileDashboard';
import AboutUsPage from "./component/AboutUs/AboutUsPage"; 
import LandingPage from "./component/Landingpage/Landingpage";
import HomePage from "./component/Landingpage/HomePage";
import AuthPage from "./AuthPage/AuthPage";
import LoginPage from "./AuthPage/LoginPage";
import SignUp from "./AuthPage/SignUp";
import ContactUsPage from "./component/ContactUs/ContactUsPage";
import VerificationPage from "./VerificationPage/VerificationPage";
import PaymentPage from "./component/Payment/PaymentPage"; // Import PaymentPage
import OrderConfirmation from "./component/OrderConfirmation/OrderConfirmation";// Import OrderConfirmation
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate("/verification");
  };

  const handleSignupSuccess = () => {
    setIsLoggedIn(true);
    navigate("/verification");
  };

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  useEffect(() => {
    if (isVerified) {
      navigate("/");
      // Reset isVerified after navigating to the home page
      setIsVerified(false);
    }
  }, [isVerified, navigate]);

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
      <Route path="/search" element={<VehicleSearchPage />} />
      <Route path="/cardetails/:id" element={<CarDetailPage isLoggedIn={isLoggedIn} />} />
      <Route path="/dealsdetails" element={<MainContent />} />
      <Route path="/booking/:id" element={<Booking />} /> {/* Your existing booking route */}
      {/* Add the new route for the Booking component after payment */}
      <Route path="/terms-and-policies" element={<TermsAndPolicies />} /> 
      <Route path="/payment/:id/booking" element={<Booking />} />
      <Route path="/profile" element={<UserProfileDashboard />} />
      <Route path="/payment/:id" element={<PaymentPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/login/user" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
      <Route path="/login/admin" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
      <Route path="/list-your-vehicles" element={<ListVehicleForm />} />
      <Route path="/signup" element={<SignUp onSignupSuccess={handleSignupSuccess} />} />
      <Route path="/verification" element={<VerificationPage onVerificationSuccess={handleVerificationSuccess} />} />
      {/* Add the route for the OrderConfirmation component */}
      <Route path="/rides" element={<RidesDashboard />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/order-confirmed" element={<OrderConfirmation />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;