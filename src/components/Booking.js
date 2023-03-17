
import React from 'react';
import './Booking.css';

const Booking = () => {
  return (
    <div className="booking">
      <h2>Book a Cleaning Service</h2>
      <form className="booking-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="service">Service:</label>
        <select id="service" name="service">
          <option value="regular">Regular Maintenance Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="move">Move-in/Move-out Cleaning</option>
          <option value="specialty">Specialty Services</option>
        </select>

        <label htmlFor="date">Preferred Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Preferred Time:</label>
        <input type="time" id="time" name="time" required />

        <label htmlFor="notes">Additional Notes:</label>
        <textarea id="notes" name="notes"></textarea>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;

