import React from "react";
import { Route, Routes } from "react-router-dom";
import CarDetails from "../pages/CarDetails";
import Car from "../pages/Car";
import PaymentPage from "../pages/PaymentPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "../components/UserList";



const Routers = () => {
  return (
    <Routes>
      <Route path="/carlist" element={<UserList />} />
      <Route path="/cardetails" element={<CarDetails />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default Routers;