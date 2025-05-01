import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AddCarModal.css';

const AddCarModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    carName: '',
    carNumber: '',
    carType: '',
    phoneNumber: '',
    seats: '',
    bookingType: '',
    gearType: '',
    airCondition: '',
    photos: null
  });

  const carTypes = ['Sedan', 'SUV', 'Mini Van', 'Mini Van (EV)'];
  const gearTypes = ['Manual', 'Automatic'];
  const acOptions = ['Yes', 'No'];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={onClose} className="close-button">
          <X size={20} />
        </button>
        
        <form onSubmit={handleSubmit} className="form-container">
          <div className="photo-section">
            <h3>Car photos</h3>
            <div className="photo-upload-area">
              <div className="photo-placeholder">
                <div className="upload-icon">
                  <img src="/path-to-upload-icon.svg" alt="Upload" />
                </div>
              </div>
              <button type="button" className="upload-photos-btn">
                Upload Photos
              </button>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Car Name</label>
              <input
                type="text"
                value={formData.carName}
                onChange={(e) => setFormData({...formData, carName: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Car Number</label>
              <input
                type="text"
                value={formData.carNumber}
                onChange={(e) => setFormData({...formData, carNumber: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Car Type</label>
              <select
                value={formData.carType}
                onChange={(e) => setFormData({...formData, carType: e.target.value})}
              >
                <option value="">Select Type</option>
                {carTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Seats</label>
              <input
                type="number"
                value={formData.seats}
                onChange={(e) => setFormData({...formData, seats: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Booking Type</label>
              <input
                type="text"
                value={formData.bookingType}
                onChange={(e) => setFormData({...formData, bookingType: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Gears Type</label>
              <select
                value={formData.gearType}
                onChange={(e) => setFormData({...formData, gearType: e.target.value})}
              >
                <option value="">Select Type</option>
                {gearTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Air Condition</label>
              <select
                value={formData.airCondition}
                onChange={(e) => setFormData({...formData, airCondition: e.target.value})}
              >
                <option value="">Select Option</option>
                {acOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="add-car-btn">
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;