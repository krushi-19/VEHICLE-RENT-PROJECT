import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import { loginUser } from './service/apiService';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() === '' && password.trim() === '') {
            setError('Please enter your username and password.');
            return;
        }
        if (username.trim() === '') {
            setError('Please enter your username.');
            return;
        }
        if (password.trim() === '') {
            setError('Please enter your password.');
            return;
        }

        setError('');
        try {
            const response = await loginUser({username, password});
            // handle case 
            // 1. usernname is invalid
            // 2 pass is invaild
            // 3. all data is correct
            setTimeout(() => {
                 setCredentials({ username: '', password: '' });
                 navigate('/carlist');
            }, 3000);
        } catch (error) {
            setError('Login failed. Please check your credentials.');
        }

    };

        

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login Form</h1>
                {error && <p className="error-msg">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div className="register-link">
                    Need an account? <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
