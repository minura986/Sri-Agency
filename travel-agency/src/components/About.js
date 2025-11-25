import React from 'react';

import aboutImg from '../assets/images/Sigiriya.jpeg'; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          
          <div className="about-image" data-aos="fade-right">
            <img src={aboutImg} alt="About Sri Agency" />
          </div>

          <div className="about-text" data-aos="fade-left">
            <h2 className="section-title" style={{textAlign: 'left'}}>About Us</h2>
            <p className="highlight-text">
              We are your gateway to the Pearl of the Indian Ocean.
            </p>
            <p>
              At <strong>SRI AGENCY</strong>, we believe travel is more than just visiting places; 
              it's about the memories you make and the people you meet. With over 10 years of 
              experience in the Sri Lankan tourism industry, we curate personalized journeys 
              that showcase the authentic beauty of our island.
            </p>
            <p>
              From the misty hills of Ella to the pristine beaches of Mirissa, our local 
              guides are passionate about sharing hidden gems that you won't find in guidebooks.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <h3>10+</h3>
                <span>Years</span>
              </div>
              <div className="stat-item">
                <h3>5k+</h3>
                <span>Happy Travelers</span>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <span>Destinations</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;