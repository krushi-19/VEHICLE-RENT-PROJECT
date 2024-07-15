import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import './CarDetails.css';

const CarDetails = () => {
  const location = useLocation();
  const car = location.state.car;
  const [existingBookings, setExistingBookings] = useState([]);

  useEffect(() => {
    
    const fetchBookings = async () => {
      
      const bookings = []; 
      setExistingBookings(bookings);
    };
    fetchBookings();
  }, [car.id]);

  return (
    <div className="car-details container">
      <h1 className="my-4">Booking Details</h1>
      <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
      <ul className="car-details-list">
        <li><p><b>Manufacturer:</b> {car.make}</p></li>
        <li><p><b>Model:</b> {car.model}</p></li>
        <li><p><b>Year:</b> {car.year}</p></li>
        <li><p><b>Rate/day:</b> Rs. {car.rate}</p></li>
      </ul>
      <BookingForm car={car} existingBookings={existingBookings} />
    </div>
  );
};

export default CarDetails;