import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = ({ car, existingBookings = [] }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isDateAvailable = (startDate, endDate) => {
    if (!Array.isArray(existingBookings)) {
      return false;
    }
    for (let booking of existingBookings) {
      if (
        (new Date(startDate) >= new Date(booking.startDate) && new Date(startDate) <= new Date(booking.endDate)) ||
        (new Date(endDate) >= new Date(booking.startDate) && new Date(endDate) <= new Date(booking.endDate))
      ) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !licenseNo || !startDate || !endDate) {
      setError('All fields are required.');
      return;
    }
    if (age < 18) {
      setError('You must be at least 18 years old to book a car.');
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setError('Start date should not be later than end date.');
      return;
    }
    if (!isDateAvailable(startDate, endDate)) {
      setError('Selected dates are not available.');
      return;
    }
    setError('');
    navigate('/payment', { state: { car, booking: { startDate, endDate, name, age, licenseNo } } });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Driving License Number</label>
        <input
          type="text"
          className="form-control"
          value={licenseNo}
          onChange={(e) => setLicenseNo(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Start Date</label>
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          className="form-control"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-msg">{error}</p>}
      <button type="submit" className="btn btn-primary">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;