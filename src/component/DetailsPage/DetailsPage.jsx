import React from 'react';
import './DetailsPage.css';
import { Link, useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleGoToHomepage = () => {
    navigate('/'); // Navigate to the root, which your App.js handles for logged-in/out
  };

  return (
    <div className="details-container">
      <header className="details-header">
        <Link to="/" className="drifty-text-link">
          <h1>Drifty</h1>
        </Link>
        <button onClick={handleGoToHomepage} className="go-to-home-button">
          {isLoggedIn ? "Go to Logged-in Homepage" : "Go to Homepage"}
        </button>
      </header>
      <main className="details-content">
        <h1>Details</h1>
        <section className="details-section">
          <h2>Explore the Features</h2>
          <p>
            Discover the advanced features and functionalities that Drifty offers to make your vehicle rental experience seamless and enjoyable.
          </p>
          <ul>
            <li>Wide selection of vehicles for every need.</li>
            <li>Easy and intuitive online booking process.</li>
            <li>Transparent pricing with no hidden charges.</li>
            <li>Secure payment gateway for hassle-free transactions.</li>
            <li>Dedicated customer support available 24/7.</li>
            <li>Flexible rental options and durations.</li>
          </ul>
        </section>

        <section className="details-section">
          <h2>How It Works</h2>
          <p>
            Get started with Drifty in just a few simple steps:
          </p>
          <ol>
            <li><strong>Browse:</strong> Explore our extensive range of vehicles.</li>
            <li><strong>Select:</strong> Choose the perfect vehicle for your needs.</li>
            <li><strong>Book:</strong> Enter your rental dates and confirm your booking.</li>
            <li><strong>Drive:</strong> Pick up your vehicle and enjoy your journey!</li>
          </ol>
        </section>

        <section className="details-section">
          <h2>Why Choose Drifty?</h2>
          <p>
            Drifty is committed to providing you with the best online vehicle rental experience. We pride ourselves on:
          </p>
          <ul>
            <li>Reliable and well-maintained vehicles.</li>
            <li>Competitive and transparent pricing.</li>
            <li>User-friendly online platform.</li>
            <li>Exceptional customer service.</li>
            <li>Convenient and flexible rental options.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DetailsPage;