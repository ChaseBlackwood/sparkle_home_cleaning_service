// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Sparkle Home Cleaning</h1>
      </div>
      <div className={mobileMenuOpen ? 'navbar-menu active' : 'navbar-menu'}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
