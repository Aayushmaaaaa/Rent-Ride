import React, { useState, useEffect, useRef } from 'react';
import { Bell, Search, Globe, Menu } from 'lucide-react';
import './Nav.css';

const Nav = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <div className="notification-container" ref={notificationRef}>
            <div 
              className="notification-badge"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={20} className="notification-icon" />
              <span className="badge">2</span>
            </div>
            
            {showNotifications && (
              <div className="notification-popup">
                <h3>Notifications</h3>
                <div className="notification-list">
                  <div className="notification-item">
                    <p>New booking request received</p>
                    <span>2 minutes ago</span>
                  </div>
                  <div className="notification-item">
                    <p>Vehicle maintenance due</p>
                    <span>1 hour ago</span>
                  </div>
                </div>
              </div>
            )}
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