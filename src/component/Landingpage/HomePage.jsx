import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import VehicleSection from "./VehicleSection";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VehicleSection />
    </div>
  );
}

export default HomePage;
