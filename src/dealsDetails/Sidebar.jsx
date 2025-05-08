import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Mail, BookOpen, CarFront, Tag as PriceTag, Calendar, CheckSquare, UserRound, Receipt, Palette, Users, Table2, Settings, LogOut, X } from 'lucide-react';
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
            icon={<Mail size={18} />} 
            text="Inbox" 
            to="/dealsdetails/inbox"
            active={location.pathname === '/dealsdetails/inbox'} 
          />
          <MenuItem 
            icon={<BookOpen size={18} />} 
            text="Booking Lists" 
            to="/dealsdetails/bookings"
            active={location.pathname === '/dealsdetails/bookings'} 
          />
          <MenuItem 
            icon={<CarFront size={18} />} 
            text="Parked Vehicle" 
            to="/dealsdetails/parked"
            active={location.pathname === '/dealsdetails/parked'} 
          />
        </ul>

        <div className="section-title">
          PAGES
        </div>

        <ul className="menu-list">
          <MenuItem 
            icon={<PriceTag size={18} />} 
            text="Pricing" 
            to="/dealsdetails/pricing"
            active={location.pathname === '/dealsdetails/pricing'} 
          />
          <MenuItem 
            icon={<Calendar size={18} />} 
            text="Calendar" 
            to="/dealsdetails/calendar"
            active={location.pathname === '/dealsdetails/calendar'} 
          />
          <MenuItem 
            icon={<CheckSquare size={18} />} 
            text="To-Do" 
            to="/dealsdetails/todo"
            active={location.pathname === '/dealsdetails/todo'} 
          />
          <MenuItem 
            icon={<UserRound size={18} />} 
            text="Contact" 
            to="/dealsdetails/contact"
            active={location.pathname === '/dealsdetails/contact'} 
          />
          <MenuItem 
            icon={<Receipt size={18} />} 
            text="Invoice" 
            to="/dealsdetails/invoice"
            active={location.pathname === '/dealsdetails/invoice'} 
          />
          <MenuItem 
            icon={<Palette size={18} />} 
            text="UI Elements" 
            to="/dealsdetails/ui-elements"
            active={location.pathname === '/dealsdetails/ui-elements'} 
          />
          <MenuItem 
            icon={<Users size={18} />} 
            text="Team" 
            to="/dealsdetails/team"
            active={location.pathname === '/dealsdetails/team'} 
          />
          <MenuItem 
            icon={<Table2 size={18} />} 
            text="Table" 
            to="/dealsdetails/table"
            active={location.pathname === '/dealsdetails/table'} 
          />
        </ul>
      </div>

      <div className="sidebar-footer">
        <ul className="menu-list">
          <MenuItem 
            icon={<Settings size={18} />} 
            text="Settings" 
            to="/dealsdetails/profile-settings"
            active={location.pathname === '/dealsdetails/profile-settings'} 
          />
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