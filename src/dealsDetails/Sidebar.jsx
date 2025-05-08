import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Mail, BookOpen, CarFront, Tag as PriceTag, Calendar, CheckSquare, UserRound, Receipt, Palette, Users, Table2, Settings, LogOut, X, DollarSign } from 'lucide-react';
import './Sidebar.css';
import logo from '../component/Images/Logo.png';

const MenuItem = ({ icon, text, to, active }) => {
  return (
    <li className={`menu-item ${active ? 'active' : ''}`}>
      <Link to={to} className="menu-link">
        <span className="menu-icon">{icon}</span>
        <span>{text}</span>
      </Link>
    </li>
  );
};

const Sidebar = ({ isOpen = true, onClose }) => {
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <button onClick={onClose} className="close-button">
          <X size={24} />
        </button>
      </div>

      <div className="sidebar-content">
        <ul className="menu-list">
          <MenuItem 
            icon={<Car size={18} />} 
            text="Vehicles" 
            to="/dealsdetails/vehicles"
            active={location.pathname === '/dealsdetails' || location.pathname === '/dealsdetails/vehicles'} 
          />
          <MenuItem 
            icon={<Car size={18} />} 
            text="Active Vehicles" 
            to="/dealsdetails/active-vehicles"
            active={location.pathname === '/dealsdetails/active-vehicles'} 
          />
          <MenuItem 
            icon={<Car size={18} />} 
            text="Driver Verification" 
            to="/dealsdetails/driver-verification"
            active={location.pathname === '/dealsdetails/driver-verification'} 
          />
          <MenuItem 
            icon={<Car size={18} />} 
            text="User Verification" 
            to="/dealsdetails/user-verification"
            active={location.pathname === '/dealsdetails/user-verification'} 
          />
          <MenuItem 
            icon={<DollarSign size={18} />} 
            text="Payments" 
            to="/dealsdetails/payments"
            active={location.pathname === '/dealsdetails/payments'} 
          />
        </ul>
      </div>

      <div className="sidebar-footer">
        <ul className="menu-list">
          <MenuItem 
            icon={<LogOut size={18} />} 
            text="Logout" 
            to="/logout"
            active={location.pathname === '/logout'} 
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;