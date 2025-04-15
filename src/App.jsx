import React, { useState } from "react";
import "./App.css";

function LoginPage() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [filterType, setFilterType] = useState("All");

  const featuredVehicles = [
    {
      brand: "Mercedes",
      type: "Sedan",
      price: 25,
      gearType: "Automatic",
      features: ["Air Conditioner"],
      image: "src/Images/no3.png",
    },
    {
      brand: "Mercedes",
      type: "Sport",
      price: 50,
      gearType: "Manual",
      features: ["Air Conditioner"],
      image: "src/Images/no4.png",
    },
    {
      brand: "Mercedes",
      type: "Sport",
      price: 50,
      gearType: "Manual",
      features: ["Air Conditioner"],
      image: "src/Images/no5.png",
    },
    {
      brand: "Porsche",
      type: "SUV",
      price: 40,
      gearType: "Automatic",
      features: ["Air Conditioner"],
      image: "src/Images/no6.png",
    },
    {
      brand: "Toyota",
      type: "Sedan",
      price: 35,
      gearType: "Manual",
      features: ["Air Conditioner"],
      image: "src/Images/no7.png",
    },
    {
      brand: "Porsche",
      type: "SUV",
      price: 50,
      gearType: "Automatic",
      features: ["Air Conditioner"],
      image: "src/Images/no8.png",
    },
    {
      brand: "Mercedes",
      type: "Van",
      price: 50,
      gearType: "Automatic",
      features: ["Air Conditioner"],
      image: "src/Images/no9.png",
    },
    {
      brand: "Toyota",
      type: "Sport",
      price: 60,
      gearType: "Manual",
      features: ["Air Conditioner"],
      image: "src/Images/no10.png",
    },
  ];

  const renderVehicleGrid = () => {
    const filteredVehicles =
      filterType === "All"
        ? featuredVehicles
        : featuredVehicles.filter(
            (vehicle) => vehicle.type.toLowerCase() === filterType.toLowerCase()
          );

    return (
      <div className="vehicle-cards">
        {filteredVehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-card">
            <img
              src={vehicle.image}
              alt={vehicle.brand}
              className="vehicle-img"
            />
            <h3>{vehicle.brand}</h3>
            <p>${vehicle.price} per day</p>
            <p>
              {vehicle.type} | {vehicle.gearType}
            </p>
            <p>{vehicle.features.join(" | ")}</p>
            <button className="details-button">View Details</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="home-container">
      {/* NAVBAR SECTION */}
      <div className="navbar">
        <div className="navbar-left">
          <img src="src/Images/Logo.png" alt="Drifty Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <a href="#home">Home</a>
          <a href="#vehicles">Vehicles</a>
          <a href="#details">Details</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="navbar-right">
          <img
            src="src/Images/user.png"
            alt="User Profile"
            className="user-avatar"
          />
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="hero-section">
        <img className="hero-car" src="src/Images/no1.png" alt="Car" />
        <div className="hero-content">
          <h1>
            Rent a Car Anytime <br /> Anywhere in Kathmandu
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Leo aliquam donec elit
            dictum enim sed. Lorem ipsum dolor sit amet consectetur. Leo aliquam
            donec elit dictum enim sed.
          </p>
          <div className="hero-buttons">
            <button className="book-button">Book Now</button>
            <button className="video-button">Watch Video</button>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-section">
        <div className="about-text">
          <h2>
            Ride Your <br /> Dream car With Drifty
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus sociis diam sit
            adipiscing feugiat commodo est eget. Tortor nulla diam pellentesque
            lorem fringilla pulvinar...
          </p>
        </div>
        <div className="about-images">
          <img src="src/Images/p11.png" alt="Car on road" />
          <img src="src/Images/p12.png" alt="Yellow car" />
        </div>
      </div>

      {/* VEHICLE SECTION */}
      <div className="vehicle-section">
        <h2>Choose Your Ride</h2>
        {/* Filter Buttons */}
        <div className="vehicle-filters">
          {[
            { label: "All vehicles", type: "All" },
            { label: "🚗 Sedan", type: "Sedan" },
            { label: "🚘 Cabriolet", type: "Cabriolet" },
            { label: "🛻 Pickup", type: "Pickup" },
            { label: "🚙 SUV", type: "SUV" },
            { label: "🚐 Minivan", type: "Van" },
            { label: "🏎️ Sport", type: "Sport" },
          ].map((filter) => (
            <button
              key={filter.type}
              className={`filter-button ${
                filterType === filter.type ? "active" : ""
              }`}
              onClick={() => setFilterType(filter.type)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        {renderVehicleGrid()}
      </div>
    </div>
  );
}

export default LoginPage;
