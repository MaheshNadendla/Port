// Home.js
import React from 'react';
import './Home.css'; // Add custom CSS for glowing text and animations

const Home = () => {
  return (
    <div className="home spooky-bg">
      <div className="intro">
        <h1 className="glowing-text">Mahesh Nadendla</h1>
        <p className="intro-text">Web Developer & Designer</p>
        <a href="#portfolio" className="cta-btn">Enter if you dare!</a>
      </div>
    </div>
  );
}

export default Home;
