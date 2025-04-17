 // src/components/UserProfileDashboard/UserProfileDashboard.js
import React from 'react';
import './UserProfileDashboard.css';
import profileImage from '../assets/default_profile.png';
import searchIcon from '../assets/search-icon.png'; // Placeholder - replace with your actual icon import
import notificationIcon from '../assets/notification-icon.png'; // Placeholder - replace with your actual icon import
import emailIcon from '../assets/email-icon.png'; // Placeholder - replace with your actual icon import

function UserProfileDashboard() {
  return (
    <div className="user-profile-dashboard-container full-screen">
      <div className="left-icons">
        <div className="left-icon">☰</div> {/* Placeholder for icon */}
        <div className="left-icon">⚙</div> {/* Placeholder for icon */}
      </div>
      <div className="header">
        <div className="welcome-date">
          <h2>Welcome, User</h2>
          <p className="date">Tue, 07 June 2022</p>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            {searchIcon && <span className="search-icon"><img src={searchIcon} alt="Search" /></span>}
          </div>
          <button className="notification-button">
            {notificationIcon && <img src={notificationIcon} alt="Notifications" />}
          </button>
          <div className="user-avatar">
            <img src={profileImage} alt="User Avatar" />
          </div>
        </div>
      </div>

      <div className="banner dark-banner">
        {/* Darker banner */}
      </div>

      <div className="profile-info-section">
        <div className="profile-details">
          <div className="avatar-container">
            <img src={profileImage} alt="User Profile" className="profile-avatar" />
          </div>
          <div className="user-name-email">
            <div className="name">gigi</div>
            <div className="email">yours@gmail.com</div>
          </div>
        </div>
        <button className="edit-button">Edit</button>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Your First Name" />
        </div>
        <div className="form-group">
          <label htmlFor="nickName">Nick Name</label>
          <input type="text" id="nickName" placeholder="Your First Name" />
        </div>
        <div className="form-group gender">
          <label htmlFor="gender">Gender</label>
          <div className="select-wrapper">
            <select id="gender">
              <option>Your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {/* Dropdown arrow */}
          </div>
        </div>
        <div className="form-group kyc">
          <label htmlFor="kyc">KYC</label>
          <button className="save-continue-button">Save & Continue</button>
        </div>
        <div className="form-group language">
          <label htmlFor="language">Language</label>
          <div className="select-wrapper">
            <select id="language">
              <option>Your preference language</option>
              <option value="english">English</option>
              <option value="nepali">Nepali</option>
              <option value="spanish">Spanish</option>
              {/* Add more languages */}
            </select>
            {/* Dropdown arrow */}
          </div>
        </div>
        <div className="form-group email-address-grid-item">
          <h3>My Email Address</h3>
          <div className="email-item">
            <span className="email-icon">✉️</span>
            <div className="email-details">
              <div className="email-text">youruser@gmail.com</div>
              <div className="email-ago">1 month ago</div>
            </div>
          </div>
          <button className="add-email-button">+ Add Email Address</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfileDashboard;