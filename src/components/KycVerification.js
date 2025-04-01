

import React from 'react';
import './KycVerification.css';
import kycImage from '../assets/kyc-image.png';
import licenseIcon from '../assets/license-icon.png';
import passportIcon from '../assets/passport-icon.png';

function KycVerification() {
    return (
        <div className="kyc-verification-container">
            <h1>Verify Your Identity</h1>
            <img src={kycImage} alt="KYC Verification" className="kyc-image" />
            <h2>Please Submit the following Document</h2>
            <div className="upload-sections"> {/* New container */}
                <div className="upload-section">
                    <img src={licenseIcon} alt="License Icon" className="upload-icon" />
                    <div className="upload-text">
                        <h3>Upload a Licence Photo</h3>
                        <p>Please Make sure Image Match your id</p>
                    </div>
                    <button className="upload-button">Upload</button>
                </div>
                <div className="upload-section">
                    <img src={passportIcon} alt="Passport Icon" className="upload-icon" />
                    <div className="upload-text">
                        <h3>Upload a Passport size Photo</h3>
                        <p>Please Make sure Image Match your id</p>
                    </div>
                    <button className="upload-button">Upload</button>
                </div>
            </div>
        </div>
    );
}

export default KycVerification;