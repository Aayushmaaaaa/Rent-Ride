import React, { useState } from 'react';
import { Bell, Search, Globe, Menu } from 'lucide-react';
import './Nav.css';

const Nav = ({ onMenuClick }) => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-left">
          <button onClick={onMenuClick} className="menu-button">
            <Menu size={24} />
          </button>
          <div className="search-container">
            <div className="search-icon">
              <Search size={18} />
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="nav-right">
          <div className="notification-badge">
            <Bell size={20} className="notification-icon" />
            <span className="badge">2</span>
          </div>

          <div className="location">
            <Globe size={16} className="location-icon" />
            <span>kathmandu</span>
          </div>

          <div className="profile">
            <div className="avatar">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Profile"
                className="avatar-image"
              />
            </div>
            <div className="profile-info">
              <span className="profile-name">Sora</span>
              <span className="profile-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;