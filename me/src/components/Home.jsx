// Home.js
import './Home.css'; // Add custom CSS for glowing text and animations
import React from 'react';

const Home = ({ setShowBats, showBats }) => {
  // Function to play or pause audio
  const toggleAudioAndBats = () => {
    setShowBats(!showBats); // Toggle the bats

    const audioElement = document.getElementById('spooky-audio');
    if (showBats) {
      audioElement.pause();
      audioElement.currentTime = 0;
    } else {
      audioElement.play();
    }
  };

  return (
    <div className="home spooky-bg">
      <div className="intro">
        <h1 className="glowing-text">Mahesh Nadendla</h1>
        <p className="intro-text">Web Developer & Designer</p>
        <button
          className="cta-btn"
          onClick={toggleAudioAndBats} // Toggle bats and audio
        >
          {showBats ? "Hide the Bats" : "Enter if you dare!"}
        </button>
        <audio id="spooky-audio" src="/audio/BatSound.mp3" loop /> {/* Audio element with direct path */}
      </div>
    </div>
  );
};

export default Home;
