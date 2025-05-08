import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css'; // Make sure this CSS file exists

const OrderConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // You might want to fetch final order details here using the ID
    // or data passed through state/context.
  }, []);

  const handleGoToHomepage = () => {
    navigate('/'); // Assuming '/' is your landing page route
  };

  return (
    <div className="order-confirmation-container">
      <div className="confirmation-box">
        <h2>Your Order is Confirmed!</h2>
        <p>Thank you for your order. You will receive a confirmation email shortly.</p>
        <button onClick={handleGoToHomepage}>Go back to Homepage</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;