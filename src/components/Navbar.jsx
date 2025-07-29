import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar spooky-navbar">
      <div className="nav-left">
        <a href="#home">Home</a>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#skill">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div
        className={`hamburger ${menuOpen ? 'cross' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

