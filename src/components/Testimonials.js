import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>
            "Sparkle Home Cleaning has been a lifesaver for my family. Their attention to detail and professionalism is unmatched. I highly recommend their services!"
          </p>
          <p className="testimonial-author">- Jane Smith</p>
        </div>
        <div className="testimonial">
          <p>
            "I was impressed with the quality of work and the friendly staff. My home has never looked better! Thank you, Sparkle Home Cleaning!"
          </p>
          <p className="testimonial-author">- John Doe</p>
        </div>
        <div className="testimonial">
          <p>
            "I used Sparkle Home Cleaning for a move-out cleaning, and they did an amazing job. The property was spotless and ready for the next tenant."
          </p>
          <p className="testimonial-author">- Mary Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;