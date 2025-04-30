import React from "react";

function VehicleCard({ vehicle }) {
  if (!vehicle) return null;

  const { image, brand, type, price, transmission, airConditioner } = vehicle;

  return (
    <div className="vehicle-card">
      <img src={image} alt={`${brand} ${type}`} className="vehicle-image" />
      <div className="vehicle-info">
        <h3>{brand}</h3>
        <p>Type: {type}</p>
        <p>Price: ${price}/day</p>
        <p>Transmission: {transmission}</p>
        <p>AC: {airConditioner ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default VehicleCard;
