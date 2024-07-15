import React from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../constant/constant";


const Car = () => {
  const navigate = useNavigate();

  const handleBooking = (car) => {
    navigate("/cardetails", { state: { car: car } });
  };

  return (
    <div>
      <h1 align="center">Cars</h1>
      <div className="car-list">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} onBook={handleBooking} />
        ))}
      </div>
    </div>
  );
};

export default Car;
