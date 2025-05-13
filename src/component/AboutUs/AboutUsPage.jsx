import React from 'react';
import './AboutUsPage.css';
import { Link } from 'react-router-dom';
import logo from "../Images/Logo.png";

const AboutUsPage = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <div className="navbar-left">
          <img src={logo} alt="Drifty Logo" className="logo" />
        </div>
        <Link to="/" className="go-to-home-link">
          {isLoggedIn ? "Go to Logged-in Homepage" : "Go to Homepage"}
        </Link>
      </header>
      <main className="about-us-content">
        <h1>About Us</h1>
        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            Welcome to Drifty, your trusted online platform for vehicle rentals. Our journey began with a vision to make
            vehicle rental easy, affordable, and accessible.
          </p>
          <p>
            Founded in 2024, Drifty has grown into a comprehensive rental solution, committed to exceptional service,
            transparent pricing, and a seamless experience.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            To empower people with the freedom to explore and travel conveniently by offering a diverse selection of
            well-maintained vehicles through an intuitive online platform.
          </p>
        </section>

        <section className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Customer First:</strong> We prioritize your needs.</li>
            <li><strong>Reliability:</strong> We ensure our vehicles are safe.</li>
            <li><strong>Transparency:</strong> We believe in clear communication.</li>
            <li><strong>Accessibility:</strong> We aim to make rental accessible to everyone.</li>
            <li><strong>Innovation:</strong> We continuously improve our services.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;