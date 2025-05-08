import React from 'react';
import './VerificationDetails.css';

const VerificationDetails = ({ onClose }) => {
  const handleReject = () => {
    // Handle rejection logic here
    onClose();
  };

  const handleApprove = () => {
    // Handle approval logic here
    onClose();
  };

  return (
    <div className="verification-details-overlay">
      <div className="verification-details-container">
        <div className="verification-header">
          <button className="back-button" onClick={onClose}>← Back</button>
        </div>

        <div className="verification-content">
          <div className="documents-section">
            <div className="documents-grid">
              <div className="document-item">
                <h3>License Photo</h3>
                <img src="/licence.jpg" alt="License" />
              </div>
              <div className="document-item">
                <h3>Passport Size Photo</h3>
                <img src="/passport.jpg" alt="Passport" />
              </div>
            </div>
          </div>

          <div className="verification-actions">
            <button className="reject-button" onClick={handleReject}>
              Reject Verification
            </button>
            <button className="approve-button" onClick={handleApprove}>
              Approve Verification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationDetails;