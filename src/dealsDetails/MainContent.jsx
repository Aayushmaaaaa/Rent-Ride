import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleTable from './VehicleTable';
import AddCarModal from './AddCarModal';
import Sidebar from './Sidebar';
import Nav from './Nav';
import './MainContent.css';

const MainContent = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleGoToDriverVerification = () => {
    console.log("Driver Verification button clicked");
    navigate('/driver-verification');
  };

  const handleGoToProfileSettings = () => {
    console.log("Settings button clicked");
    navigate('/profile-settings');
  };

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
            <button
              onClick={handleGoToDriverVerification}
              className="driver-verification-button"
            >
              Driver Verification
            </button>
            {/* Add a button to go to Profile Settings */}
            <button
              onClick={handleGoToProfileSettings}
              className="settings-button" // You can style this in MainContent.css
            >
              Settings
            </button>
          </div>

          <VehicleTable />
          <AddCarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;