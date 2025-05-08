import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure this import exists
import VehicleTable from './VehicleTable';
import AddCarModal from './AddCarModal';
import Sidebar from './Sidebar';
import Nav from './Nav';
import './MainContent.css';

const MainContent = () => {
  const navigate = useNavigate(); // Make sure this line is present
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleGoToDriverVerification = () => {
    navigate('/driver-verification'); // Ensure this path is correct in App.js
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
            {/* Make sure this button is present and the onClick is correct */}
            <button
              onClick={handleGoToDriverVerification}
              className="driver-verification-button"
            >
              Driver Verification
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