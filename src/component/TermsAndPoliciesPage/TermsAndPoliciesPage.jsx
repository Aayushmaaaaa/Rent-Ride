// src/component/TermsAndPoliciesPage/TermsAndPoliciesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TermsAndPoliciesPage.css'; // Import the CSS file

function TermsAndPoliciesPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/list-your-vehicles'); // Explicitly navigate to the list vehicles page
  };

  return (
    <div className="terms-policies-container">
      <div className="terms-header">
        <h1>Drifty - Terms and Policies</h1>
      </div>
      <div className="terms-content">
        <p>Welcome to Drifty! Please read these Terms and Policies carefully before using our services.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using our services, you agree to be bound by these Terms and Policies.</p>

        <h2>2. User Responsibilities</h2>
        <p>You are responsible for providing accurate information and complying with all applicable laws and regulations.</p>

        <h2>3. Vehicle Listings</h2>
        <p>When listing your vehicle, you must provide accurate details and ensure the vehicle is in safe and roadworthy condition.</p>

        <h2>4. Rental Agreements</h2>
        <p>All rentals are subject to separate agreements between the vehicle owner and the renter.</p>

        <h2>5. Payments</h2>
        <p>Payment terms will be outlined in the rental agreement.</p>

        <h2>6. Limitation of Liability</h2>
        <p>Drifty is not responsible for any damages, losses, or liabilities arising from the use of our services or any rental agreements.</p>

        <h2>7. Privacy Policy</h2>
        <p>Your privacy is important to us. Please refer to our separate Privacy Policy for details on how we collect, use, and protect your information.</p>

        <h2>8. Modifications to Terms</h2>
        <p>Drifty reserves the right to modify these Terms and Policies at any time. We will notify users of any significant changes.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms and Policies shall be governed by and construed in accordance with the laws of Nepal.</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions or concerns about these Terms and Policies, please contact us through our Contact Us page.</p>
      </div>
      <button className="back-button" onClick={handleGoBack}>Back to List Your Vehicles</button>
    </div>
  );
}

export default TermsAndPoliciesPage;