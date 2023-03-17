
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const Navigate = useNavigate();

  const handleBookingClick = () => {
    Navigate('/booking');
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>Sparkle Home Cleaning Services</h1>
        <p>Let us make your home shine!</p>
        <button onClick={handleBookingClick}>Book Now</button>
      </div>
    </div>
  );
};

export default Home;




  