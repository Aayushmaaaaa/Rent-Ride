import React from "react";
import { useNavigate } from "react-router-dom";
import './VehicleCard.css';

function VehicleCard({ vehicle }) {
  const navigate = useNavigate();
  
  if (!vehicle) return null;
  const { id, image, brand, type, price, transmission } = vehicle;

  return (
    <div className="vehicle-card">
      <img src={image} alt={`${brand} ${type}`} className="vehicle-image" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="brand">{brand}</h3>
          <span className="type">{type}</span>
        </div>
        
        <div className="features">
          <div className="feature">
            <span className="feature-icon">⚙️</span>
            <span>{transmission}</span>
          </div>
          <div className="feature">
            <span className="feature-icon">❄️</span>
            <span>Air Conditioner</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🧑</span>
            <span>With Driver/Without Driver</span>
          </div>
        </div>

        <div className="card-footer">
          <div className="price">
            <span className="amount">${price}</span>
            <span className="period">per day</span>
          </div>
          <button 
            className="view-details"
            onClick={() => navigate(`/cardetails/${id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;
