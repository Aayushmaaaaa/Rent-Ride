import React from 'react';
import { Upload, User, Phone, AlertCircle } from 'lucide-react';
import './ProfileSettings.css';
import kycImage from './kyc-illustration.png'; // save uploaded image in your src and import

const ProfileSettings = () => {
  return (
    <div className="profile-settings-container">
      <h1 className="verify-title">Verify Your Identity</h1>
      <div className="kyc-image-wrapper">
        <img src={kycImage} alt="KYC" className="kyc-image" />
      </div>

      <div className="verification-form">
        <h2 className="form-heading">Please Submit the following Document</h2>

        <div className="form-block">
          <div className="form-group">
            <label>
              <User size={18} className="input-icon" /> Enter Full Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your full name as per ID"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>
              <Phone size={18} className="input-icon" /> Phone Number
            </label>
            <input 
              type="tel" 
              placeholder="Enter your active phone number"
              className="form-input"
            />
          </div>

          <div className="license-upload-section">
            <div className="upload-header">
              <div className="upload-icon">
                <Upload size={24} />
              </div>
              <div>
                <h3>Upload a License Photo</h3>
                <p>Please make sure the image matches your ID</p>
              </div>
            </div>

            <div className="upload-area">
              <input 
                type="file" 
                id="license-upload" 
                accept="image/*" 
                className="file-input"
                hidden
              />
              <label htmlFor="license-upload" className="upload-label">
                Click or drag image here to upload
              </label>
            </div>

            <div className="upload-note">
              <AlertCircle size={20} className="note-icon" />
              <p>Uploading a license photo is optional. It is only required if you intend to drive the booked car or become a listed driver.</p>
            </div>
          </div>
        </div>

        <button className="confirm-button">
          Confirm Identity
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;