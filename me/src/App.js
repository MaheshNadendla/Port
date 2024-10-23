import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import './App.css'; // Import the CSS

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="spooky-bg">
        <Home />
        {/* Bat Container with 3D movement */}
        <div className="bat-container">
          {/* Render multiple bats */}
          <div className="bat">
          <img src="./images/bat.png" alt="Flying Bat" />
          </div>
          <div className="bat">
            <img src="./images/bat.png" alt="Flying Bat" />
          </div>
          <div className="bat">
            <img src="./images/bat.png" alt="Flying Bat" />
          </div>
          <div className="bat">
          <img src="./images/bat.png" alt="Flying Bat" />
          </div>
          <div className="bat">
            <img src="./images/bat.png" alt="Flying Bat" />
          </div>
          <div className="bat">
            <img src="./images/bat.png" alt="Flying Bat" />
          </div>
        </div>
      </div>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
