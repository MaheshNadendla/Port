// About.js
import React from 'react';
import './About.css'; // Ghost animations and zombie hover effects
import PhotoFlip from './PhotoFlip';
import Typejs from './Typejs';

const About = () => {
  return (
    <div id="about" className="about-section " >

      

      <img src="/assets/home-pumpkin.png" alt="hello" className='MainPumpKin' />

      <img src="/assets/about-scare.png" alt="Scare" className='ScarePhoto' />
      <img src="/assets/about-scare.png" alt="Scare" className='ScarePhoto2' />

      

      {/* <img src="/parox/grass.png" alt="Scare" className='Grasses' /> */}




      
      
      <img className='shape__bg' src="shape-bg.png" alt="" />
      <div className="shape__small"></div>
      <div className="shape__big"></div>
      <div className="Heading">
        <h2 className='MainHeading' >About Me</h2>
        <p>Hi, I’m Mahesh, a web developer with a passion for crafting spooky and creative designs.</p>
      </div>
      
      <div className="AboutList">
        <div className="portrait-container">
            Hello Guys
            <Typejs/>
        </div>
        <PhotoFlip/>
      </div>

     
      
    </div>
  );
}

export default About;
