import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const { booking, car } = location.state;

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    
    alert('Payment successful!');
  };

  return (
    <div className="payment-page container">
      <h1 className="text-center my-4">Payment for {car.make} {car.model}</h1>
      <h3 className="text-center my-4">Booking Details:</h3>
      <ul className="booking-details-list">
        <li><b>Name:</b> {booking.name}</li>
        <li><b>Age:</b> {booking.age}</li>
        <li><b>Driving License Number:</b> {booking.licenseNo}</li>
        <li><b>Start Date:</b> {booking.startDate}</li>
        <li><b>End Date:</b> {booking.endDate}</li>
      </ul>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            className="form-control"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            className="form-control"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            className="form-control"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;