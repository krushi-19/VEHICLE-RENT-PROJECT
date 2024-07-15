import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { Home } from "./components/Home";
import LoginForm from "./components/LoginForm";
import { NavigationBar } from "./components/NavigationBar";
import RegistrationForm from "./components/RegistrationForm";
import UserUpdateForm from "./components/UserUpdateForm";
import {
  AboutUs_Route,
  Contactus_Route,
  LoginForm_Route,
  ROUTE,
  RegistrationForm_Route,
} from './router/AppRouter';
import Car from "./pages/Car";
import CarDetails from "./pages/CarDetails";
import PaymentPage from "./pages/PaymentPage";
import UserList from "./components/UserList"; 

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={ROUTE.BASE} element={<Home />} />
        <Route path={ROUTE.CARLIST} element={<Car />} />
        <Route path={AboutUs_Route} element={<AboutUs />} />
        <Route path={LoginForm_Route} element={<LoginForm />} />
        <Route path={RegistrationForm_Route} element={<RegistrationForm />} />
        <Route path={Contactus_Route} element={<ContactUs />} />
        <Route path={ROUTE.CAR_DETAILS} element={<CarDetails />} />
        <Route path={ROUTE.PAYMENT} element={<PaymentPage />} />
        <Route path="/users" element={<UserList />} /> 
        <Route path="/users/:id/edit" element={<UserUpdateForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
