import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import logo from '../assets/images/logo.png'; 

const Navbar = () => {
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-stripes">
        <div className="stripe-green"></div>
        <div className="stripe-orange"></div>
      </div>

      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src={logo} alt="Sri Agency Logo" />
        </Link>
        
        <ul className="nav-links">
          <li><span onClick={() => handleScroll('home')}>Home</span></li>
          <li><span onClick={() => handleScroll('services')}>Services</span></li>
          <li><span onClick={() => handleScroll('destinations')}>Destinations</span></li>
          <li><span onClick={() => handleScroll('about')}>About Us</span></li>
        </ul>

        <div className="nav-buttons" style={{ display: 'flex', gap: '10px' }}>
            <Link to="/login">
                <button className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Login</button>
            </Link>
            <Link to="/register">
                <button className="btn" style={{ background: 'transparent', border: '2px solid #FBB03B', color: 'white', padding: '8px 20px', fontSize: '0.9rem' }}>
                    Sign Up
                </button>
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;