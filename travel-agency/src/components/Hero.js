import React from 'react';
import heroImg from '../assets/images/sigiriya.png'; 

const Hero = () => {
  return (
    <section 
      className="hero" 
      id="home"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroImg})` 
      }}
    >
      <div className="container">
        <h1>Explore Sri Lanka</h1>
        <p>Experience the Pearl of the Indian Ocean.</p>
        <button className="btn">Book Your Trip</button>
      </div>
    </section>
  );
};

export default Hero;