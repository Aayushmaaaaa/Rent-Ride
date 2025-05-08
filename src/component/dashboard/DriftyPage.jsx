// src/component/dashboard/DriftyPage.jsx
import React from 'react';
import './DriftyPage.css'; // Create a CSS file for this page

function DriftyPage() {
  return (
    <div className="drifty-page-container">
      <div className="dashboard-navigation">
        <button className="nav-button active">My Vehicles</button>
        <button className="nav-button">Bookings</button>
        <button className="nav-button">Documents</button>
        <button className="nav-button">Earning's</button>
      </div>

      <div className="dashboard-content">
        {/* Your "My Vehicles" table and content from the screenshot */}
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Type</th>
              <th>Seats</th>
              <th>Gear-Type</th>
              <th>AC</th>
              <th>Rate/Day</th>
              <th>Car Number</th>
              <th>Phone Number</th>
              <th>Booking Type</th>
              <th>Driver Name</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="..." alt="Vehicle" style={{ width: '50px', height: 'auto' }} /></td>
              <td>Toyota</td>
              <td>Sedan</td>
              <td>5</td>
              <td>Automatic</td>
              <td>Yes</td>
              <td>Rs 3,000</td>
              <td>BA1354</td>
              <td>9840999999</td>
              <td>With Driver</td>
              <td>Pravesh Lama</td>
              <td><button>View</button></td>
              <td>Pending</td>
            </tr>
            {/* ... more rows ... */}
          </tbody>
        </table>

        <div className="add-car-section">
          <button>Add Car</button>
        </div>

        <div className="vehicle-documents-section">
          <h2>Vehicle Documents & Images</h2>
          <div className="documents-grid">
            {/* ... display your document images as in the screenshot ... */}
            <div className="document-item">
              <img src="..." alt="Vehicle Front" style={{ maxWidth: '150px', height: 'auto' }} />
              <p>Vehicle Front View</p>
            </div>
            {/* ... other document images ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriftyPage;