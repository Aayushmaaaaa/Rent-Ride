import React from 'react';
import './PaymentPage.css';
import paymentIllustration from '../../assets/payment-illustration.png';
import cardIcon from '../../assets/card-icon.png';
import esewaIcon from '../../assets/esewa-icon.png';
import khaltiIcon from '../../assets/khalti-icon.png';
import visaIcon from '../../assets/visa-icon.png';
import { useNavigate, useParams } from 'react-router-dom';

function PaymentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEsewaClick = () => {
    navigate(`/payment/${id}/booking`);
  };

  const handleCardPayment = () => {
    // Implement your actual card payment processing logic here.
    // This is a placeholder.
    console.log('Processing card payment for vehicle ID:', id);
    // After successful card payment, navigate to the order confirmation page.
    navigate('/order-confirmed');
  };

  return (
    <div className="payment-container">
      <div className="payment-left">
        <div className="payment-details-header">Payment Details</div>
        <p className="payment-details-description">Complete your payment to finalize your order.</p>

        <div className="payment-illustration-container">
          <img src={paymentIllustration} alt="Payment Illustration" />
        </div>

        <div className="terms-policy">
          <h2>Terms & Policies</h2>
          <p>
            By proceeding with this payment, you agree to our <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Your transaction is secured with industry-standard encryption, and we do not store your sensitive card details. For any payment-related inquiries, please contact our support team.
          </p>
        </div>
      </div>

      <div className="payment-right">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-progress">
            <span className="step active">Rent</span>
            <span className="separator">-</span>
            <span className="step">Review</span>
            <span className="separator">-</span>
            <span className="step">Book</span>
          </div>

          <div className="payment-methods">
            <div className="payment-method active">
              <img src={cardIcon} alt="Card" />
              <span>Card</span>
            </div>

            <div
              className="payment-method"
              onClick={handleEsewaClick}
              style={{ cursor: 'pointer' }}
            >
              <img src={esewaIcon} alt="eSewa" />
              <span>eSewa</span>
            </div>

            <div className="payment-method">
              <img src={khaltiIcon} alt="Khalti" />
              <span>Khalti</span>
            </div>
          </div>

          <div className="card-form">
            <div className="form-group full-width">
              <label htmlFor="cardNumber">Card number</label>
              <input type="text" id="cardNumber" placeholder="1234 5678 1234 5678" />
              <img src={visaIcon} alt="Visa/Mastercard" className="card-type-icon" />
            </div>
            <div className="form-group inline">
              <label htmlFor="expiry">Expiry</label>
              <input type="text" id="expiry" placeholder="MM / YY" />
            </div>
            <div className="form-group inline">
              <label htmlFor="cvc">CVC</label>
              <input type="text" id="cvc" placeholder="CVC" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option value="Nepal">Nepal</option>
                {/* Add more countries */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal code</label>
              <input type="text" id="postalCode" placeholder="Postal code" />
            </div>
          </div>

          <button className="confirm-order-button" onClick={handleCardPayment}>Confirm order</button>

          <div className="order-details">
            <div className="detail-item">
              <span>Vehicle:</span>
              <span>Mercedes-Benz (ID: {id})</span>
            </div>
            <div className="detail-item">
              <span>Rental Period:</span>
              <span>1 Day</span>
            </div>
            <div className="detail-item">
              <span>Base Price:</span>
              <span>$300.00</span>
            </div>
            <div className="detail-item">
              <span>Fees:</span>
              <span>$20.00</span>
            </div>
            <div className="detail-item total">
              <span>Total:</span>
              <span>$320.00</span>
            </div>
          </div>

          <div className="total-amount">
            <span>Total Amount</span>
            <span>$320.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;