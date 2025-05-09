import React, { useState } from 'react';
import './KycVerification.css';
import kycImage from '../../assets/kyc-image.png';
import licenseIcon from '../../assets/license-icon.png';
import passportIcon from '../../assets/passport-icon.png';
import { useNavigate } from 'react-router-dom';

function KycVerification() {
    const navigate = useNavigate();
    const [licenseImage, setLicenseImage] = useState(null);
    const [passportImage, setPassportImage] = useState(null);

    const handleLicenseUploadClick = () => {
        document.getElementById('license-upload').click();
    };

    const handlePassportUploadClick = () => {
        document.getElementById('passport-upload').click();
    };

    const handleLicenseFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLicenseImage(file);
            console.log("License file selected:", file); // You would typically handle the actual upload here
        }
    };

    const handlePassportFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPassportImage(file);
            console.log("Passport file selected:", file); // You would typically handle the actual upload here
        }
    };

    const handleNextClick = () => {
        // In a real application, you would likely want to ensure that both
        // license and passport images have been uploaded before proceeding.
        // For this example, we'll just navigate to the payment page.
        navigate('/payment/your_car_id'); // Replace 'your_car_id' with the actual car ID if needed
    };

    return (
        <div className="kyc-verification-container">
            <h1>Verify Your Identity</h1>
            <img src={kycImage} alt="KYC Verification" className="kyc-image" />
            <h2>Please Submit the following Documents</h2>
            <div className="upload-sections">
                <div className="upload-section">
                    <img src={licenseIcon} alt="License Icon" className="upload-icon" />
                    <div className="upload-text">
                        <h3>Upload a Licence Photo</h3>
                        <p>Please Make sure Image Match your id</p>
                    </div>
                    <button className="upload-button" onClick={handleLicenseUploadClick}>Upload</button>
                    <input
                        type="file"
                        id="license-upload"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleLicenseFileChange}
                    />
                    {licenseImage && <p>License Uploaded: {licenseImage.name}</p>}
                </div>
                <div className="upload-section">
                    <img src={passportIcon} alt="Passport Icon" className="upload-icon" />
                    <div className="upload-text">
                        <h3>Upload a Passport size Photo</h3>
                        <p>Please Make sure Image Match your id</p>
                    </div>
                    <button className="upload-button" onClick={handlePassportUploadClick}>Upload</button>
                    <input
                        type="file"
                        id="passport-upload"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handlePassportFileChange}
                    />
                    {passportImage && <p>Passport Uploaded: {passportImage.name}</p>}
                </div>
            </div>
            <button className="next-button" onClick={handleNextClick} disabled={!licenseImage || !passportImage}>
                Next
            </button>
        </div>
    );
}

export default KycVerification;