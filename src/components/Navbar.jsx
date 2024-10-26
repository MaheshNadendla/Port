import React from 'react';
import './Navbar.css'; // Include spooky CSS effects

const Navbar = () => {
  return (
    <nav className="navbar spooky-navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
