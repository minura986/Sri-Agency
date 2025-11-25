import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/images/Sigiriya.jpeg';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempted for: ${formData.email}`);
  };

  return (
    <div 
      className="auth-container" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImg})` 
      }}
    >
      <div className="auth-card" data-aos="zoom-in">
        <h2>Welcome Back</h2>
        <p>Login to manage your bookings</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={formData.email} 
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              value={formData.password} 
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="btn auth-btn">Login</button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;