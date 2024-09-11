// src/components/Navbar.js
import React from 'react';
import { FaPaw } from 'react-icons/fa'; // Icon for the logo
import './Nav.css'; // External CSS for styling

function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <FaPaw className="paw-icon" />
                    <h1 className="brand-title">Paws & Bubbles</h1>
                </div>
                <ul className="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                </ul>
                <div className="nav-cta">
                    <a href="#book-now" className="btn-primary">Book Now</a>
                </div>
            </nav>

            <section className="header-content">
                <h2>Welcome to Paws & Bubbles</h2>
                <p>Your pet deserves the best grooming experience, and we're here to deliver it!</p>
                <a href="#learn-more" className="btn-secondary">Learn More</a>
            </section>
        </header>
    );
}

export default Navbar;
