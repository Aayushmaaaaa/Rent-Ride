import React from "react";
import { Link } from "react-router-dom";

import logo from "./Images/Logo.png";
import avatar from "./Images/no7.png";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Drifty Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/details">Details</Link>
        <Link to="/about">About Us</Link>
        <Link to="/list">List Your Car</Link>
      </div>
      <div className="navbar-right">
        <img src={avatar} alt="User" className="user-avatar" />
      </div>
    </nav>
  );
}

export default Navbar;
