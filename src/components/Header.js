
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Sparkle Home Cleaning</div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
          </li>
          <li>
            <NavLink to="/booking" activeClassName="active">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" activeClassName="active">Testimonials</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
