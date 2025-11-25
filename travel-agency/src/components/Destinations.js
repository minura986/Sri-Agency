import React from 'react';

import img1 from '../assets/images/ella.jpg';
import img2 from '../assets/images/galle.jpg';
import img3 from '../assets/images/kandy.jpg';
import img4 from '../assets/images/mirissa.jpg';
import img5 from '../assets/images/Sigiriya.jpeg';
import img6 from '../assets/images/Nuwara Eliya.jpg';
import img7 from '../assets/images/Yala.jpg';
import img8 from '../assets/images/Arugam Bay.jpg';

const Destinations = () => {
  const items = [
    { name: "Sigiriya", desc: "Ancient rock fortress", image: img5 },
    { name: "Ella", desc: "Scenic mountain views", image: img1 },
    { name: "Galle Fort", desc: "Historic dutch fort", image: img2 },
    { name: "Mirissa", desc: "Whale watching & beaches", image: img4 },
    { name: "Kandy", desc: "Temple of the Tooth", image: img3 },
    { name: "Nuwara Eliya", desc: "Little England", image: img6 },
    { name: "Yala", desc: "Wildlife safari park", image: img7 },
    { name: "Arugam Bay", desc: "Surfing paradise", image: img8 },
  ];

  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Top Destinations in Sri Lanka</h2>
        <div className="gallery-grid">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="destination-card"
              data-aos="zoom-in" 
              data-aos-delay={index * 50} 
            >
              <img src={item.image} alt={item.name} />
              <div className="destination-overlay">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;