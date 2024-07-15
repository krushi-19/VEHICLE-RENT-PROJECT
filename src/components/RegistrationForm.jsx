import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegistrationForm.css';
import { registerUser } from './service/apiService';


const RegistrationForm = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
   navigate('/login');
  };
    const [formData, setFormData] = useState({
        fullName: 'm',
        email: 'm@email.com',
        password: '123456',
        confirmPassword: '123456',
        phoneNumber: '9876543210',
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        const inputValue = type === 'file' ? files[0] : value;
        setFormData({ ...formData, [name]: inputValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // const formDataWithFile = {};
            // for (const key in formData) {
            //     formDataWithFile.append(key, formData[key]);
            // }

            try {
                 console.log('User  formDataWithFile:', formData);
                const data = await registerUser(formData);
                console.log('User registered:', data);
                // navigate('/login');
              } catch (error) {
                console.error('Error registering user:', error);
              }
            }
          };

    const validateForm = () => {
        let valid = true;
        const errors = { ...formErrors };

        if (formData.fullName.trim() === '') {
            errors.fullName = 'Full Name is required';
            valid = false;
        } else {
            errors.fullName = '';
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
            valid = false;
        } else {
            errors.email = '';
        }

        if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            valid = false;
        } else {
            errors.password = '';
        }

        if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Passwords do not match';
            valid = false;
        } else {
            errors.confirmPassword = '';
        }

        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            errors.phoneNumber = 'Invalid phone number';
            valid = false;
        } else {
            errors.phoneNumber = '';
        }

        // if (!formData.idProof) {
        //     errors.idProof = 'ID Proof is required';
        //     valid = false;
        // } else {
        //     errors.idProof = '';
        // }

        setFormErrors(errors);
        return valid;
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2 style={{ color: 'green', fontSize: '40px' }}>Register for Vehicle Renting</h2>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                    <span className="error-message">{formErrors.fullName}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <span className="error-message">{formErrors.email}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <span className="error-message">{formErrors.password}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                    />
                    <span className="error-message">{formErrors.confirmPassword}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                    <span className="error-message">{formErrors.phoneNumber}</span>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="idProof">ID Proof</label>
                    <input
                        type="file"
                        id="idProof"
                        name="idProof"
                        accept=".pdf,.jpg,.png"
                        onChange={handleInputChange}
                        required
                    />
                    <span className="error-message">{formErrors.idProof}</span>
                </div> */}
                <div className="center-button">
                <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
