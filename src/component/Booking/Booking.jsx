import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Booking.css';
import paymentImage from './images/payment-image.png';
import qrCode from './images/qr-code.png';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    // Implement your actual order finalization logic here for eSewa.
    // This is a placeholder.
    console.log('Final order confirmed for vehicle ID:', id, 'via eSewa');

    // After successful order confirmation, navigate to the order confirmation page.
    navigate('/order-confirmed');
  };

  return (
    <div className="booking-container">
      <div className="left-section">
        <h1 className="drifty-logo">drifty</h1>
        <div className="payment-section">
          <h2>Payment Details</h2>
          <div className="payment-illustration">
            <img src={paymentImage} alt="Payment illustration" />
          </div>
        </div>
        <div className="terms-section">
          <h2>Term & Policy</h2>
          <p className="terms-text">
            Lorem ipsum dolor sit amet consectetur. Nulla scelerisque posuere amet at at.
            Hendrerit lectus eu fringilla elit turpis dictumst massa volutpat. Ut ac lectus
            maecenas urna integer elit nish. Massa nisi justo vulputate fames quis
            pellentesque id congue.
          </p>
        </div>
      </div>
      <div className="right-section">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="progress-steps">
            <div className="step">Rent</div>
            <div className="step">Review</div>
            <div className="step active">Book</div>
          </div>
          <div className="order-details">
            <h3>Order details</h3>
            <div className="detail-row">
              <span>Mercedes-Benz (ID: {id})</span>
              <span>RS_300.00</span>
            </div>
            <div className="detail-row">
              <span>Total-Days</span>
              <span>1</span>
            </div>
            <div className="detail-row">
              <span>driver Rate</span>
              <span>RS_300.00</span>
            </div>
            <div className="detail-row">
              <span>discount</span>
              <span>RS_10</span>
            </div>
            <div className="detail-row">
              <span>total</span>
              <span>RS_3000</span>
            </div>
          </div>
          <div className="qr-section">
            <img src={qrCode} alt="QR Code" />
            <button className="confirm-button" onClick={handleConfirmOrder}>Confirm order</button>
          </div>
          <div className="total-amount">
            <h3>Total Amount</h3>
            <span className="amount">RS_900.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;