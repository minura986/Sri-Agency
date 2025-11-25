import React from 'react';
import logo from '../assets/images/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        
        <div className="footer-section">
          <div className="logo" style={{ marginBottom: '20px' }}>
            <img src={logo} alt="Sri Agency Logo" />
          </div>
          <p>Experience the Pearl of the Indian Ocean.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: hello@sriagency.com</p>
          <p>Phone: +94 11 234 5678</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook | Instagram | Tiktok</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;