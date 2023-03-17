
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service">
          <h3>Regular Maintenance Cleaning</h3>
          <p>
            Our regular maintenance cleaning service includes dusting, vacuuming, and general tidying to keep your home looking its best.
          </p>
        </div>
        <div className="service">
          <h3>Deep Cleaning</h3>
          <p>
            Our deep cleaning service tackles areas that require extra attention, such as grout, baseboards, and interior windows.
          </p>
        </div>
        <div className="service">
          <h3>Move-in/Move-out Cleaning</h3>
          <p>
            Our move-in/move-out cleaning service helps prepare your property for new tenants, ensuring it's clean and welcoming.
          </p>
        </div>
        <div className="service">
          <h3>Specialty Services</h3>
          <p>
            Our specialty services include carpet cleaning, window washing, and more to keep every aspect of your home sparkling clean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

