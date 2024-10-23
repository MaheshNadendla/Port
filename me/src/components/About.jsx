// About.js
import React from 'react';
import './About.css'; // Ghost animations and zombie hover effects

const About = () => {
  return (
    <div id="about" className="about-section">
      <h2>About Me</h2>
      <p>Hi, I’m Mahesh, a web developer with a passion for crafting spooky and creative designs.</p>
      <div className="portrait-container">
        <img className="portrait" src="yourImage.jpg" alt="Mahesh" />
      </div>
    </div>
  );
}

export default About;
