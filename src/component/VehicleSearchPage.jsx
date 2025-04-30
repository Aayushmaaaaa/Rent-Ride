import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VehicleSearchPage.css";

import no3 from "./Images/no3.png";
import no4 from "./Images/no4.png";
import no5 from "./Images/no5.png";
import no6 from "./Images/no6.png";
import no7 from "./Images/no7.png";
import no8 from "./Images/no8.png";
import no9 from "./Images/no9.png";
import no10 from "./Images/no10.png";
import p12 from "./Images/p12.png";

// Vehicle data
const vehicleData = {
  1: {
    id: 1,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: no3,
  },
  2: {
    id: 2,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: no4,
  },
  3: {
    id: 3,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: no5,
  },
  4: {
    id: 4,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: no6,
  },
  5: {
    id: 5,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: no7,
  },
  6: {
    id: 6,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: no8,
  },
  7: {
    id: 7,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: no9,
  },
  8: {
    id: 8,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: no10,
  },
  9: {
    id: 9,
    name: "Stander",
    brand: "Mercedes–Benz",
    capacity: 6,
    transmission: "Automat",
    ac: "Air Conditioner",
    price: 250,
    image: p12,
  },
};

const VehicleSearchPage = () => {
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    const newMax = parseInt(e.target.value);
    setPriceRange([100, newMax]);
  };

  const handleSearch = () => {
    if (!pickupDate || !dropoffDate || !pickupTime || !dropoffTime) {
      alert("Please fill in all date and time fields.");
      return;
    }
    alert("Search submitted! (This is a placeholder.)");
  };

  const handleReserve = (vehicleName) => {
    alert(`You have selected to reserve: ${vehicleName}`);
  };

  const handleViewDetails = (vehicleId) => {
    navigate(`/cardetails/${vehicleId}`);
  };

  const featuredVehicles = Object.values(vehicleData).filter(
    (vehicle) =>
      vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1]
  );

  return (
    <div className="vehicle-search-page">
      {/* Top Filter Bar */}
      <div className="top-filter-bar">
        <div className="date-time-group">
          <div className="date-group">
            <label>📅 Pick-up Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div className="date-group">
            <label>📅 Drop-off Date</label>
            <input
              type="date"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
            />
          </div>
          <div className="time-group">
            <label>⏰ Pick-up Time</label>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>
          <div className="time-group">
            <label>⏰ Drop-off Time</label>
            <input
              type="time"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
            />
          </div>
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Layout */}
      <div className="main-content">
        <div className="vehicle-filters">
          <h2>Filter by</h2>
          <h3>Car type</h3>
          <div className="filter-group">
            <label>
              <input type="checkbox" /> Mini
            </label>
            <label>
              <input type="checkbox" /> Stander
            </label>
            <label>
              <input type="checkbox" /> Luxury
            </label>
            <label>
              <input type="checkbox" /> Comfort
            </label>
            <label>
              <input type="checkbox" /> Van
            </label>
          </div>

          <h3>Capacity</h3>
          <div className="filter-group">
            <label>
              <input type="checkbox" /> 2 or 5 passenger
            </label>
            <label>
              <input type="checkbox" /> More than 6
            </label>
          </div>

          <h3>Price</h3>
          <input
            type="range"
            min="100"
            max="500"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="price-slider"
          />
          <button className="filter-btn">FILTER</button>
          <div className="price-range">
            Range: Rs{priceRange[0]} - Rs{priceRange[1]}
          </div>
        </div>

        <div className="vehicle-results">
          {featuredVehicles.map((vehicle) => (
            <div className="vehicle-card" key={vehicle.id}>
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="vehicle-img"
              />
              <div className="vehicle-info">
                <h3>{vehicle.name}</h3>
                <p>{vehicle.brand}</p>
                <div className="specs">
                  <p>👤 {vehicle.capacity}</p>
                  <p>⚙️ {vehicle.transmission}</p>
                  <p>❄️ {vehicle.ac}</p>
                </div>
                <div className="bottom">
                  <strong>Rs{vehicle.price}/day</strong>
                  <div className="card-buttons">
                    <button
                      className="reserve-btn"
                      onClick={() => handleReserve(vehicle.name)}
                    >
                      Reserve
                    </button>
                    <button
                      className="details-btn"
                      onClick={() => handleViewDetails(vehicle.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleSearchPage;
