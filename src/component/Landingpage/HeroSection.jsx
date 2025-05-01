import React from "react";
import carImage from "../Images/no1.png";
import locationPath from "../Images/Middlemap.png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src={carImage} alt="Car" className="hero-car" />
        <img src={locationPath} alt="Path" className="hero-path" />
      </div>
      <div className="hero-right">
        <h1>
          Rent a Car Anytime
          <br />
          Anywhere in Kathmandu
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Leo aliquam donec elit dictum
          enim sed. Lorem ipsum dolor sit amet consectetur. Leo aliquam donec
          elit dictum enim sed.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Book Now</button>
          <button className="btn-secondary">
            <span className="play-icon">▶</span> Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
