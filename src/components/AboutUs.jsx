import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="heading">
        <h1>About Us</h1>
        <p>
          Welcome to your premier destination for hassle-free transportation
          solutions.
        </p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src={require('../image/AboutUS.jpg')} alt="About Us" />
          </div>
          <div className="about-content">
            <h2>At Your Service</h2>
            <p>
              At Vehicle Renting System, we understand the importance of seamless
              mobility, whether it's for personal or business use. Our commitment is
              to provide top-notch rental services that cater to your specific
              needs, offering a diverse fleet of vehicles ranging from compact cars
              to spacious SUVs and everything in between. With a focus on customer
              satisfaction, convenience, and affordability, we strive to exceed
              expectations with every rental experience. Whether you're exploring a
              new city, embarking on a road trip adventure, or simply need a
              reliable vehicle for your daily commute, trust Vehicle Renting System
              to get you there comfortably and affordably. Join us and experience
              the ease and convenience of renting with confidence.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
