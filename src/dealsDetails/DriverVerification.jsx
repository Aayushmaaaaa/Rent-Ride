import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './DriverVerification.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import VerificationDetails from './VerificationDetails';

const DriverVerification = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const stats = {
    totalVehicles: 124,
    verified: 87,
    pending: 32,
    rejected: 5
  };

  const driverData = [
    { id: '#VH-1042', owner: 'Pravesh', vehicle: 'Toyota Camry (2022)', status: 'Pending' },
    { id: '#VH-1041', owner: 'Rajiv', vehicle: 'Honda Civic (2023)', status: 'Pending' },
    { id: '#VH-1040', owner: 'Vijay Setupati', vehicle: 'Tesla Model 3 (2024)', status: 'Approved' },
    { id: '#VH-1039', owner: 'Aayushma', vehicle: 'BMW X5 (2021)', status: 'Rejected' },
    { id: '#VH-1038', owner: 'Ritesh', vehicle: 'Ford Mustang (2022)', status: 'Approved' },
    { id: '#VH-1038', owner: 'Deekshya', vehicle: 'Ford Mustang (2022)', status: 'Approved' },
    { id: '#VH-1038', owner: 'Abhishek', vehicle: 'Ford Mustang (2022)', status: 'Approved' }
  ];

  const filteredDrivers = filterStatus === 'All' 
    ? driverData 
    : driverData.filter(driver => driver.status === filterStatus);

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content-area">
          <div className="driver-verification">
            <h1>Driver Verification</h1>

            <div className="stats-container">
              <div className="stat-card total">
                <span className="stat-icon">🚗</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.totalVehicles}</span>
                  <span className="stat-label">Total Vehicles</span>
                </div>
              </div>
              <div className="stat-card verified">
                <span className="stat-icon">✓</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.verified}</span>
                  <span className="stat-label">Verified</span>
                </div>
              </div>
              <div className="stat-card pending">
                <span className="stat-icon">⏳</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.pending}</span>
                  <span className="stat-label">Pending</span>
                </div>
              </div>
              <div className="stat-card rejected">
                <span className="stat-icon">✕</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.rejected}</span>
                  <span className="stat-label">Rejected</span>
                </div>
              </div>
            </div>

            <div className="verification-queue">
              <div className="queue-header">
                <h2>Verification Queue</h2>
                <div className="filter-buttons">
                  <button 
                    className={`filter-btn ${filterStatus === 'All' ? 'active' : ''}`}
                    onClick={() => setFilterStatus('All')}
                  >
                    All
                  </button>
                  <button 
                    className={`filter-btn ${filterStatus === 'Pending' ? 'active' : ''}`}
                    onClick={() => setFilterStatus('Pending')}
                  >
                    Pending
                  </button>
                  <button 
                    className={`filter-btn ${filterStatus === 'Approved' ? 'active' : ''}`}
                    onClick={() => setFilterStatus('Approved')}
                  >
                    Approved
                  </button>
                  <button 
                    className={`filter-btn ${filterStatus === 'Rejected' ? 'active' : ''}`}
                    onClick={() => setFilterStatus('Rejected')}
                  >
                    Rejected
                  </button>
                </div>
              </div>

              <div className="queue-table">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Owner</th>
                      <th>Vehicle</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDrivers.map((driver) => (
                      <tr key={`${driver.id}-${driver.owner}`}>
                        <td>{driver.id}</td>
                        <td>{driver.owner}</td>
                        <td>{driver.vehicle}</td>
                        <td>
                          <span className={`status-badge ${driver.status.toLowerCase()}`}>
                            {driver.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="view-btn"
                            onClick={() => setSelectedVehicle(driver)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedVehicle && (
              <VerificationDetails 
                onClose={() => setSelectedVehicle(null)} 
                vehicle={selectedVehicle}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverVerification;