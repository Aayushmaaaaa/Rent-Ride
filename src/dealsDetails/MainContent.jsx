    // src/dealsDetails/MainContent.jsx
    import React, { useState } from 'react';
    import { Link, Outlet } from 'react-router-dom';
    import VehicleTable from './VehicleTable';
    import AddCarModal from './AddCarModal';
    import Sidebar from './Sidebar';
    import Nav from './Nav';
    import './MainContent.css';

    const MainContent = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);

      return (
        <div className="main-layout">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <div className="main-content">
            <Nav onMenuClick={() => setIsSidebarOpen(true)} />
            <div className="content-area">
              <div className="header">
                <h1 className="page-title">Deals Details</h1>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="add-button"
                >
                  Add Car
                </button>
              </div>

              <div className="navigation-links">
                <Link to="active-vehicles">Active Vehicles</Link>
                <Link to="driver-verification">Driver Verification</Link>
                <Link to="user-verification">User Verification</Link>
                <Link to="payments">Payments</Link>
                {/* Removed Logout Button */}
              </div>

              <VehicleTable />
              <AddCarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              <Outlet />
            </div>
          </div>
        </div>
      );
    };

    export default MainContent;
    