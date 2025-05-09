import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CarDetailPage.css";

const CarDetailPage = ({ isLoggedIn }) => {
  const { id } = useParams(); // Get the car ID from the URL
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingType, setBookingType] = useState("self-drive"); // Default booking type
  const [selectedDateTime, setSelectedDateTime] = useState(new Date()); // Default to current date and time
  const [showDateTimeSelector, setShowDateTimeSelector] = useState(false); // To toggle date-time selector

  // Fetch car details based on the ID when the component mounts
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cars/681d140faaca183a091411b8`
          // Fetch car data from backend
        );
        setCar(response.data);
      } catch (err) {
        console.error("Failed to fetch car:", err);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchCar();
  }, [id]);

  // Handle booking button click
  const handleBookClick = () => {
    if (isLoggedIn) {
      // Navigate to payment page with selected booking type and date-time
      navigate(
        `/payment/${id}?type=${bookingType}&dateTime=${selectedDateTime.toISOString()}`
      );
    } else {
      navigate("/login/user"); // If not logged in, navigate to login page
    }
  };

  // Change the booking type
  const handleBookingTypeChange = (type) => {
    setBookingType(type);
  };

  // Handle date-time selection
  const handleDateTimeChange = (event) => {
    setSelectedDateTime(new Date(event.target.value));
  };

  // Toggle the visibility of the date-time selector
  const toggleDateTimeSelector = () => {
    setShowDateTimeSelector(!showDateTimeSelector);
  };

  // Loading state
  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Car not found.</p>;

  return (
    <div className="car-detail-container">
      <div className="car-main">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="car-info">
          <h2 className="car-brand">{car.carName}</h2>
          <p className="car-model">Vehicle ID: {car._id}</p>
          <img
            src={`http://localhost:5000/uploads/${car.photo[0]}`} // Assuming the first photo is used
            alt={car.carName}
            className="car-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/default-car.png"; // Fallback image if car image doesn't load
            }}
          />

          <div className="color-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot red"></span>
          </div>

          <div className="features">
            <p>Gear: {car.gearType}</p>
            <p>AC: {car.airCondition}</p>
            <p>Seats: {car.seats}</p>
          </div>

          <div className="rating">
            <p>{car.description || "No description available."}</p>
            <h1>4.8</h1>
          </div>
        </div>

        <div className="car-details">
          <h2>Details</h2>
          <p className="details-desc">
            {car.details || "No additional details provided."}
          </p>

          <div className="detail-item">
            <span>⚙️ Gear</span>
            <span className="value">{car.gearType}</span>
          </div>
          <div className="detail-item">
            <span>❄️ Air Conditioner</span>
            <span className="value">{car.airCondition}</span>
          </div>
          <div className="detail-item">
            <span>🧍 Seater</span>
            <span className="value">{car.seats}</span>
          </div>
          <div className="detail-item">
            <span>💲 Rate</span>
            <span className="value bold">{car.ratePerDay || "$200/day"}</span>
          </div>

          <div className="booking-type-selection">
            <p className="booking-type-label">Booking Type:</p>
            <div className="booking-options">
              <button
                className={`booking-option-button ${
                  bookingType === "self-drive" ? "active" : ""
                }`}
                onClick={() => handleBookingTypeChange("self-drive")}
              >
                Self Drive
              </button>
              <button
                className={`booking-option-button ${
                  bookingType === "with-driver" ? "active" : ""
                }`}
                onClick={() => handleBookingTypeChange("with-driver")}
              >
                With Driver
              </button>
            </div>
          </div>

          <div className="book-box">
            <p className="date-label">Date & Time</p>
            <button
              className="date-time-button"
              onClick={toggleDateTimeSelector}
            >
              {selectedDateTime.toLocaleString()}
            </button>
            {showDateTimeSelector && (
              <input
                type="datetime-local"
                value={selectedDateTime.toISOString().slice(0, 16)} // Format for datetime-local input
                onChange={handleDateTimeChange}
                className="date-time-input"
              />
            )}
            <button className="book-button" onClick={handleBookClick}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
