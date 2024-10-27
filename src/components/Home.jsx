// Home.js
import './Home.css'; // Add custom CSS for glowing text and animations
import {React,useRef, useState,useEffect} from 'react';

const Home = ({ setShowBats, showBats }) => {

  const leftTree = useRef(null);
  const [val,setValue]= useState(0);

  const rightTree = useRef(null);
  const [val2,setValue2]= useState(0);

  const leftGate = useRef(null);
  const [val3,setValue3]= useState(0);

  const rightGate = useRef(null);
  const [val4,setValue4]= useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositionleft = window.scrollY*-0.5;
      setValue(scrollPositionleft);

      if (leftTree.current) {
        leftTree.current.style.left = `${scrollPositionleft}px`;
      }

      const scrollPositionright = window.scrollY*-0.5;
      setValue2(scrollPositionright);

      if (rightTree.current) {
        rightTree.current.style.right = `${scrollPositionright}px`;
      }

      const scrollPositionleftGate = (window.scrollY*0.25)-85;
      setValue3(scrollPositionleftGate);

      if (leftGate.current) {
        leftGate.current.style.left = `${scrollPositionleftGate}px`;
      }

      const scrollPositionrightGate = (window.scrollY*0.25)-105;
      setValue4(scrollPositionrightGate);

      if (rightGate.current) {
        rightGate.current.style.right = `${scrollPositionrightGate}px`;
      }



    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



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
    <>
    
    <img ref={leftTree} src="/parox/tree-left.png" className='leftTree' alt="xyz" />

    <img ref={rightTree} src="/parox/tree-right.png" className='rightTree' alt="xyz" />

    <img ref={leftGate}  src="/parox/gate-left.png" className='leftGate' alt="xyz" />

    <img ref={rightGate}  src="/parox/gate-right.png" className='rightGate' alt="xyz" />

    <div className="home spooky-bg">
      
      
      
      <div className="intro">
        
        <h1 className="glowing-text">Mahesh Nadendla</h1>
        <p className="intro-text">Web Developer & Designer</p>
        <button
          className="cta-btn"
          onClick={toggleAudioAndBats}// Toggle bats and audio
        >
          {showBats ? "Hide the Bats" : "Enter if you dare!"}
        </button>
        <audio id="spooky-audio" src="/audio/BatSound.mp3" loop /> {/* Audio element with direct path */}
      </div>
    </div>
    </>
  );
};

export default Home;
