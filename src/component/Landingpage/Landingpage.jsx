// import React, { useState } from "react";
// import "./LandingPage.css";
// import { Link } from "react-router-dom";
// import Logo from "../Images/Logo.png";
// import Car1 from "../Images/no1.png";
// import Car2 from "../Images/no2.png";
// import Car3 from "../Images/no3.png";
// import Car4 from "../Images/no4.png";
// import Car5 from "../Images/no5.png";
// import Car6 from "../Images/no6.png";
// import Car7 from "../Images/no7.png";
// import Car8 from "../Images/no8.png";
// import Car9 from "../Images/no9.png";
// import Car10 from "../Images/no10.png";
// import RouteMap from "../Images/Middlemap.png";
// import videoFile from "../Images/video.mp4"; // Assuming video.mp4 is in the public folder

// function LandingPage({ isLoggedIn }) {
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

//   const openVideoModal = () => {
//     setIsVideoModalOpen(true);
//   };

//   const closeVideoModal = () => {
//     setIsVideoModalOpen(false);
//   };

//   const featuredVehicles = [
//     { brand: "Mercedes", features: ["H Automatic", "Conditioner"], image: Car3, id: "mercedes1" },
//     { brand: "Mercedes", features: ["H Automatic", "Conditioner"], image: Car4, id: "mercedes2" },
//     { brand: "Mercedes", features: ["H Automatic", "Conditioner"], image: Car5, id: "mercedes3" },
//     { brand: "Portable", features: ["H Automatic", "Conditioner"], image: Car6, id: "portable1" },
//     { brand: "Toyota", features: ["H Automatic", "Conditioner"], image: Car7, id: "toyota1" },
//     { brand: "Portable", features: ["H Automatic", "Conditioner"], image: Car8, id: "portable2" },
//     { brand: "Mercedes", features: ["H Automatic", "Conditioner"], image: Car9, id: "mercedes4" },
//     { brand: "Mercedes", features: ["H Automatic", "Conditioner"], image: Car10, id: "mercedes5" },
//   ];

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <div className="nav-left">
//           <img src={Logo} alt="Logo" className="logo" />
//         </div>
//         <div className="nav-links">
//           <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
//           <Link to="/search">Vehicles</Link>
//           <Link to="/list-your-vehicles">List Your Vehicles</Link> {/* Added this line */}
//           <Link to="/details">Details</Link>
//           <Link to="/about-us">About Us</Link>
//           <Link to="/contact-us">Contact Us</Link>
//           {isLoggedIn ? (
//             <Link
//               to="/profile"
//               className="profile-btn"
//               style={{ pointerEvents: 'auto' }}
//             >
//               Your Profile
//             </Link>
//           ) : (
//             <Link to="/auth" className="signup-btn">
//               Sign Up
//             </Link>
//           )}
//         </div>
//       </nav>

//       <div className="hero">
//         <div className="hero-vehicle-container">
//           <img
//             src={Car1}
//             alt="Premium Car"
//             className="vehicle-image"
//           />
//         </div>

//         <div className="route-map-wrapper">
//           <img
//             src={RouteMap}
//             alt="Route Map"
//             className="route-map-image"
//           />
//         </div>

//         <div className="hero-content">
//           <h1>Rent a Car Anytime</h1>
//           <h2>Anywhere in Kathmandu</h2>
//           <p>
//             We provide the best car rental experience with affordable pricing.
//           </p>
//           <div className="hero-buttons">
//             <button className="book-btn">Book Now</button>
//             <button className="video-btn" onClick={openVideoModal}>
//               Watch Video
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="benefits-container">
//         <h2 className="benefits-title">Why Choose Us</h2>
//         <div className="benefits-content">
//           <ul className="benefits-list">
//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">Best Price Guaranteed</h3>
//                 <p className="benefit-description">
//                   Find a lower price? We'll refund you 100% of the difference.
//                 </p>
//               </div>
//             </li>

//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">Experience Driver</h3>
//                 <p className="benefit-description">
//                   Don't have driver? Don't worry, we have many experienced
//                   driver for you.
//                 </p>
//               </div>
//             </li>

//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">24 Hour Car Delivery</h3>
//                 <p className="benefit-description">
//                   Book your car anytime and we will deliver it directly to you.
//                 </p>
//               </div>
//             </li>

//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">24/7 Technical Support</h3>
//                 <p className="benefit-description">
//                   Have a question? Contact Rentcars support any time when you
//                   have problem.
//                 </p>
//               </div>
//             </li>
//           </ul>
//           <div className="feature-car-image">
//             <img src={Car2} alt="HEETOR BACISTON car" />
//           </div>
//         </div>
//       </div>

//       <div className="services">
//         <div className="service">
//           <div className="service-icon">🚗</div>
//           <h3>Availability</h3>
//           <p>Get a car or bike anytime with instant booking.</p>
//         </div>
//         <div className="service">
//           <div className="service-icon">🛋️</div>
//           <h3>Comfort</h3>
//           <p>Enjoy smooth rides with our quality vehicles.</p>
//         </div>
//         <div className="service">
//           <div className="service-icon">💰</div>
//           <h3>Savings</h3>
//           <p>Best rental rates with no hidden fees.</p>
//         </div>
//       </div>

//       <section className="featured-vehicles">
//         <h2>Featured Vehicles</h2>
//         <div className="vehicle-grid">
//           {featuredVehicles.map((vehicle, index) => (
//             <div className="vehicle-card" key={index}>
//               <img src={vehicle.image} alt={`${vehicle.brand} vehicle`} />
//               <h3>{vehicle.brand}</h3>
//               <ul>
//                 {vehicle.features.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//               <Link
//                 to={`/cardetails/${vehicle.id}`}
//                 style={{ display: 'inline-block', textDecoration: 'none' }}
//                 onClick={(event) => {
//                   // You can add debugging here if needed
//                   // console.log("View Details clicked");
//                 }}
//               >
//                 <button style={{ display: 'block', width: '100%' }}>View Details</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="stats-section">
//         <h2>30,000+</h2>
//         <div className="highlight">Bert retinge</div>
//       </section>

//       <section className="about-section">
//         <div className="about-content">
//           <h3>BIT ABOUT US</h3>
//           <div className="highlight">Bert retinge</div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Nulla netus semper ornare
//             elit egestas facilisis felis. Sodales risus tortor crangitis
//             rhoncus. Elementum volutpat magnis sit duis aenean orci ornari
//             lobortis.
//           </p>
//           <div className="divider"></div>
//           <Link to="/about-us" className="explore-button-link">
//             <button className="explore-button">EXPLORE MORE</button>
//           </Link>
//         </div>
//       </section>

//       <section className="testimonials-section">
//         <h2>What Our Customers Say About Us</h2>
//         <div className="testimonial-grid">
//           <div className="testimonial-card">
//             <p>
//               Lorem ipsum dolor sit amet consectetur. Libero neque eu quis magna
//               tempor. Turpis sed rhoncus tortor luctus pretium fermentum in.
//               Varius aliquam amet sagittis sed cras commodo vitae eget dul.
//               Neque diam pharetra risus diam amet dolor tellus ultrices
//               pellentesque scelerisque.
//             </p>
//             <div className="testimonial-author">
//               <strong>Pravesh Taming</strong>
//               <br></br> <span>Lalitpur</span>
//             </div>
//           </div>
//           <div className="testimonial-card">
//             <p>
//               Lorem ipsum dolor sit amet consectetur. Libero neque eu quis magna
//               tempor. Turpis sed rhoncus tortor luctus pretium fermentum in.
//               Varius aliquam amet sagittis sed cras commodo vitae eget dul.
//               Neque diam pharetra risus diam amet dolor tellus ultrices
//               pellentesque scelerisque.
//             </p>
//             <div className="testimonial-author">
//               <strong>Pravesh Taming</strong>
//               <br></br> <span>Lalitpur</span>
//             </div>
//           </div>
//           <div className="testimonial-card">
//             <p>
//               Lorem ipsum dolor sit amet consectetur. Libero neque eu quis magna
//               tempor. Turpis sed rhoncus tortor luctus pretium fermentum in.
//               Varius aliquam amet sagittis sed cras commodo vitae eget dul.
//               Neque diam pharetra risus diam amet dolor tellus ultrices
//               pellentesque scelerisque.
//             </p>
//             <div className="testimonial-author">
//               <strong>Pravesh Taming</strong>
//               <br></br> <span>Lalitpur</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="footer-columns">
//           <div className="footer-section">
//             <h4>COMPANY</h4>
//             <ul>
//               <li><Link to="/about-us">About Us</Link></li>
//               <li>Careers</li>
//               <li>Press</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>VEHICLES</h4>
//             <ul>
//               <li>Economy</li>
//               <li>SUVs</li>
//               <li>Luxury</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>SUPPORT</h4>
//             <ul>
//               <li><Link to="/contact-us">Contact Us</Link></li>
//               <li>FAQs</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>LOCATIONS</h4>
//             <ul>
//               <li>New York</li>
//               <li>Los Angeles</li>
//               <li>Chicago</li>
//             </ul>
//           </div>
//         </div>
//         <p className="copyright">© 2025 Drifty. All rights reserved.</p>
//       </footer>

//       {isVideoModalOpen && (
//         <div className="video-modal">
//           <div className="video-modal-content">
//             <video width="560" height="315" controls>
//               <source src={videoFile} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <button className="go-back-button" onClick={closeVideoModal}>
//               Go Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LandingPage;\\

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import axios from "axios";

// Import all images
import Logo from "../Images/Logo.png";
import Car1 from "../Images/no1.png";
import Car2 from "../Images/no2.png";
import Car3 from "../Images/no3.png";
import Car4 from "../Images/no4.png";
import Car5 from "../Images/no5.png";
import Car6 from "../Images/no6.png";
import Car7 from "../Images/no7.png";
import Car8 from "../Images/no8.png";
import Car9 from "../Images/no9.png";
import Car10 from "../Images/no10.png";
import RouteMap from "../Images/Middlemap.png";
import videoFile from "../Images/video.mp4";

const carImages = {
  "no1.png": Car1,
  "no2.png": Car2,
  "no3.png": Car3,
  "no4.png": Car4,
  "no5.png": Car5,
  "no6.png": Car6,
  "no7.png": Car7,
  "no8.png": Car8,
  "no9.png": Car9,
  "no10.png": Car10,
};

function LandingPage({ isLoggedIn }) {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [featuredVehicles, setFeaturedVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // You can implement the actual search logic here or in a parent component
    console.log("Search query:", event.target.value);
  };

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  useEffect(() => {
    const fallbackVehicles = [
      {
        _id: "mercedes1",
        carName: "Mercedes",
        gearType: "Automatic",
        airCondition: "Yes",
        seats: 4,
        photo: "no3.png",
        features: ["H Automatic", "Conditioner"],
      },
      {
        _id: "mercedes2",
        carName: "Mercedes",
        gearType: "Automatic",
        airCondition: "Yes",
        seats: 4,
        photo: "no4.png",
        features: ["H Automatic", "Conditioner"],
      },
      // Add more fallback vehicles as needed
    ];

    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        const carsWithImages = response.data.map((car) => ({
          ...car,
          image: carImages[car.photo] || Car1,
          features: car.features || ["H Automatic", "Conditioner"], // Add default features if not present
        }));
        setFeaturedVehicles(carsWithImages);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
        const fallbackWithImages = fallbackVehicles.map((car) => ({
          ...car,
          image: carImages[car.photo] || Car1,
        }));
        setFeaturedVehicles(fallbackWithImages);
        setError("Using fallback data - Failed to fetch vehicles");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-left">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="nav-links">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
          <Link to="/search">Vehicles</Link>
          <Link to="/list-your-vehicles">List Your Vehicles</Link>
          <Link to="/details">Details</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          {isLoggedIn ? (
            <Link
              to="/profile"
              className="profile-btn"
              style={{ pointerEvents: "auto" }}
            >
              Your Profile
            </Link>
          ) : (
            <Link to="/auth" className="signup-btn">
              Sign Up
            </Link>
          )}
        </div>
      </nav>

      <div className="hero">
        <div className="hero-vehicle-container">
          <img src={Car1} alt="Premium Car" className="vehicle-image" />
        </div>

        <div className="route-map-wrapper">
          <img src={RouteMap} alt="Route Map" className="route-map-image" />
        </div>

        <div className="hero-content">
          <h1>Rent a Car Anytime</h1>
          <h2>Anywhere in Kathmandu</h2>
          <p>
            We provide the best car rental experience with affordable pricing.
          </p>
          <div className="hero-buttons">
            <button className="book-btn">Book Now</button>
            <button className="video-btn" onClick={openVideoModal}>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <div className="search-box-container">
        <input
          type="text"
          placeholder="Search for vehicles..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-button">Search</button>
      </div>

      <div className="benefits-container">
        <h2 className="benefits-title">Why Choose Us</h2>
        <div className="benefits-content">
          <ul className="benefits-list">
            <li className="benefit-item">
              <div className="benefit-content">
                <h3 className="benefit-heading">Best Price Guaranteed</h3>
                <p className="benefit-description">
                  Find a lower price? We'll refund you 100% of the difference.
                </p>
              </div>
            </li>

            <li className="benefit-item">
              <div className="benefit-content">
                <h3 className="benefit-heading">Experience Driver</h3>
                <p className="benefit-description">
                  Don't have driver? Don't worry, we have many experienced
                  driver for you.
                </p>
              </div>
            </li>

            <li className="benefit-item">
              <div className="benefit-content">
                <h3 className="benefit-heading">24 Hour Car Delivery</h3>
                <p className="benefit-description">
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </li>

            <li className="benefit-item">
              <div className="benefit-content">
                <h3 className="benefit-heading">24/7 Technical Support</h3>
                <p className="benefit-description">
                  Have a question? Contact Rentcars support any time when you
                  have problem.
                </p>
              </div>
            </li>
          </ul>
          <div className="feature-car-image">
            <img src={Car2} alt="HEETOR BACISTON car" />
          </div>
        </div>
      </div>

      <div className="services">
        <div className="service">
          <div className="service-icon">🚗</div>
          <h3>Availability</h3>
          <p>Get a car or bike anytime with instant booking.</p>
        </div>
        <div className="service">
          <div className="service-icon">🛋️</div>
          <h3>Comfort</h3>
          <p>Enjoy smooth rides with our quality vehicles.</p>
        </div>
        <div className="service">
          <div className="service-icon">💰</div>
          <h3>Savings</h3>
          <p>Best rental rates with no hidden fees.</p>
        </div>
      </div>

      <section className="featured-vehicles">
        <h2>Featured Vehicles</h2>
        {loading ? (
          <div className="loading-message">Loading vehicles...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="vehicle-grid">
            {featuredVehicles.map((vehicle, index) => (
              <div className="vehicle-card" key={vehicle._id || index}>
                <div className="vehicle-image-container">
                  {vehicle.photo ? (
                    <img
                      src={`http://localhost:5000/uploads/${vehicle.photo}`}
                      alt={vehicle.carName}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = vehicle.image || Car1;
                      }}
                    />
                  ) : (
                    <img src={vehicle.image || Car1} alt={vehicle.carName} />
                  )}
                </div>
                <h3>{vehicle.carName || vehicle.brand}</h3>
                <ul>
                  {vehicle.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link
                  to={`/cardetails/${vehicle._id}`}
                  style={{ display: "inline-block", textDecoration: "none" }}
                >
                  <button style={{ display: "block", width: "100%" }}>
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="stats-section">
        <h2>30,000+</h2>
        <div className="highlight">Bert retinge</div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h3>BIT ABOUT US</h3>
          <div className="highlight">Bert retinge</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nulla netus semper ornare
            elit egestas facilisis felis. Sodales risus tortor crangitis
            rhoncus. Elementum volutpat magnis sit duis aenean orci ornari
            lobortis.
          </p>
          <div className="divider"></div>
          <Link to="/about-us" className="explore-button-link">
            <button className="explore-button">EXPLORE MORE</button>
          </Link>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say About Us</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero neque eu quis magna
              tempor. Turpis sed rhoncus tortor luctus pretium fermentum in.
              Varius aliquam amet sagittis sed cras commodo vitae eget dul.
              Neque diam pharetra risus diam amet dolor tellus ultrices
              pellentesque scelerisque.
            </p>
            <div className="testimonial-author">
              <strong>Pravesh Taming</strong>
              <br></br> <span>Lalitpur</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero neque eu quis magna
              tempor. Turpis sed rhoncus tortor luctus pretium fermentum in.
              Varius aliquam amet sagittis sed cras commodo vitae eget dul.
              Neque diam pharetra risus diam amet dolor tellus ultrices
              pellentesque scelerisque.
            </p>
            <div className="testimonial-author">
              <strong>Pravesh Taming</strong>
              <br></br> <span>Lalitpur</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero neque eu quis magna
              tempor. Turpis sed rhoncus tortor luctus pretium fermentum in.
              Varius aliquam amet sagittis sed cras commodo vitae eget dul.
              Neque diam pharetra risus diam amet dolor tellus ultrices
              pellentesque scelerisque.
            </p>
            <div className="testimonial-author">
              <strong>Pravesh Taming</strong>
              <br></br> <span>Lalitpur</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-section">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>VEHICLES</h4>
            <ul>
              <li>Economy</li>
              <li>SUVs</li>
              <li>Luxury</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>SUPPORT</h4>
            <ul>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>LOCATIONS</h4>
            <ul>
              <li>New York</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2025 Drifty. All rights reserved.</p>
      </footer>

      {isVideoModalOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <video width="560" height="315" controls>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="go-back-button" onClick={closeVideoModal}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
