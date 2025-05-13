// // src/component/cardetails/CarDetailPage.jsx
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./CarDetailPage.css";

// const CarDetailPage = ({ isLoggedIn }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const carName = `Vehicle ID: ${id}`;
//   const [bookingType, setBookingType] = useState("self-drive"); // Default to self-drive
//   const [selectedDateTime, setSelectedDateTime] = useState(new Date()); // State to hold selected date and time
//   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

//   const handleBookClick = () => {
//     if (isLoggedIn) {
//       navigate(`/kyc-verification`); // Navigate to KYC verification
//     } else {
//       navigate('/login/user'); // Navigate to login if not logged in
//     }
//   };

//   const handleBookingTypeChange = (type) => {
//     setBookingType(type);
//   };

//   const handleDateTimeChange = (event) => {
//     setSelectedDateTime(new Date(event.target.value));
//   };

//   const toggleDateTimeSelector = () => {
//     setShowDateTimeSelector(!showDateTimeSelector);
//   };

//   return (
//     <div className="car-detail-container">
//       <div className="car-main">
//         <button className="back-button" onClick={() => navigate(-1)}>
//           ←
//         </button>

//         <div className="car-info">
//           <h2 className="car-brand">Mercedes-Benz</h2>
//           <p className="car-model">{carName}</p>
//           <img
//             src="/images/mercedes.png"
//             alt="Mercedes S-Class"
//             className="car-image"
//           />

//           <div className="color-dots">
//             <span className="dot active"></span>
//             <span className="dot"></span>
//             <span className="dot"></span>
//             <span className="dot red"></span>
//           </div>

//           <div className="features">
//             <p>comfort</p>
//             <p>smooth</p>
//             <p>luxury</p>
//           </div>

//           <div className="rating">
//             <p>Lorem ipsum dolor sit amet consectetur.</p>
//             <h1>5.0</h1>
//           </div>
//         </div>

//         <div className="car-details">
//           <h2>Details</h2>
//           <p className="details-desc">
//             Lorem ipsum dolor sit amet consectetur. Nulla scelerisque posuere
//             amet a at. Hendrerit lectus eu rhoncus elit turpis dictumst massa
//             volutpat.
//           </p>

//           <div className="detail-item">
//             <span>⚙️ Automate</span>
//             <span className="value">Yes</span>
//           </div>
//           <div className="detail-item">
//             <span>❄️ Air Conditioner</span>
//             <span className="value">Yes</span>
//           </div>
//           <div className="detail-item">
//             <span>🧍 Seater</span>
//             <span className="value">5</span>
//           </div>
//           <div className="detail-item">
//             <span>💲 Rate</span>
//             <span className="value bold">$250/day</span>
//           </div>

//           {/* Booking Type Selection */}
//           <div className="booking-type-selection">
//             <p className="booking-type-label">Booking Type:</p>
//             <div className="booking-options">
//               <button
//                 className={`booking-option-button ${bookingType === 'self-drive' ? 'active' : ''}`}
//                 onClick={() => handleBookingTypeChange('self-drive')}
//               >
//                 Self Drive
//               </button>
//               <button
//                 className={`booking-option-button ${bookingType === 'with-driver' ? 'active' : ''}`}
//                 onClick={() => handleBookingTypeChange('with-driver')}
//               >
//                 With Driver
//               </button>
//             </div>
//           </div>

//           <p className="note-text">
//             Lorem ipsum dolor sit amet consectetur. Blandit id vitae libero
//             gravida integer in justo. Habitasse suspendisse eu vitae id.
//             Tristique . In fermentum laoreet a quam. Et dui.
//           </p>

//           <div className="book-box">
//             <p className="date-label">Date & Time</p>
//             <button className="date-time-button" onClick={toggleDateTimeSelector}>
//               {selectedDateTime.toLocaleString()}
//             </button>
//             {showDateTimeSelector && (
//               <input
//                 type="datetime-local"
//                 value={selectedDateTime.toISOString().slice(0, 16)} // Format for datetime-local input
//                 onChange={handleDateTimeChange}
//                 className="date-time-input"
//               />
//             )}
//             <button
//               className="book-button"
//               onClick={handleBookClick}
//             >
//               BOOK NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailPage;
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./CarDetailPage.css";

// const CarDetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);

//   useEffect(() => {
//     const fetchCar = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/cars/${id}`);
//         setCar(res.data);
//       } catch (err) {
//         console.error("Error fetching car:", err);
//       }
//     };
//     fetchCar();
//   }, [id]);

//   if (!car) return <p className="loading">Loading...</p>;

//   return (
//     <div className="car-detail-container">
//       <div className="car-main">
//         <button className="back-button" onClick={() => navigate(-1)}>
//           ←
//         </button>

//         <div className="car-info">
//           <h2 className="car-brand">{car.carName}</h2>
//           <p className="car-model">Vehicle Number: {car.carNumber}</p>

//           <div className="car-photos">
//             {car.photos?.length > 0 ? (
//               car.photos.map((photo, index) => (
//                 <img
//                   key={index}
//                   src={`http://localhost:5000/uploads/${photo}`}
//                   alt={`Car ${index + 1}`}
//                   className="car-image"
//                 />
//               ))
//             ) : (
//               <img
//                 src="/images/placeholder.png"
//                 alt="Car Placeholder"
//                 className="car-image"
//               />
//             )}
//           </div>

//           <div className="features">
//             <p>{car.carType}</p>
//             <p>{car.gearType}</p>
//             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
//           </div>
//         </div>

//         <div className="car-details">
//           <h2>Details</h2>
//           <div className="detail-item">
//             <span>⚙️ Gear Type</span>
//             <span className="value">{car.gearType}</span>
//           </div>
//           <div className="detail-item">
//             <span>❄️ Air Conditioning</span>
//             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
//           </div>
//           <div className="detail-item">
//             <span>🧍 Seats</span>
//             <span className="value">{car.seats}</span>
//           </div>
//           <div className="detail-item">
//             <span>💲 Rate</span>
//             <span className="value bold">₹{car.ratePerDay}/day</span>
//           </div>
//           <div className="detail-item">
//             <span>👤 Driver Name</span>
//             <span className="value">{car.driverName || "N/A"}</span>
//           </div>
//           <div className="detail-item">
//             <span>📞 Phone Number</span>
//             <span className="value">{car.phoneNumber || "N/A"}</span>
//           </div>
//           <div className="detail-item">
//             <span>📋 Booking Type</span>
//             <span className="value">{car.bookingType}</span>
//           </div>

//           <button className="book-button">BOOK NOW</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailPage;

// import React, { useEffect, useState } from "react";

// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./CarDetailPage.css";

// const CarDetailPage = ({ isLoggedIn }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [bookingType, setBookingType] = useState("self-drive");
//   const [selectedDateTime, setSelectedDateTime] = useState(new Date());
//   const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

//   useEffect(() => {
//     const fetchCar = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/cars/${id}`);
//         setCar(res.data);
//       } catch (err) {
//         console.error("Error fetching car:", err);
//       }
//     };
//     fetchCar();
//   }, [id]);

//   const handleBookClick = () => {
//     if (isLoggedIn) {
//       navigate(`/kyc-verification`);
//     } else {
//       navigate("/login/user");
//     }
//   };

//   const handleBookingTypeChange = (type) => {
//     setBookingType(type);
//   };

//   const handleDateTimeChange = (event) => {
//     setSelectedDateTime(new Date(event.target.value));
//   };

//   const toggleDateTimeSelector = () => {
//     setShowDateTimeSelector(!showDateTimeSelector);
//   };

//   if (!car) return <p className="loading">Loading...</p>;

//   return (
//     <div className="car-detail-container">
//       <div className="car-main">
//         <div>
//           <button className="back-button" onClick={() => navigate(-1)}>
//             ←
//           </button>
//         </div>

//         <div className="car-info">
//           <h2 className="car-brand">{car.carName}</h2>
//           <p className="car-model">Vehicle Number: {car.carNumber}</p>
//           {car.photos?.length > 0 ? (
//             <img
//               src={`http://localhost:5000/uploads/${car.photos[0]}`}
//               alt={car.carName}
//               className="car-image"
//             />
//           ) : (
//             <img
//               src="/images/placeholder.png"
//               alt="Car Placeholder"
//               className="car-image"
//             />
//           )}

//           <div className="color-dots">
//             <span className="dot active"></span>
//             <span className="dot"></span>
//             <span className="dot"></span>
//             <span className="dot red"></span>
//           </div>

//           <div className="features">
//             <p>{car.carType}</p>
//             <p>{car.gearType}</p>
//             <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
//           </div>

//           <div className="rating">
//             <p>Based on user reviews</p>
//             <h1>4.8</h1>
//           </div>
//         </div>

//         <div className="car-details">
//           <h2>Details</h2>
//           <p className="details-desc">
//             {car.carName} is a {car.carType} vehicle with {car.seats} seats,
//             ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
//             with {car.airCondition ? "air conditioning" : "no air conditioning"}
//             and {car.gearType.toLowerCase()} transmission.
//           </p>

//           <div className="detail-item">
//             <span>⚙️ Gear Type</span>
//             <span className="value">{car.gearType}</span>
//           </div>
//           <div className="detail-item">
//             <span>❄️ Air Conditioning</span>
//             <span className="value">{car.airCondition ? "Yes" : "No"}</span>
//           </div>
//           <div className="detail-item">
//             <span>🧍 Seats</span>
//             <span className="value">{car.seats}</span>
//           </div>
//           <div className="detail-item">
//             <span>💲 Rate</span>
//             <span className="value bold">₹{car.ratePerDay}/day</span>
//           </div>

//           <div className="booking-type-selection">
//             <p className="booking-type-label">Booking Type:</p>
//             <div className="booking-options">
//               <button
//                 className={`booking-option-button ${
//                   bookingType === "self-drive" ? "active" : ""
//                 }`}
//                 onClick={() => handleBookingTypeChange("self-drive")}
//               >
//                 Self Drive
//               </button>
//               <button
//                 className={`booking-option-button ${
//                   bookingType === "with-driver" ? "active" : ""
//                 }`}
//                 onClick={() => handleBookingTypeChange("with-driver")}
//               >
//                 With Driver
//               </button>
//             </div>
//           </div>

//           <p className="note-text">
//             Please ensure you have a valid driving license for self-drive
//             bookings. For with-driver bookings, contact{" "}
//             {car.phoneNumber || "N/A"} for availability.
//           </p>

//           <div className="book-box">
//             <p className="date-label">Date & Time</p>
//             <button
//               className="date-time-button"
//               onClick={toggleDateTimeSelector}
//             >
//               {selectedDateTime.toLocaleString()}
//             </button>
//             {showDateTimeSelector && (
//               <input
//                 type="datetime-local"
//                 value={selectedDateTime.toISOString().slice(0, 16)}
//                 onChange={handleDateTimeChange}
//                 className="date-time-input"
//               />
//             )}
//             <button className="book-button" onClick={handleBookClick}>
//               BOOK NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailPage;

// CarDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CarDetailPage.css";

const CarDetailPage = ({ isLoggedIn }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [bookingType, setBookingType] = useState("self-drive");
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDateTimeSelector, setShowDateTimeSelector] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/cars/${id}`);
        setCar(res.data);
      } catch (err) {
        console.error("Error fetching car:", err);
      }
    };
    fetchCar();
  }, [id]);

  const handleBookClick = () => {
    if (isLoggedIn) {
      navigate(`/kyc-verification`);
    } else {
      navigate("/login/user");
    }
  };

  const handleBookingTypeChange = (type) => {
    setBookingType(type);
  };

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(new Date(event.target.value));
  };

  const toggleDateTimeSelector = () => {
    setShowDateTimeSelector(!showDateTimeSelector);
  };

  if (!car) return <p className="loading">Loading...</p>;

  return (
    <div className="car-detail-container">
      <div className="car-main">
        <div>
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
        </div>

        <div className="car-info">
          <h2 className="car-brand">{car.carName}</h2>
          <p className="car-model">Vehicle Number: {car.carNumber}</p>
          {car.photos?.length > 0 ? (
            <img
              src={`http://localhost:5000/uploads/${car.photos[0]}`}
              alt={car.carName}
              className="car-image"
            />
          ) : (
            <img
              src="/images/placeholder.png" // Update this to a Mini Van image
              alt="Car Placeholder"
              className="car-image"
            />
          )}

          <div className="color-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot red"></span>
          </div>

          <div className="features">
            <p>{car.carType}</p>
            <p>{car.gearType}</p>
            <p>{car.airCondition ? "A/C" : "Non-A/C"}</p>
          </div>

          <div className="rating">
            <p>Based on user reviews</p>
            <h1>4.8</h1>
          </div>
        </div>

        <div className="car-details">
          <h2>Details</h2>
          <p className="details-desc">
            {car.carName} is a {car.carType} vehicle with {car.seats} seats,
            ideal for {car.bookingType.toLowerCase()}. Enjoy a comfortable ride
            with {car.airCondition ? "air conditioning" : "no air conditioning"}
            and {car.gearType.toLowerCase()} transmission.
          </p>

          <div className="detail-item">
            <span>⚙️ Gear Type</span>
            <span className="value">{car.gearType}</span>
          </div>
          <div className="detail-item">
            <span>❄️ Air Conditioning</span>
            <span className="value">{car.airCondition ? "Yes" : "No"}</span>
          </div>
          <div className="detail-item">
            <span>🧍 Seats</span>
            <span className="value">{car.seats}</span>
          </div>
          <div className="detail-item">
            <span>💲 Rate</span>
            <span className="value bold">₹{car.ratePerDay}/day</span>
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

          <p className="note-text">
            Please ensure you have a valid driving license for self-drive
            bookings. For with-driver bookings, contact{" "}
            {car.phoneNumber || "N/A"} for availability.
          </p>

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
                value={selectedDateTime.toISOString().slice(0, 16)}
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
