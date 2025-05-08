// src/components/RidesDashboard/CancelModal.js
import React from 'react';
import './CancelModal.css';

function CancelModal({ isOpen, onClose, onConfirm, rideId }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="cancel-modal">
        <h2>Cancel Ride?</h2>
        
        <p className="policy-intro">Please read our cancellation policy:</p>
        
        <ul className="cancellation-policy">
          <li><strong>&gt; 24 hrs</strong>: Full refund</li>
          <li><strong>12-24 hrs</strong>: 50% refund</li>
          <li><strong>&lt; 12 hrs</strong>: No or minimal refund</li>
          <li><strong>Within 15 mins of booking</strong>: Free cancellation</li>
        </ul>
        
        <p className="confirmation-text">Are you sure you want to cancel your ride?</p>
        
        <div className="modal-buttons">
          <button 
            className="confirm-cancel-button"
            onClick={() => onConfirm(rideId)}
          >
            Yes, Cancel Ride
          </button>
          <button 
            className="go-back-button"
            onClick={onClose}
          >
            No, Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelModal;