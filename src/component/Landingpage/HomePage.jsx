import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import VehicleSection from "./VehicleSection";

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
