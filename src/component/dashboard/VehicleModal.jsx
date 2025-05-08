// src/component/dashboard/VehicleModal.jsx
import React from 'react';
import './VehicleModal.css'; // Create CSS for the modal

function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) {
    return null;
  }

  return (
    <div className="vehicle-modal-overlay">
      <div className="vehicle-modal">
        <h3>{vehicle.vehicleName} Details</h3>
        <div className="image-gallery">
          {vehicle.images?.vehicleFrontImage && (
            <div className="image-item">
              <img src={vehicle.images.vehicleFrontImage} alt="Front" />
              <p>Front View</p>
            </div>
          )}
          {vehicle.images?.vehicleBackImage && (
            <div className="image-item">
              <img src={vehicle.images.vehicleBackImage} alt="Back" />
              <p>Back View</p>
            </div>
          )}
          {vehicle.images?.interiorImage && (
            <div className="image-item">
              <img src={vehicle.images.interiorImage} alt="Interior" />
              <p>Interior View</p>
            </div>
          )}
          {vehicle.images?.bluebookDocument && (
            <div className="document-item">
              <img src={vehicle.images.bluebookDocument} alt="Bluebook" />
              <p>Blue Book</p>
            </div>
          )}
          {vehicle.images?.insuranceDocument && (
            <div className="document-item">
              <img src={vehicle.images.insuranceDocument} alt="Insurance" />
              <p>Insurance Doc</p>
            </div>
          )}
        </div>
        <div className="vehicle-details">
          <p><strong>Type:</strong> {vehicle.type}</p>
          <p><strong>Gear Type:</strong> {vehicle.gearType}</p>
          <p><strong>Seats:</strong> {vehicle.seatNumbers}</p>
          <p><strong>AC:</strong> {vehicle.airCondition}</p>
          <p><strong>Vehicle Number:</strong> {vehicle.vehicleNumber}</p>
          <p><strong>Per Day Rate:</strong> {vehicle.perDayRate}</p>
          <p><strong>Rental Type:</strong> {vehicle.rentalType}</p>
          <p><strong>Phone Number:</strong> {vehicle.phoneNumber}</p>
          {/* Add other details as needed */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default VehicleModal;