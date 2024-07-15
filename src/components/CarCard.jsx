import React from "react";
import "./CarCard.css"; 

const CarCard = ({ car, onBook }) => {
  if (!car || !car.image) {
    return <div>No image available</div>;
  }

  return (
    <div className="car-card">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="car-image"
      />
      <div className="car-details">
        <h3>
          {car.make} {car.model}
        </h3>
        <p><b>Year:</b> {car.year}</p>
        <p><b>Rate/day:</b> Rs {car.price}</p>
        <button className="book-button" onClick={() => onBook(car)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
