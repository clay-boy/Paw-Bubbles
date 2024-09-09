// src/Nav.js
import React from 'react';
import './Nav.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">PAW & BUBBLES</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
