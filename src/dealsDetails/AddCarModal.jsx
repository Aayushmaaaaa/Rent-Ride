import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AddCarModal.css';

const AddCarModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    carName: '',
    carType: '',
    seats: '',
    gearType: '',
    airCondition: '',
    ratePerDay: '',
    photos: null
  });

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
            <h3 className="section-title">Car photos</h3>
            <div className="photo-preview">
              {formData.photos ? (
                <img 
                  src={URL.createObjectURL(formData.photos)} 
                  alt="Preview" 
                  className="preview-image"
                />
              ) : (
                <div className="photo-placeholder">
                  <div className="upload-placeholder">
                    <span>+</span>
                  </div>
                </div>
              )}
            </div>
            <button type="button" className="upload-button">
              Upload Photos
            </button>
          </div>

          <div className="form-fields">
            <div className="form-group">
              <label>Car Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.carName}
                onChange={(e) => setFormData({...formData, carName: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Car Type</label>
              <input
                type="text"
                className="form-input"
                value={formData.carType}
                onChange={(e) => setFormData({...formData, carType: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Seats</label>
              <input
                type="number"
                className="form-input"
                value={formData.seats}
                onChange={(e) => setFormData({...formData, seats: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Gears Type</label>
              <input
                type="text"
                className="form-input"
                value={formData.gearType}
                onChange={(e) => setFormData({...formData, gearType: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Air Condition</label>
              <input
                type="text"
                className="form-input"
                value={formData.airCondition}
                onChange={(e) => setFormData({...formData, airCondition: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Rate/Day</label>
              <input
                type="text"
                className="form-input"
                value={formData.ratePerDay}
                onChange={(e) => setFormData({...formData, ratePerDay: e.target.value})}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;