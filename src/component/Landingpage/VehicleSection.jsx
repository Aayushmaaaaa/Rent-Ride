import React, { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";
import { useNavigate } from "react-router-dom";

import no3 from "../Images/no3.png";
import no4 from "../Images/no4.png";
import no5 from "../Images/no5.png";
import no6 from "../Images/no6.png";

const VehicleSection = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const categories = ["All vehicles", "Sedan", "Sport", "SUV"];

  const vehicles = [
    {
      id: 1,
      brand: "Mercedes",
      type: "Sedan",
      price: 25,
      transmission: "Automatic",
      airConditioner: true,
      image: no3,
    },
    {
      id: 2,
      brand: "Mercedes",
      type: "Sport",
      price: 50,
      transmission: "Manual",
      airConditioner: true,
      image: no4,
    },
    {
      id: 3,
      brand: "Porsche",
      type: "SUV",
      price: 40,
      transmission: "Automatic",
      airConditioner: true,
      image: no5,
    },
    {
      id: 4,
      brand: "Toyota",
      type: "Sedan",
      price: 35,
      transmission: "Manual",
      airConditioner: true,
      image: no6,
    },
    {
      id: 1,
      brand: "Mercedes",
      type: "Sedan",
      price: 25,
      transmission: "Automatic",
      airConditioner: true,
      image: no3,
    },
    {
      id: 2,
      brand: "Mercedes",
      type: "Sport",
      price: 50,
      transmission: "Manual",
      airConditioner: true,
      image: no4,
    },
    {
      id: 3,
      brand: "Porsche",
      type: "SUV",
      price: 40,
      transmission: "Automatic",
      airConditioner: true,
      image: no5,
    },
    {
      id: 4,
      brand: "Toyota",
      type: "Sedan",
      price: 35,
      transmission: "Manual",
      airConditioner: true,
      image: no6,
    },
    {
      id: 3,
      brand: "Porsche",
      type: "SUV",
      price: 40,
      transmission: "Automatic",
      airConditioner: true,
      image: no5,
    },
    {
      id: 4,
      brand: "Toyota",
      type: "Sedan",
      price: 35,
      transmission: "Manual",
      airConditioner: true,
      image: no6,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All vehicles");

  const filteredVehicles =
    selectedCategory === "All vehicles"
      ? vehicles
      : vehicles.filter((car) => car.type === selectedCategory);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home"); // Redirect to the home page if logged in
    }
  }, [isLoggedIn, navigate]);

  return (
    <section className="vehicle-section">
      <h2 className="section-title">Choose Your Ride.</h2>

      <div className="vehicle-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="vehicle-grid">
        {filteredVehicles.map((car) => (
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </div>
    </section>
  );
};

export default VehicleSection;