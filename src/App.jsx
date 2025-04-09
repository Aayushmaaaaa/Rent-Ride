import { useState } from "react";
import "./App.css";

function App() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState(""); 
  const featuredVehicles = [
    {
      brand: "Mercedes",
      features: ["H Automatic", "Conditioner"],
      image: "src/Images/no3.png",
    },
    {
      brand: "Mercedes",
      features: ["H Automatic", "Conditioner"],
      image: "src/Images/no4.png",
    },
    {
      brand: "Mercedes",
      features: ["H Automatic", "Conditioner"],
      image: "src/Images/no5.png",
    },
    {
      brand: "Portable",
      features: ["H Automatic", "Conditioner"],
      image: "src/Images/no6.png",
    },
    {
      brand: "Toyota",
      features: ["H Automatic", "Conditioner"],
      image: "src/Images/no7.png",
    },
    {
      brand: "Portable",
      features: ["H Automatic", "Conditioner"],
      image: "src/Images/no8.png",
    },
    {
      brand: "Mercedes",
      features: ["H Automatic", "Conditioner"],
      image: "src/Images/no9.png",
    },
    {
      brand: "Mercedes",
      features: ["H Automatic", "Conditioner"],
      image: "src/Images/no10.png",
    },
  ];

  return (
    <div className="app-container">
      <nav className="navbar">
        <img src="src/Images/Logo.png" alt="Logo" className="logo" />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Vehicles</a>
          <a href="#">Details</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-vehicle-container">
          <img
            src="src/Images/no1.png"
            alt="Premium Car"
            className="vehicle-image"
          />
        </div>

        <div className="route-map-wrapper">
          <img
            src="src/Images/Middlemap.png"
            alt="Route Map"
            className="route-map-image"
          />
        </div>

        <div className="hero-content">
          <h1>Rent a Car Anytime</h1>
          <h2>Anywhere in Kathmandu</h2>
          <p>
            We provide the best car rental experience with affordable pricing.
          </p>
          <div className="hero-buttons">
            <button className="book-btn">Book Now</button>
            <button className="video-btn">Watch Video</button>
          </div>
        </div>
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
            <img src="src/Images/no2.png" alt="HEETOR BACISTON car" />
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
        <div className="vehicle-grid">
          {featuredVehicles.map((vehicle, index) => (
            <div className="vehicle-card" key={index}>
              <img src={vehicle.image} alt={`${vehicle.brand} vehicle`} />
              <h3>{vehicle.brand}</h3>
              <ul>
                {vehicle.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button>View Details</button>
            </div>
          ))}
        </div>
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
          <button className="explore-button">EXPLORE MORE</button>
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
              <li>About Us</li>
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
              <li>Contact Us</li>
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
    </div>
  );
}

export default App;