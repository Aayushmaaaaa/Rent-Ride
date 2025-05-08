import React, { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import './ActiveVehiclesTable.css';

const ActiveVehiclesTable = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const vehicles = [
    {
      photo: "🚗",
      name: "Toyota",
      type: "Sedan",
      seats: 5,
      gearType: "Automatic",
      ac: "Yes",
      ratePerDay: "Rs 3,000",
      carNumber: "BA1354",
      phoneNumber: "9840999999",
      bookingType: "With Driver",
      bookedDate: "8/5/2025",
      driverName: "Pravesh Lama"
    },
    {
      photo: "🚗",
      name: "Toyota",
      type: "Sedan",
      seats: 5,
      gearType: "Automatic",
      ac: "Yes",
      ratePerDay: "Rs 3,000",
      carNumber: "BA1354",
      phoneNumber: "9840999999",
      bookingType: "With Driver",
      bookedDate: "8/5/2025",
      driverName: "Momo Dai"
    }
  ];

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content-area">
          <div className="page-header">
            <h1>Active Vehicles</h1>
          </div>
          <div className="active-vehicles-table-container">
            <div className="table-scroll">
              <table className="active-vehicles-table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Seats</th>
                    <th>Gear-Type</th>
                    <th>AC</th>
                    <th>Rate/Day</th>
                    <th>Car Number</th>
                    <th>Phone Number</th>
                    <th>Booking Type</th>
                    <th>Booked Date</th>
                    <th>Driver Name</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle, index) => (
                    <tr key={index}>
                      <td>{vehicle.photo}</td>
                      <td>{vehicle.name}</td>
                      <td>{vehicle.type}</td>
                      <td>{vehicle.seats}</td>
                      <td>{vehicle.gearType}</td>
                      <td>{vehicle.ac}</td>
                      <td>{vehicle.ratePerDay}</td>
                      <td>{vehicle.carNumber}</td>
                      <td>{vehicle.phoneNumber}</td>
                      <td>{vehicle.bookingType}</td>
                      <td>{vehicle.bookedDate}</td>
                      <td>{vehicle.driverName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveVehiclesTable;