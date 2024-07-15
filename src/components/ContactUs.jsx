import React from "react";
import "./ContactUs.css";
import teamMember1 from "../image/team-member1.jpg";
import teamMember2 from "../image/team-member2.jpg";
import teamMember3 from "../image/team-member3.jpg";


const ContactUs = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="class-row">
          <div className="class-title">
            <h1>
              <u>Contact Us</u>
            </h1>
            <h2>
              Welcome to our vehicle renting system! At our company, we are
              dedicated to providing you with the best rental experience
              possible.
            </h2>
          </div>
          <div className="team-card">
            <div className="card">
              <div className="image-section">
                <img src={teamMember1} alt="Team Member 1" />
              </div>
              <div className="content">
                <h3>Krushi Mehta</h3>
                <h4>Email - krushimehta111@gmail.com</h4>
              </div>
            </div>
            <div className="card">
              <div className="image-section">
                <img src={teamMember2} alt="Team Member 2" />
              </div>
              <div className="content">
                <h3>Amit Tapase</h3>
                <h4>Email - amittapase007@gmail.com</h4>
              </div>
            </div>
            <div className="card">
              <div className="image-section">
                <img src={teamMember3} alt="Team Member 3" />
              </div>
              <div className="content">
                <h3>Mitesh Kambli</h3>
                <h4>Email - kamblimitesh@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
