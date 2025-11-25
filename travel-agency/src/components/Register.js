import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/images/Sigiriya.jpeg';

const Register = () => {
  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Account created for: ${formData.username}`);
  };

  return (
    <div 
      className="auth-container"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImg})` 
      }}
    >
      <div className="auth-card" data-aos="fade-up">
        <h2>Create Account</h2>
        <p>Join us for exclusive travel deals</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              placeholder="Choose a username" 
              value={formData.username} 
              onChange={handleChange}
              required 
            />
          </div>

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
              placeholder="Create a password" 
              value={formData.password} 
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm your password" 
              value={formData.confirmPassword} 
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="btn auth-btn">Register</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;