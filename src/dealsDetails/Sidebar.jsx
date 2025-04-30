import React from 'react';
import { Car, Mail, BookOpen, CarFront, Tag as PriceTag, Calendar, CheckSquare, UserRound, Receipt, Palette, Users, Table2, Settings, LogOut, X } from 'lucide-react';
import './Sidebar.css';

const MenuItem = ({ icon, text, active }) => {
  return (
    <li className={`menu-item ${active ? 'active' : ''}`}>
      <a href="#" className="menu-link">
        <span className="menu-icon">{icon}</span>
        <span>{text}</span>
      </a>
    </li>
  );
};

const Sidebar = ({ isOpen = true, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h1 className="sidebar-title">drifty</h1>
        <button onClick={onClose} className="close-button">
          <X size={24} />
        </button>
      </div>

      <div className="sidebar-content">
        <ul className="menu-list">
          <MenuItem icon={<Car size={18} />} text="Vehicles" active />
          <MenuItem icon={<Car size={18} />} text="Company vehical" />
          <MenuItem icon={<Car size={18} />} text="Customer Vehical" />
          <MenuItem icon={<Mail size={18} />} text="Inbox" />
          <MenuItem icon={<BookOpen size={18} />} text="Booking Lists" />
          <MenuItem icon={<CarFront size={18} />} text="Parked Vehical" />
        </ul>

        <div className="section-title">
          PAGES
        </div>

        <ul className="menu-list">
          <MenuItem icon={<PriceTag size={18} />} text="Pricing" />
          <MenuItem icon={<Calendar size={18} />} text="Calender" />
          <MenuItem icon={<CheckSquare size={18} />} text="To-Do" />
          <MenuItem icon={<UserRound size={18} />} text="Contact" />
          <MenuItem icon={<Receipt size={18} />} text="Invoice" />
          <MenuItem icon={<Palette size={18} />} text="UI Elements" />
          <MenuItem icon={<Users size={18} />} text="Team" />
          <MenuItem icon={<Table2 size={18} />} text="Table" />
        </ul>
      </div>

      <div className="sidebar-footer">
        <ul className="menu-list">
          <MenuItem icon={<Settings size={18} />} text="Settings" />
          <MenuItem icon={<LogOut size={18} />} text="Logout" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;