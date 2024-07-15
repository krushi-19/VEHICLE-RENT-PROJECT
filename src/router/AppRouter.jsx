import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Car from "../pages/Car";
import CarDetails from "../pages/CarDetails";
import PaymentPage from "../pages/PaymentPage";
import UserList from '../components/UserList';
import { Home } from "../components/Home";


// export const BASE_Route = '/';
// export const CarCard_Route = '/carlist';
// export const CarDetails_Route = '/cardetails';
// export const Payment_Route = '/payment';

export const ROUTE = {
  BASE : '/',
  CARLIST : '/carlist',
  CAR_DETAILS : '/cardetails',
  PAYMENT : '/payment'

}



export const AboutUs_Route = '/aboutus';


export const LoginForm_Route = '/login';
export const RegistrationForm_Route = '/register';
export const Contactus_Route = '/contactus';


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