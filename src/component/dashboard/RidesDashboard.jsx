// src/components/RidesDashboard/RidesDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RidesDashboard.css';
import CancelModal from './CancelModal';
import notificationIcon from '../../assets/notification-icon.png';
import profileImage from '../../assets/default_profile.png';

function RidesDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active'); // 'active' or 'history'

  // Active rides data
  const [activeRides, setActiveRides] = useState([
    {
      id: 1,
      vehicle: 'Honda CR-V',
      type: 'SUV',
      driver: 'Self Drive',
      startDate: 'Apr 15, 2025',
      endDate: 'Apr 22, 2025',
      totalCost: '$455.00',
      status: 'Active'
    },
    {
      id: 2,
      vehicle: 'Tesla Model 3',
      type: 'Electric',
      driver: 'Sarah Johnson',
      startDate: 'Apr 17, 2025',
      endDate: 'Apr 20, 2025',
      totalCost: '$270.00',
      status: 'Active'
    }
  ]);

  // Ride history data
  const [rideHistory, setRideHistory] = useState([
    {
      id: 3,
      vehicle: 'Hyundai i20',
      type: 'Hatchback',
      driver: 'Self Drive',
      startDate: 'Apr 05, 2025',
      endDate: 'Apr 08, 2025',
      totalCost: '$190.00',
      status: 'Cancelled'
    },
    {
      id: 4,
      vehicle: 'Ford EcoSport',
      type: 'SUV',
      driver: 'Ram Bdr. Thapa',
      startDate: 'Mar 29, 2025',
      endDate: 'Apr 01, 2025',
      totalCost: '$210.00',
      status: 'Completed'
    }
  ]);

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [rideToCancel, setRideToCancel] = useState(null);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const handleCancelClick = (id) => {
    setRideToCancel(id);
    setShowCancelModal(true);
  };

  const handleConfirmCancel = (id) => {
    // Find the ride to cancel
    const rideToMove = activeRides.find(ride => ride.id === id);

    if (rideToMove) {
      // Create a copy with updated status
      const cancelledRide = {...rideToMove, status: 'Cancelled'};

      // Remove from active rides
      setActiveRides(activeRides.filter(ride => ride.id !== id));

      // Add to ride history
      setRideHistory([cancelledRide, ...rideHistory]);
    }

    setShowCancelModal(false);
    setRideToCancel(null);
  };

  const handleCloseModal = () => {
    setShowCancelModal(false);
    setRideToCancel(null);
  };

  return (
    <div className="rides-dashboard-container full-screen">
      <div className="left-icons">
        <div className="left-icon" onClick={() => navigate('/profile')}>☰</div>
        <div className="left-icon active">⚙</div>
      </div>

      <div className="header">
        <div className="welcome-date">
          <h2>Welcome, User </h2>
          <p className="date">{currentDate}</p>
        </div>
        <div className="header-right">
        <button className="notification-button">
  {notificationIcon && <img src={notificationIcon} alt="Notifications" />}
</button>
<div className="user-avatar">
  <img src={profileImage} alt="User Avatar" />
</div>
        </div>
      </div>

      <div className="banner dark-banner">
        {/* Darker banner for consistency */}
      </div>

      <div className="rides-controls">
        <button
          className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active Rides
        </button>
        <button
          className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Ride History
        </button>
      </div>

      {activeTab === 'active' ? (
        <div className="rides-table-container">
          <h2>Active Rides</h2>
          {activeRides.length > 0 ? (
            <table className="rides-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Type</th>
                  <th>Driver</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Total Cost</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {activeRides.map(ride => (
                  <tr key={ride.id}>
                    <td>{ride.vehicle}</td>
                    <td>{ride.type}</td>
                    <td>{ride.driver}</td>
                    <td>{ride.startDate}</td>
                    <td>{ride.endDate}</td>
                    <td>{ride.totalCost}</td>
                    <td>
                      <span className="status-badge active">{ride.status}</span>
                    </td>
                    <td>
                      <button
                        className="cancel-button"
                        onClick={() => handleCancelClick(ride.id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-rides-message">No active rides found.</p>
          )}
        </div>
      ) : (
        <div className="rides-table-container">
          <h2>Ride History</h2>
          {rideHistory.length > 0 ? (
            <table className="rides-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Type</th>
                  <th>Driver</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Total Cost</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rideHistory.map(ride => (
                  <tr key={ride.id}>
                    <td>{ride.vehicle}</td>
                    <td>{ride.type}</td>
                    <td>{ride.driver}</td>
                    <td>{ride.startDate}</td>
                    <td>{ride.endDate}</td>
                    <td>{ride.totalCost}</td>
                    <td>
                      <span className={`status-badge ${ride.status.toLowerCase()}`}>
                        {ride.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-rides-message">No ride history found.</p>
          )}
        </div>
      )}

      {/* Cancel modal */}
      <CancelModal
        isOpen={showCancelModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmCancel}
        rideId={rideToCancel}
      />
    </div>
  );
}

export default RidesDashboard;