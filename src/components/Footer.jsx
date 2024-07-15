import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h2>Contact Us Information</h2>
                    <p><i className="fa-solid fa-envelope"></i> krushimehta111@gmail.com</p>
                    <p><i className="fa-solid fa-envelope"></i> amittapase@gmail.com</p>
                    <p><i className="fa-solid fa-envelope"></i> mitesh@gmail.com</p>
                    <p><i className="fa-solid fa-map-marker-alt"></i> CDAC Kharghar</p>
                </div>
                <div className="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Vehicle Renting System. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;
