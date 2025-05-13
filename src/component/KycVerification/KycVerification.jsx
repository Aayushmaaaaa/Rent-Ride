// import React, { useState, useRef } from "react";
// import "./KycVerification.css";
// import kycImage from "../../assets/kyc-image.png";
// import { useNavigate } from "react-router-dom";

// function KycVerification() {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [licenseImage, setLicenseImage] = useState(null);
//   const fileInputRef = useRef(null); // Ref to access the file input

//   const handleLicenseUploadClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.value = ""; // Reset the file input value
//       fileInputRef.current.click(); // Trigger file selection
//     }
//   };

//   const handleLicenseFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setLicenseImage(file);
//       console.log("License file selected:", file);
//       // Optionally reset the input value after setting the state to allow re-upload
//       if (fileInputRef.current) {
//         fileInputRef.current.value = ""; // Clear the input after selection
//       }
//     }
//   };

//   const handleConfirmClick = () => {
//     navigate("/payment/your_car_id"); // Replace 'your_car_id' with the actual car ID if needed
//   };

//   return (
//     <div className="verification-container">
//       <div className="verification-card">
//         <h1 className="main-title">Verify Your Identity</h1>

//         {/* KYC Illustration */}
//         <div className="illustration-container">
//           <div className="illustration-box">
//             <img
//               src={kycImage}
//               alt="KYC Verification Illustration"
//               className="illustration-image"
//             />
//           </div>
//         </div>

//         <h2 className="section-title">Please Submit the following Document</h2>

//         {/* Form Fields */}
//         <div className="form-group">
//           <label className="input-label">Enter Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             className="input-field"
//           />
//         </div>

//         <div className="form-group">
//           <label className="input-label">Phone Number</label>
//           <input
//             type="text"
//             placeholder="Enter Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             className="input-field"
//           />
//         </div>

//         {/* License Upload Section */}
//         <div className="upload-section">
//           <div className="upload-icon-container">
//             <span className="upload-icon" onClick={handleLicenseUploadClick}>
//               ↑
//             </span>
//           </div>

//           <div className="upload-content">
//             <h3 className="upload-title">Upload a License Photo</h3>
//             <p className="upload-instruction">
//               Please Make sure image Match your id
//             </p>
//             <div className="upload-note-container">
//               <div className="note-label">
//                 <span>Please note</span>
//                 <span className="info-icon">ⓘ</span>
//               </div>
//               <span className="note-text">
//                 Uploading a licence photo is optional. It is only required if
//                 you intend to drive the booked car or become a listed driver.
//               </span>
//             </div>
//             <input
//               type="file"
//               id="license-upload"
//               accept="image/*"
//               style={{ display: "none" }}
//               onChange={handleLicenseFileChange}
//               ref={fileInputRef} // Attach the ref to the file input
//             />
//             {licenseImage && (
//               <div className="image-preview-container">
//                 <p className="upload-confirmation">
//                   License Uploaded: {licenseImage.name}
//                 </p>
//                 <img
//                   src={URL.createObjectURL(licenseImage)}
//                   alt="Uploaded License Preview"
//                   className="image-preview"
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Confirm Button */}
//         <div className="button-container">
//           <button
//             className="confirm-button"
//             onClick={handleConfirmClick}
//             disabled={!licenseImage}
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default KycVerification;

import React, { useState, useRef } from "react";
import "./KycVerification.css";
import kycImage from "../../assets/kyc-image.png";
import { useNavigate } from "react-router-dom";

function KycVerification() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseImage, setLicenseImage] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleLicenseUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const handleLicenseFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLicenseImage(file);
      console.log("License file selected:", file);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleConfirmClick = async () => {
    if (!fullName || !phoneNumber) {
      alert("Please enter your full name and phone number.");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    if (licenseImage) {
      formData.append("licenseImage", licenseImage);
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/kyc/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("KYC submitted successfully!");
        navigate("/payment/your_car_id"); // Replace with actual car ID if needed
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-card">
        <h1 className="main-title">Verify Your Identity</h1>

        <div className="illustration-container">
          <div className="illustration-box">
            <img
              src={kycImage}
              alt="KYC Verification Illustration"
              className="illustration-image"
            />
          </div>
        </div>

        <h2 className="section-title">Please Submit the following Document</h2>

        <div className="form-group">
          <label className="input-label">Enter Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label className="input-label">Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="upload-section">
          <div className="upload-icon-container">
            <span className="upload-icon" onClick={handleLicenseUploadClick}>
              ↑
            </span>
          </div>

          <div className="upload-content">
            <h3 className="upload-title">Upload a License Photo</h3>
            <p className="upload-instruction">
              Please make sure the image matches your ID
            </p>
            <div className="upload-note-container">
              <div className="note-label">
                <span>Please note</span>
                <span className="info-icon">ⓘ</span>
              </div>
              <span className="note-text">
                Uploading a licence photo is optional. It is only required if
                you intend to drive the booked car or become a listed driver.
              </span>
            </div>
            <input
              type="file"
              id="license-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleLicenseFileChange}
              ref={fileInputRef}
            />
            {licenseImage && (
              <div className="image-preview-container">
                <p className="upload-confirmation">
                  License Uploaded: {licenseImage.name}
                </p>
                <img
                  src={URL.createObjectURL(licenseImage)}
                  alt="Uploaded License Preview"
                  className="image-preview"
                />
              </div>
            )}
          </div>
        </div>

        <div className="button-container">
          <button
            className="confirm-button"
            onClick={handleConfirmClick}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default KycVerification;
