import React, { useState } from 'react';
import './PaymentListing.css';
import Sidebar from './Sidebar';
import Nav from './Nav';

const PaymentListing = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const paymentData = [
    { id: '#VH-1042', owner: 'Pravesh', number: '980000000', submissionDate: '01 May 2025', amount: '$2,000', dealCommission: '$500' },
    { id: '#VH-1041', owner: 'Taklu', number: '9730000000', submissionDate: '30 Apr 2025', amount: '$2,000', dealCommission: '$500' },
    { id: '#VH-1040', owner: 'Vijay Setupati', number: '98777777000', submissionDate: '30 Apr 2025', amount: '$3,000', dealCommission: '$800' },
    { id: '#VH-1039', owner: 'Aayushma', number: '9870000000', submissionDate: '29 Apr 2025', amount: '$3,000', dealCommission: '$800' },
    { id: '#VH-1038', owner: 'Ritesh', number: '9800080000', submissionDate: '29 Apr 2025', amount: '$3,000', dealCommission: '$800' }
  ];

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-content">
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content-area">
          <div className="payment-listing">
            <h1>Payment Listing</h1>

            <div className="payment-stats">
              <div className="stat-card">
                <h2>Total Booking Amount</h2>
                <span className="amount">$89,000</span>
              </div>
              <div className="stat-card">
                <h2>Total Commission Gained</h2>
                <span className="amount">$20,689</span>
              </div>
            </div>

            <div className="payment-table-container">
              <div className="table-scroll">
                <table className="payment-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Owner</th>
                      <th>Number</th>
                      <th>Submission Date</th>
                      <th>Amount</th>
                      <th>Deal Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentData.map((payment) => (
                      <tr key={payment.id}>
                        <td>{payment.id}</td>
                        <td>{payment.owner}</td>
                        <td>{payment.number}</td>
                        <td>{payment.submissionDate}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.dealCommission || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentListing;