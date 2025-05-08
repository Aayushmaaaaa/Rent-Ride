import React, { useState } from 'react';
import { Users, ArrowLeft } from 'lucide-react';
import './DriverVerification.css';
import Sidebar from './Sidebar';
import Nav from './Nav';

const UserVerificationModal = ({ user, onClose }) => {
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
          <button className="back-button" onClick={onClose}>
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h2>Personal Information</h2>
        </div>

        <div className="verification-content">
          <div className="user-docs-grid">
            <div className="user-doc-item">
              <h3>Licence Photo</h3>
              <div className="doc-preview">
                <img src="/license.jpg" alt="License" />
              </div>
            </div>
            <div className="user-doc-item">
              <h3>Passport Size Photo</h3>
              <div className="doc-preview">
                <img src="/passport.jpg" alt="Passport" />
              </div>
            </div>
          </div>

          <div className="verification-actions">
            <button className="reject-button" onClick={handleReject}>
              <span className="button-icon">✕</span>
              Reject Verification
            </button>
            <button className="approve-button" onClick={handleApprove}>
              <span className="button-icon">✓</span>
              Approve Verification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserVerification = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedUser, setSelectedUser] = useState(null);

  const stats = {
    totalUsers: 145,
    verified: 87,
    pending: 32,
    rejected: 26
  };

  const userData = [
    { id: '#VH-1042', owner: 'Pravesh', number: '980000000', status: 'Pending', submissionDate: '01 May 2025' },
    { id: '#VH-1041', owner: 'Taklu', number: '973000000', status: 'Pending', submissionDate: '30 Apr 2025' },
    { id: '#VH-1040', owner: 'Vijay Setupati', number: '98777777000', status: 'Approved', submissionDate: '30 Apr 2025' },
    { id: '#VH-1039', owner: 'Aayushma', number: '987000000', status: 'Rejected', submissionDate: '29 Apr 2025' },
    { id: '#VH-1038', owner: 'Ritesh', number: '980008000', status: 'Approved', submissionDate: '29 Apr 2025' }
  ];

  const filteredUsers = filterStatus === 'All' 
    ? userData 
    : userData.filter(user => user.status === filterStatus);

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content-area">
          <div className="driver-verification">
            <h1>KYC Verification</h1>

            <div className="stats-container">
              <div className="stat-card total">
                <span className="stat-icon">👥</span>
                <div className="stat-info">
                  <span className="stat-value">{stats.totalUsers}</span>
                  <span className="stat-label">Total Users</span>
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
                      <th>Number</th>
                      <th>Submission Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.owner}</td>
                        <td>{user.number}</td>
                        <td>{user.submissionDate}</td>
                        <td>
                          <span className={`status-badge ${user.status.toLowerCase()}`}>
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="view-btn"
                            onClick={() => setSelectedUser(user)}
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

            {selectedUser && (
              <UserVerificationModal 
                user={selectedUser}
                onClose={() => setSelectedUser(null)} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserVerification;