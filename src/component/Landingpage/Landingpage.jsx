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
//     {
//       brand: "Mercedes",
//       features: ["H Automatic", "Conditioner"],
//       image: Car3,
//       id: "mercedes1",
//     },
//     {
//       brand: "Mercedes",
//       features: ["H Automatic", "Conditioner"],
//       image: Car4,
//       id: "mercedes2",
//     },
//     {
//       brand: "Mercedes",
//       features: ["H Automatic", "Conditioner"],
//       image: Car5,
//       id: "mercedes3",
//     },
//     {
//       brand: "Portable",
//       features: ["H Automatic", "Conditioner"],
//       image: Car6,
//       id: "portable1",
//     },
//     {
//       brand: "Toyota",
//       features: ["H Automatic", "Conditioner"],
//       image: Car7,
//       id: "toyota1",
//     },
//     {
//       brand: "Portable",
//       features: ["H Automatic", "Conditioner"],
//       image: Car8,
//       id: "portable2",
//     },
//     {
//       brand: "Mercedes",
//       features: ["H Automatic", "Conditioner"],
//       image: Car9,
//       id: "mercedes4",
//     },
//     {
//       brand: "Mercedes",
//       features: ["H Automatic", "Conditioner"],
//       image: Car10,
//       id: "mercedes5",
//     },
//   ];

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <div className="nav-left">
//           <img src={Logo} alt="Logo" className="logo" />
//         </div>
//         <div className="nav-links">
//           <Link to="/" onClick={() => window.scrollTo(0, 0)}>
//             Home
//           </Link>
//           <Link to="/search">Vehicles</Link>
//           <Link to="/list-your-vehicles">List Your Vehicles</Link>{" "}
//           {/* Added this line */}
//           <Link to="/details">Details</Link>
//           <Link to="/about-us">About Us</Link>
//           <Link to="/contact-us">Contact Us</Link>
//           {isLoggedIn ? (
//             <Link
//               to="/profile"
//               className="profile-btn"
//               style={{ pointerEvents: "auto" }}
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
//           <img src={Car1} alt="Premium Car" className="vehicle-image" />
//         </div>

//         <div className="route-map-wrapper">
//           <img src={RouteMap} alt="Route Map" className="route-map-image" />
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
//                 style={{ display: "inline-block", textDecoration: "none" }}
//                 onClick={(event) => {
//                   // You can add debugging here if needed
//                   // console.log("View Details clicked");
//                 }}
//               >
//                 <button style={{ display: "block", width: "100%" }}>
//                   View Details
//                 </button>
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
//               <li>
//                 <Link to="/about-us">About Us</Link>
//               </li>
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
//               <li>
//                 <Link to="/contact-us">Contact Us</Link>
//               </li>
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

// // export default LandingPage;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./LandingPage.css";
// import axios from "axios";

// // Import all images
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
// import videoFile from "../Images/video.mp4";

// const carImages = {
//   "no1.png": Car1,
//   "no2.png": Car2,
//   "no3.png": Car3,
//   "no4.png": Car4,
//   "no5.png": Car5,
//   "no6.png": Car6,
//   "no7.png": Car7,
//   "no8.png": Car8,
//   "no9.png": Car9,
//   "no10.png": Car10,
// };

// function LandingPage() {
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [featuredVehicles, setFeaturedVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

//   const openVideoModal = () => setIsVideoModalOpen(true);
//   const closeVideoModal = () => setIsVideoModalOpen(false);

//   useEffect(() => {
//     const fallbackVehicles = [
//       {
//         _id: "1",
//         carName: "Mercedes",
//         gearType: "Automatic",
//         airCondition: "Yes",
//         seats: 4,
//         photo: "no3.png",
//         image: Car3,
//       },
//       {
//         _id: "2",
//         carName: "BMW",
//         gearType: "Automatic",
//         airCondition: "Yes",
//         seats: 4,
//         photo: "no4.png",
//         image: Car4,
//       },
//     ];

//     const fetchVehicles = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/cars");
//         const carsWithImages = response.data.map((car) => ({
//           ...car,
//           image: carImages[car.photo] || Car1,
//         }));
//         setFeaturedVehicles(carsWithImages);
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//         setFeaturedVehicles(fallbackVehicles);
//         setError("Using fallback data - Failed to fetch vehicles");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVehicles();
//   }, []);

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <img src={Logo} alt="Logo" className="logo" />
//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/search">Vehicles</Link>
//           <Link to="/details">Details</Link>
//           <Link to="/about-us">About Us</Link>
//           <Link to="/contact-us">Contact Us</Link>
//           <Link to="/signup">
//             <button className="signup-btn">Sign Up</button>
//           </Link>
//         </div>
//       </nav>

//       <div className="hero">
//         <div className="hero-vehicle-container">
//           <img src={Car1} alt="Premium Car" className="vehicle-image" />
//         </div>

//         <div className="route-map-wrapper">
//           <img src={RouteMap} alt="Route Map" className="route-map-image" />
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
//                   drivers for you.
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
//                   have a problem.
//                 </p>
//               </div>
//             </li>
//           </ul>
//           <div className="feature-car-image">
//             <img src={Car2} alt="Featured Car" />
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
//         {loading ? (
//           <div className="loading-message">Loading vehicles...</div>
//         ) : error ? (
//           <div className="error-message">{error}</div>
//         ) : (
//           <div className="vehicle-grid">
//             {featuredVehicles.map((vehicle, index) => (
//               <div className="vehicle-card" key={vehicle._id || index}>
//                 <div className="vehicle-card-image">
//                   {vehicle.photo ? (
//                     // <img
//                     //   src={`http://localhost:5000/uploads/${vehicle.photo}`}
//                     //   alt={vehicle.carName}
//                     //   onError={(e) => {
//                     //     e.target.onerror = null;
//                     //     e.target.src = vehicle.image || Car1;
//                     //   }}
//                     // />
//                     <img
//                       src={`http://localhost:5000/uploads/${vehicle.photo.trim()}`}
//                       alt={vehicle.carName}
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = vehicle.image || Car1;
//                       }}
//                     />
//                   ) : (
//                     <img src={vehicle.image || Car1} alt={vehicle.carName} />
//                   )}
//                 </div>
//                 <h3>{vehicle.carName}</h3>
//                 <ul className="vehicle-features">
//                   {/* ⚙️{car.gearType}</strong>
//                     </span>
//                     <span>
//                       <strong>❄️{car.airCondition ? "AC" : "Non-AC"}</strong>
//                     </span>
//                     <span>
//                       <strong>👤 */}

//                   <li>⚙️ Gear: {vehicle.gearType}</li>
//                   <li>❄️ AC: {vehicle.airCondition}</li>
//                   <li>👤 Seats: {vehicle.seats}</li>
//                 </ul>
//                 <p className="vehicle-rate">
//                   Rate per Day: Rs. {vehicle.ratePerDay}
//                 </p>

//                 <Link to={`/cardetails/${vehicle._id}`}>
//                   <button className="view-details-btn">View Details</button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <section className="stats-section">
//         <h2>30,000+</h2>
//         <div className="highlight">Happy Customers</div>
//       </section>

//       <section className="about-section">
//         <div className="about-content">
//           <h3>BIT ABOUT US</h3>
//           <div className="highlight">Our Story</div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Nulla netus semper ornare
//             elit egestas facilisis felis. Sodales risus tortor crangitis
//             rhoncus. Elementum volutpat magnis sit duis aenean orci ornari
//             lobortis.
//           </p>
//           <div className="divider"></div>
//           <Link to="/about-us">
//             <button className="explore-button">EXPLORE MORE</button>
//           </Link>
//         </div>
//       </section>

//       <section className="testimonials-section">
//         <h2>What Our Customers Say About Us</h2>
//         <div className="testimonial-grid">
//           {[...Array(3)].map((_, index) => (
//             <div className="testimonial-card" key={index}>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur. Libero neque eu quis
//                 magna tempor. Turpis sed rhoncus tortor luctus pretium fermentum
//                 in. Varius aliquam amet sagittis sed cras commodo vitae eget
//                 dul.
//               </p>
//               <div className="testimonial-author">
//                 <strong>Pravesh Taming</strong>
//                 <br />
//                 <span>Lalitpur</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="footer-columns">
//           <div className="footer-section">
//             <h4>COMPANY</h4>
//             <ul>
//               <li>
//                 <Link to="/about-us">About Us</Link>
//               </li>
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
//               <li>
//                 <Link to="/contact-us">Contact Us</Link>
//               </li>
//               <li>FAQs</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>LOCATIONS</h4>
//             <ul>
//               <li>Kathmandu</li>
//               <li>Pokhara</li>
//               <li>Chitwan</li>
//             </ul>
//           </div>
//         </div>
//         <p className="copyright">
//           © {new Date().getFullYear()} Drifty. All rights reserved.
//         </p>
//       </footer>

//       {isVideoModalOpen && (
//         <div className="video-modal">
//           <div className="video-modal-content">
//             <video width="560" height="315" controls autoPlay>
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

// export default LandingPage;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./LandingPage.css";
// import axios from "axios";

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
// import videoFile from "../Images/video.mp4";

// const carImages = {
//   "no1.png": Car1,
//   "no2.png": Car2,
//   "no3.png": Car3,
//   "no4.png": Car4,
//   "no5.png": Car5,
//   "no6.png": Car6,
//   "no7.png": Car7,
//   "no8.png": Car8,
//   "no9.png": Car9,
//   "no10.png": Car10,
// };

// function LandingPage({ isLoggedIn }) {
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [featuredVehicles, setFeaturedVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

//   const openVideoModal = () => setIsVideoModalOpen(true);
//   const closeVideoModal = () => setIsVideoModalOpen(false);

//   useEffect(() => {
//     const fallbackVehicles = [
//       {
//         _id: "1",
//         carName: "Mercedes",
//         gearType: "Automatic",
//         airCondition: "Yes",
//         seats: 4,
//         photo: "no3.png",
//         image: Car3,
//       },
//       {
//         _id: "2",
//         carName: "BMW",
//         gearType: "Automatic",
//         airCondition: "Yes",
//         seats: 4,
//         photo: "no4.png",
//         image: Car4,
//       },
//     ];

//     const fetchVehicles = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/cars");
//         const carsWithImages = response.data.map((car) => ({
//           ...car,
//           image: carImages[car.photo] || Car1,
//         }));
//         setFeaturedVehicles(carsWithImages);
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//         setFeaturedVehicles(fallbackVehicles);
//         setError("Using fallback data - Failed to fetch vehicles");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVehicles();
//   }, []);

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <img src={Logo} alt="Logo" className="logo" />
//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/search">Vehicles</Link>
//           <Link to="/details">Details</Link>
//           <Link to="/about-us">About Us</Link>
//           <Link to="/contact-us">Contact Us</Link>
//           {isLoggedIn ? (
//             <Link to="/profile" className="profile-btn">
//               Your Profile
//             </Link>
//           ) : (
//             <Link to="/signup">
//               <button className="signup-btn">Sign Up</button>
//             </Link>
//           )}
//         </div>
//       </nav>

//       <div className="hero">
//         <div className="hero-vehicle-container">
//           <img src={Car1} alt="Premium Car" className="vehicle-image" />
//         </div>
//         <div className="route-map-wrapper">
//           <img src={RouteMap} alt="Route Map" className="route-map-image" />
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
//                 <p>
//                   Find a lower price? We'll refund you 100% of the difference.
//                 </p>
//               </div>
//             </li>
//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">Experienced Driver</h3>
//                 <p>Don’t have a driver? Don’t worry — we’ve got you covered.</p>
//               </div>
//             </li>
//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">24 Hour Car Delivery</h3>
//                 <p>
//                   Book your car anytime and we will deliver it directly to you.
//                 </p>
//               </div>
//             </li>
//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">24/7 Technical Support</h3>
//                 <p>Have a question? Our team is available round-the-clock.</p>
//               </div>
//             </li>
//           </ul>
//           <div className="feature-car-image">
//             <img src={Car2} alt="Featured Car" />
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
//         {loading ? (
//           <div className="loading-message">Loading vehicles...</div>
//         ) : error ? (
//           <div className="error-message">{error}</div>
//         ) : (
//           <div className="vehicle-grid">
//             {featuredVehicles.map((vehicle, index) => (
//               <div className="vehicle-card" key={vehicle._id || index}>
//                 <div className="vehicle-card-image">
//                   <img
//                     src={`http://localhost:5000/uploads/${vehicle.photo?.trim()}`}
//                     alt={vehicle.carName}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = vehicle.image || Car1;
//                     }}
//                   />
//                 </div>
//                 <h3>{vehicle.carName}</h3>
//                 <ul className="vehicle-features">
//                   <li>⚙️ Gear: {vehicle.gearType}</li>
//                   <li>❄️ AC: {vehicle.airCondition}</li>
//                   <li>👤 Seats: {vehicle.seats}</li>
//                 </ul>
//                 <p className="vehicle-rate">
//                   Rate per Day: Rs. {vehicle.ratePerDay}
//                 </p>
//                 <Link to={`/cardetails/${vehicle._id}`}>
//                   <button className="view-details-btn">View Details</button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <section className="stats-section">
//         <h2>30,000+</h2>
//         <div className="highlight">Happy Customers</div>
//       </section>

//       <section className="about-section">
//         <div className="about-content">
//           <h3>BIT ABOUT US</h3>
//           <div className="highlight">Our Story</div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Nulla netus semper ornare
//             elit egestas facilisis felis. Sodales risus tortor crangitis
//             rhoncus. Elementum volutpat magnis sit duis aenean orci ornari
//             lobortis.
//           </p>
//           <div className="divider"></div>
//           <Link to="/about-us">
//             <button className="explore-button">EXPLORE MORE</button>
//           </Link>
//         </div>
//       </section>

//       <section className="testimonials-section">
//         <h2>What Our Customers Say About Us</h2>
//         <div className="testimonial-grid">
//           {[...Array(3)].map((_, index) => (
//             <div className="testimonial-card" key={index}>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur. Libero neque eu quis
//                 magna tempor. Turpis sed rhoncus tortor luctus pretium fermentum
//                 in. Varius aliquam amet sagittis sed cras commodo vitae eget
//                 dul.
//               </p>
//               <div className="testimonial-author">
//                 <strong>Pravesh Taming</strong>
//                 <br />
//                 <span>Lalitpur</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="footer-columns">
//           <div className="footer-section">
//             <h4>COMPANY</h4>
//             <ul>
//               <li>
//                 <Link to="/about-us">About Us</Link>
//               </li>
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
//               <li>
//                 <Link to="/contact-us">Contact Us</Link>
//               </li>
//               <li>FAQs</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>LOCATIONS</h4>
//             <ul>
//               <li>Kathmandu</li>
//               <li>Pokhara</li>
//               <li>Chitwan</li>
//             </ul>
//           </div>
//         </div>
//         <p className="copyright">
//           © {new Date().getFullYear()} Drifty. All rights reserved.
//         </p>
//       </footer>

//       {isVideoModalOpen && (
//         <div className="video-modal">
//           <div className="video-modal-content">
//             <video width="560" height="315" controls autoPlay>
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

// export default LandingPage;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./LandingPage.css";
// import axios from "axios";

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
// import videoFile from "../Images/video.mp4";

// const carImages = {
//   "no1.png": Car1,
//   "no2.png": Car2,
//   "no3.png": Car3,
//   "no4.png": Car4,
//   "no5.png": Car5,
//   "no6.png": Car6,
//   "no7.png": Car7,
//   "no8.png": Car8,
//   "no9.png": Car9,
//   "no10.png": Car10,
// };

// function LandingPage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [featuredVehicles, setFeaturedVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token); // convert to boolean
//   }, []);

//   const openVideoModal = () => setIsVideoModalOpen(true);
//   const closeVideoModal = () => setIsVideoModalOpen(false);

//   useEffect(() => {
//     const fallbackVehicles = [
//       {
//         _id: "1",
//         carName: "Mercedes",
//         gearType: "Automatic",
//         airCondition: "Yes",
//         seats: 4,
//         photo: "no3.png",
//         image: Car3,
//       },
//       {
//         _id: "2",
//         carName: "BMW",
//         gearType: "Automatic",
//         airCondition: "Yes",
//         seats: 4,
//         photo: "no4.png",
//         image: Car4,
//       },
//     ];

//     const fetchVehicles = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/cars");
//         const carsWithImages = response.data.map((car) => ({
//           ...car,
//           image: carImages[car.photo] || Car1,
//         }));
//         setFeaturedVehicles(carsWithImages);
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//         setFeaturedVehicles(fallbackVehicles);
//         setError("Using fallback data - Failed to fetch vehicles");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVehicles();
//   }, []);

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <img src={Logo} alt="Logo" className="logo" />
//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/search">Vehicles</Link>
//           <Link to="/details">Details</Link>
//           <Link to="/about-us">About Us</Link>
//           <Link to="/contact-us">Contact Us</Link>
//           {isLoggedIn ? (
//             <Link to="/profile" className="profile-btn">
//               Your Profile
//             </Link>
//           ) : (
//             <Link to="/signup">
//               <button className="signup-btn">Sign Up</button>
//             </Link>
//           )}
//         </div>
//       </nav>

//       <div className="hero">
//         <div className="hero-vehicle-container">
//           <img src={Car1} alt="Premium Car" className="vehicle-image" />
//         </div>
//         <div className="route-map-wrapper">
//           <img src={RouteMap} alt="Route Map" className="route-map-image" />
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
//                 <p>
//                   Find a lower price? We'll refund you 100% of the difference.
//                 </p>
//               </div>
//             </li>
//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">Experienced Driver</h3>
//                 <p>Don’t have a driver? Don’t worry — we’ve got you covered.</p>
//               </div>
//             </li>
//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">24 Hour Car Delivery</h3>
//                 <p>
//                   Book your car anytime and we will deliver it directly to you.
//                 </p>
//               </div>
//             </li>
//             <li className="benefit-item">
//               <div className="benefit-content">
//                 <h3 className="benefit-heading">24/7 Technical Support</h3>
//                 <p>Have a question? Our team is available round-the-clock.</p>
//               </div>
//             </li>
//           </ul>
//           <div className="feature-car-image">
//             <img src={Car2} alt="Featured Car" />
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
//         {loading ? (
//           <div className="loading-message">Loading vehicles...</div>
//         ) : error ? (
//           <div className="error-message">{error}</div>
//         ) : (
//           <div className="vehicle-grid">
//             {featuredVehicles.map((vehicle, index) => (
//               <div className="vehicle-card" key={vehicle._id || index}>
//                 <div className="vehicle-card-image">
//                   <img
//                     src={`http://localhost:5000/uploads/${vehicle.photo?.trim()}`}
//                     alt={vehicle.carName}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = vehicle.image || Car1;
//                     }}
//                   />
//                 </div>
//                 <h3>{vehicle.carName}</h3>
//                 <ul className="vehicle-features">
//                   <li>⚙️ Gear: {vehicle.gearType}</li>
//                   <li>❄️ AC: {vehicle.airCondition}</li>
//                   <li>👤 Seats: {vehicle.seats}</li>
//                 </ul>
//                 <p className="vehicle-rate">
//                   Rate per Day: Rs. {vehicle.ratePerDay}
//                 </p>
//                 <Link to={`/cardetails/${vehicle._id}`}>
//                   <button className="view-details-btn">View Details</button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <section className="stats-section">
//         <h2>30,000+</h2>
//         <div className="highlight">Happy Customers</div>
//       </section>

//       <section className="about-section">
//         <div className="about-content">
//           <h3>BIT ABOUT US</h3>
//           <div className="highlight">Our Story</div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Nulla netus semper ornare
//             elit egestas facilisis felis. Sodales risus tortor crangitis
//             rhoncus. Elementum volutpat magnis sit duis aenean orci ornari
//             lobortis.
//           </p>
//           <div className="divider"></div>
//           <Link to="/about-us">
//             <button className="explore-button">EXPLORE MORE</button>
//           </Link>
//         </div>
//       </section>

//       <section className="testimonials-section">
//         <h2>What Our Customers Say About Us</h2>
//         <div className="testimonial-grid">
//           {[...Array(3)].map((_, index) => (
//             <div className="testimonial-card" key={index}>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur. Libero neque eu quis
//                 magna tempor. Turpis sed rhoncus tortor luctus pretium fermentum
//                 in. Varius aliquam amet sagittis sed cras commodo vitae eget
//                 dul.
//               </p>
//               <div className="testimonial-author">
//                 <strong>Pravesh Taming</strong>
//                 <br />
//                 <span>Lalitpur</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="footer-columns">
//           <div className="footer-section">
//             <h4>COMPANY</h4>
//             <ul>
//               <li>
//                 <Link to="/about-us">About Us</Link>
//               </li>
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
//               <li>
//                 <Link to="/contact-us">Contact Us</Link>
//               </li>
//               <li>FAQs</li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4>LOCATIONS</h4>
//             <ul>
//               <li>Kathmandu</li>
//               <li>Pokhara</li>
//               <li>Chitwan</li>
//             </ul>
//           </div>
//         </div>
//         <p className="copyright">
//           © {new Date().getFullYear()} Drifty. All rights reserved.
//         </p>
//       </footer>

//       {isVideoModalOpen && (
//         <div className="video-modal">
//           <div className="video-modal-content">
//             <video width="560" height="315" controls autoPlay>
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

// export default LandingPage;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "./LandingPage.module.css";
// import axios from "axios";

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
// import videoFile from "../Images/video.mp4";

// const carImages = {
//   "no1.png": Car1,
//   "no2.png": Car2,
//   "no3.png": Car3,
//   "no4.png": Car4,
//   "no5.png": Car5,
//   "no6.png": Car6,
//   "no7.png": Car7,
//   "no8.png": Car8,
//   "no9.png": Car9,
//   "no10.png": Car10,
// };

// function LandingPage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [featuredVehicles, setFeaturedVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token); // convert to boolean
//   }, []);

//   const openVideoModal = () => setIsVideoModalOpen(true);
//   const closeVideoModal = () => setIsVideoModalOpen(false);

//   useEffect(() => {
//     const fallbackVehicles = [
//       {
//         _id: "1",
//         carName: "Mercedes",
//         gearType: "Automatic",
//         airCondition: "Yes",
//         seats: 4,
//         photo: "no3.png",
//         image: Car3,
//       },
//       {
//         _id: "2",
//         carName: "BMW",
//         gearType: "Automatic",
//         airCondition: "Yes",
//         seats: 4,
//         photo: "no4.png",
//         image: Car4,
//       },
//     ];

//     const fetchVehicles = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/cars");
//         const carsWithImages = response.data.map((car) => ({
//           ...car,
//           image: carImages[car.photo] || Car1,
//         }));
//         setFeaturedVehicles(carsWithImages);
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//         setFeaturedVehicles(fallbackVehicles);
//         setError("Using fallback data - Failed to fetch vehicles");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVehicles();
//   }, []);

//   return (
//     <div className={styles.appContainer}>
//       <nav className={styles.navbar}>
//         <img src={Logo} alt="Logo" className={styles.logo} />
//         <div className={styles.navLinks}>
//           <Link to="/">Home</Link>
//           <Link to="/search">Vehicles</Link>
//           <Link to="/details">Details</Link>
//           <Link to="/about-us">About Us</Link>
//           <Link to="/contact-us">Contact Us</Link>
//           {isLoggedIn ? (
//             <Link to="/profile" className={styles.profileBtn}>
//               Your Profile
//             </Link>
//           ) : (
//             <Link to="/signup">
//               <button className={styles.signupBtn}>Sign Up</button>
//             </Link>
//           )}
//         </div>
//       </nav>

//       <div className={styles.hero}>
//         <div className={styles.heroVehicleContainer}>
//           <img src={Car1} alt="Premium Car" className={styles.vehicleImage} />
//         </div>
//         <div className={styles.routeMapWrapper}>
//           <img
//             src={RouteMap}
//             alt="Route Map"
//             className={styles.routeMapImage}
//           />
//         </div>
//         <div className={styles.heroContent}>
//           <h1>Rent a Car Anytime</h1>
//           <h2>Anywhere in Kathmandu</h2>
//           <p>
//             We provide the best car rental experience with affordable pricing.
//           </p>
//           <div className={styles.heroButtons}>
//             <button className={styles.bookBtn}>Book Now</button>
//             <button className={styles.videoBtn} onClick={openVideoModal}>
//               Watch Video
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={styles.benefitsContainer}>
//         <h2 className={styles.benefitsTitle}>Why Choose Us</h2>
//         <div className={styles.benefitsContent}>
//           <ul className={styles.benefitsList}>
//             <li className={styles.benefitItem}>
//               <div className={styles.benefitContent}>
//                 <h3 className={styles.benefitHeading}>Best Price Guaranteed</h3>
//                 <p>
//                   Find a lower price? We'll refund you 100% of the difference.
//                 </p>
//               </div>
//             </li>
//             <li className={styles.benefitItem}>
//               <div className={styles.benefitContent}>
//                 <h3 className={styles.benefitHeading}>Experienced Driver</h3>
//                 <p>Don’t have a driver? Don’t worry — we’ve got you covered.</p>
//               </div>
//             </li>
//             <li className={styles.benefitItem}>
//               <div className={styles.benefitContent}>
//                 <h3 className={styles.benefitHeading}>24 Hour Car Delivery</h3>
//                 <p>
//                   Book your car anytime and we will deliver it directly to you.
//                 </p>
//               </div>
//             </li>
//             <li className={styles.benefitItem}>
//               <div className={styles.benefitContent}>
//                 <h3 className={styles.benefitHeading}>
//                   24/7 Technical Support
//                 </h3>
//                 <p>Have a question? Our team is available round-the-clock.</p>
//               </div>
//             </li>
//           </ul>
//           <div className={styles.featureCarImage}>
//             <img src={Car2} alt="Featured Car" />
//           </div>
//         </div>
//       </div>

//       <div className={styles.services}>
//         <div className={styles.service}>
//           <div className={styles.serviceIcon}>🚗</div>
//           <h3>Availability</h3>
//           <p>Get a car or bike anytime with instant booking.</p>
//         </div>
//         <div className={styles.service}>
//           <div className={styles.serviceIcon}>🛋️</div>
//           <h3>Comfort</h3>
//           <p>Enjoy smooth rides with our quality vehicles.</p>
//         </div>
//         <div className={styles.service}>
//           <div className={styles.serviceIcon}>💰</div>
//           <h3>Savings</h3>
//           <p>Best rental rates with no hidden fees.</p>
//         </div>
//       </div>

//       <section className={styles.featuredVehicles}>
//         <h2>Featured Vehicles</h2>
//         {loading ? (
//           <div className={styles.loadingMessage}>Loading vehicles...</div>
//         ) : error ? (
//           <div className={styles.errorMessage}>{error}</div>
//         ) : (
//           <div className={styles.vehicleGrid}>
//             {featuredVehicles.map((vehicle, index) => (
//               <div className={styles.vehicleCard} key={vehicle._id || index}>
//                 <div className={styles.vehicleCardImage}>
//                   <img
//                     src={`http://localhost:5000/uploads/${vehicle.photo?.trim()}`}
//                     alt={vehicle.carName}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = vehicle.image || Car1;
//                     }}
//                   />
//                 </div>
//                 <h3>{vehicle.carName}</h3>
//                 <ul className={styles.vehicleFeatures}>
//                   <li>⚙️ Gear: {vehicle.gearType}</li>
//                   <li>❄️ AC: {vehicle.airCondition}</li>
//                   <li>👤 Seats: {vehicle.seats}</li>
//                 </ul>
//                 <p className={styles.vehicleRate}>
//                   Rate per Day: Rs. {vehicle.ratePerDay}
//                 </p>
//                 <Link to={`/cardetails/${vehicle._id}`}>
//                   <button className={styles.viewDetailsBtn}>
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <section className={styles.statsSection}>
//         <h2>30,000+</h2>
//         <div className={styles.highlight}>Happy Customers</div>
//       </section>

//       <section className={styles.aboutSection}>
//         <div className={styles.aboutContent}>
//           <h3>BIT ABOUT US</h3>
//           <div className={styles.highlight}>Our Story</div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Nulla netus semper ornare
//             elit egestas facilisis felis. Sodales risus tortor crangitis
//             rhoncus. Elementum volutpat magnis sit duis aenean orci ornari
//             lobortis.
//           </p>
//           <div className={styles.divider}></div>
//           <Link to="/about-us">
//             <button className={styles.exploreButton}>EXPLORE MORE</button>
//           </Link>
//         </div>
//       </section>

//       <section className={styles.testimonialsSection}>
//         <h2>What Our Customers Say About Us</h2>
//         <div className={styles.testimonialGrid}>
//           {[...Array(3)].map((_, index) => (
//             <div className={styles.testimonialCard} key={index}>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur. Libero neque eu quis
//                 magna tempor. Turpis sed rhoncus tortor luctus pretium fermentum
//                 in. Varius aliquam amet sagittis sed cras commodo vitae eget
//                 dul.
//               </p>
//               <div className={styles.testimonialAuthor}>
//                 <strong>Pravesh Taming</strong>
//                 <br />
//                 <span>Lalitpur</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer className={styles.footer}>
//         <div className={styles.footerColumns}>
//           <div className={styles.footerSection}>
//             <h4>COMPANY</h4>
//             <ul>
//               <li>
//                 <Link to="/about-us">About Us</Link>
//               </li>
//               <li>Careers</li>
//               <li>Press</li>
//             </ul>
//           </div>
//           <div className={styles.footerSection}>
//             <h4>VEHICLES</h4>
//             <ul>
//               <li>Economy</li>
//               <li>SUVs</li>
//               <li>Luxury</li>
//             </ul>
//           </div>
//           <div className={styles.footerSection}>
//             <h4>SUPPORT</h4>
//             <ul>
//               <li>
//                 <Link to="/contact-us">Contact Us</Link>
//               </li>
//               <li>FAQs</li>
//             </ul>
//           </div>
//           <div className={styles.footerSection}>
//             <h4>LOCATIONS</h4>
//             <ul>
//               <li>Kathmandu</li>
//               <li>Pokhara</li>
//               <li>Chitwan</li>
//             </ul>
//           </div>
//         </div>
//         <p className={styles.copyright}>
//           © {new Date().getFullYear()} Drifty. All rights reserved.
//         </p>
//       </footer>

//       {isVideoModalOpen && (
//         <div className={styles.videoModal}>
//           <div className={styles.videoModalContent}>
//             <video width="560" height="315" controls autoPlay>
//               <source src={videoFile} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <button className={styles.goBackButton} onClick={closeVideoModal}>
//               Go Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LandingPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import axios from "axios";

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

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [featuredVehicles, setFeaturedVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // convert to boolean
  }, []);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  useEffect(() => {
    const fallbackVehicles = [
      {
        _id: "1",
        carName: "Mercedes",
        gearType: "Automatic",
        airCondition: "Yes",
        seats: 4,
        photo: "no3.png",
        image: Car3,
      },
      {
        _id: "2",
        carName: "BMW",
        gearType: "Automatic",
        airCondition: "Yes",
        seats: 4,
        photo: "no4.png",
        image: Car4,
      },
    ];

    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        const carsWithImages = response.data.map((car) => ({
          ...car,
          image: carImages[car.photo] || Car1,
        }));
        setFeaturedVehicles(carsWithImages);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
        setFeaturedVehicles(fallbackVehicles);
        setError("Using fallback data - Failed to fetch vehicles");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className={styles.appContainer}>
      <nav className={styles.navbar}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/search">Vehicles</Link>
          <Link to="/details">Details</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          {isLoggedIn ? (
            <Link to="/profile" className={styles.profileBtn}>
              Your Profile
            </Link>
          ) : (
            <Link to="/auth">
              <button className={styles.signupBtn}>Login</button>
            </Link>
          )}
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.heroVehicleContainer}>
          <img src={Car1} alt="Premium Car" className={styles.vehicleImage} />
        </div>
        <div className={styles.routeMapWrapper}>
          <img
            src={RouteMap}
            alt="Route Map"
            className={styles.routeMapImage}
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Rent a Car Anytime</h1>
          <h2>Anywhere in Kathmandu</h2>
          <p>
            We provide the best car rental experience with affordable pricing.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.bookBtn}>Book Now</button>
            <button className={styles.videoBtn} onClick={openVideoModal}>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <div className={styles.benefitsContainer}>
        <h2 className={styles.benefitsTitle}>Why Choose Us</h2>
        <div className={styles.benefitsContent}>
          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitHeading}>Best Price Guaranteed</h3>
                <p>
                  Find a lower price? We'll refund you 100% of the difference.
                </p>
              </div>
            </li>
            <li className={styles.benefitItem}>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitHeading}>Experienced Driver</h3>
                <p>Don’t have a driver? Don’t worry — we’ve got you covered.</p>
              </div>
            </li>
            <li className={styles.benefitItem}>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitHeading}>24 Hour Car Delivery</h3>
                <p>
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </li>
            <li className={styles.benefitItem}>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitHeading}>
                  24/7 Technical Support
                </h3>
                <p>Have a question? Our team is available round-the-clock.</p>
              </div>
            </li>
          </ul>
          <div className={styles.featureCarImage}>
            <img src={Car2} alt="Featured Car" />
          </div>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.serviceIcon}>🚗</div>
          <h3>Availability</h3>
          <p>Get cars anytime with instant booking.</p>
        </div>
        <div className={styles.service}>
          <div className={styles.serviceIcon}>🛋️</div>
          <h3>Comfort</h3>
          <p>Enjoy smooth rides with our quality vehicles.</p>
        </div>
        <div className={styles.service}>
          <div className={styles.serviceIcon}>💰</div>
          <h3>Savings</h3>
          <p>Best rental rates with no hidden fees.</p>
        </div>
      </div>

      <section className={styles.featuredVehicles}>
        <h2>Featured Vehicles</h2>
        {loading ? (
          <div className={styles.loadingMessage}>Loading vehicles...</div>
        ) : error ? (
          <div className={styles.errorMessage}>{error}</div>
        ) : (
          <div className={styles.vehicleGrid}>
            {featuredVehicles.map((vehicle, index) => (
              <div className={styles.vehicleCard} key={vehicle._id || index}>
                <div className={styles.vehicleCardImage}>
                  <img
                    src={`http://localhost:5000/uploads/${vehicle.photo?.trim()}`}
                    alt={vehicle.carName}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = vehicle.image || Car1;
                    }}
                  />
                </div>
                <h3>{vehicle.carName}</h3>
                <ul className={styles.vehicleFeatures}>
                  <li>⚙️ Gear: {vehicle.gearType}</li>
                  <li>❄️ AC: {vehicle.airCondition}</li>
                  <li>👤 Seats: {vehicle.seats}</li>
                </ul>
                <p className={styles.vehicleRate}>
                  Rate per Day: Rs. {vehicle.ratePerDay}
                </p>
                <Link to={`/cardetails/${vehicle._id}`}>
                  <button className={styles.viewDetailsBtn}>
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className={styles.statsSection}>
        <h2>30,000+</h2>
        <div className={styles.highlight}>Happy Customers</div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h3>BIT ABOUT US</h3>
          <div className={styles.highlight}>Our Story</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nulla netus semper ornare
            elit egestas facilisis felis. Sodales risus tortor crangitis
            rhoncus. Elementum volutpat magnis sit duis aenean orci ornari
            lobortis.
          </p>
          <div className={styles.divider}></div>
          <Link to="/about-us">
            <button className={styles.exploreButton}>EXPLORE MORE</button>
          </Link>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h2>What Our Customers Say About Us</h2>
        <div className={styles.testimonialGrid}>
          {[...Array(3)].map((_, index) => (
            <div className={styles.testimonialCard} key={index}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero neque eu quis
                magna tempor. Turpis sed rhoncus tortor luctus pretium fermentum
                in. Varius aliquam amet sagittis sed cras commodo vitae eget
                dul.
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Pravesh Taming</strong>
                <br />
                <span>Lalitpur</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerSection}>
            <h4>COMPANY</h4>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>VEHICLES</h4>
            <ul>
              <li>Economy</li>
              <li>SUVs</li>
              <li>Luxury</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>SUPPORT</h4>
            <ul>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>LOCATIONS</h4>
            <ul>
              <li>Kathmandu</li>
              <li>Pokhara</li>
              <li>Chitwan</li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Drifty. All rights reserved.
        </p>
      </footer>

      {isVideoModalOpen && (
        <div className={styles.videoModal}>
          <div className={styles.videoModalContent}>
            <video width="560" height="315" controls autoPlay>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className={styles.goBackButton} onClick={closeVideoModal}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
