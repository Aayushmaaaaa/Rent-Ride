import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import "./VehicleTable.css";

const columnHeadings = [
  "Photo",
  "Name",
  "Type",
  "Seats",
  "Gear-Type",
  "AC",
  "Rate/Day",
  "Car Number",
  "Phone Number",
  "Booking Type",
  "Driver Name",
  "Location",
  "Actions",
];

const VehicleTable = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cars");
      setVehicles(res.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this vehicle?"))
      return;
    try {
      await axios.delete(`http://localhost:5000/api/cars/${id}`);
      setVehicles((prev) => prev.filter((car) => car._id !== id));
    } catch (error) {
      console.error("Failed to delete vehicle:", error);
    }
  };

  return (
    <div className="table-container">
      <div className="table-scroll">
        <table className="vehicle-table">
          <thead className="table-header">
            <tr>
              {columnHeadings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-body">
            {vehicles.map((vehicle) => (
              <tr key={vehicle._id}>
                <td className="table-cell">
                  <div className="car-photo">
                    <img
                      src={
                        vehicle.photo?.length
                          ? `http://localhost:5000/uploads/${vehicle.photo[0]}`
                          : "https://via.placeholder.com/50" // fallback image
                      }
                      alt="car"
                      style={{ width: "50px", height: "auto" }}
                    />
                  </div>
                </td>
                <td className="table-cell">{vehicle.carName}</td>
                <td className="table-cell">{vehicle.carType}</td>
                <td className="table-cell">{vehicle.seats}</td>
                <td className="table-cell">{vehicle.gearType}</td>
                <td className="table-cell">{vehicle.airCondition}</td>
                <td className="table-cell">{vehicle.ratePerDay}</td>
                <td className="table-cell">{vehicle.carNumber}</td>
                <td className="table-cell">{vehicle.phoneNumber}</td>
                <td className="table-cell">{vehicle.bookingType}</td>
                <td className="table-cell">{vehicle.driverName || "N/A"}</td>
                <td className="table-cell">N/A</td>
                <td className="table-cell actions-cell">
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(vehicle._id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleTable;
