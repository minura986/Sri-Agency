import React from 'react';

const Services = () => {
  const services = [
    { title: "Flight Booking", desc: "Best deals on international and domestic flights." },
    { title: "Hotel Reservations", desc: "Luxury stays and comfortable budget accommodations." },
    { title: "Guided Tours", desc: "Experience local culture with our expert guides." },
    { title: "Travel Insurance", desc: "Stay safe and secure during your adventures." }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">Our Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;