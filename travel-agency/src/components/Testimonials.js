import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah J.", text: "The best trip to Sri Lanka I've ever had!", location: "UK" },
    { name: "Mike T.", text: "Professional guides and amazing hotels.", location: "Australia" },
    { name: "Anita R.", text: "Smooth booking process and great support.", location: "India" },
  ];

  return (
    <section className="testimonials" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">What Travelers Say</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {reviews.map((review, index) => (
            <div key={index} style={{ 
              background: '#f9f9f9', 
              padding: '20px', 
              borderRadius: '10px', 
              width: '300px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"{review.text}"</p>
              <h4 style={{ color: '#8B1E3F' }}>{review.name}</h4>
              <span style={{ fontSize: '0.8rem', color: '#666' }}>{review.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;