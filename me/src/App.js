import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; // Ensure these paths are correct
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Bat from './components/Bat'; // Your BatMatrix component

function App() {
  const [showBats, setShowBats] = useState(true); // State to manage bat visibility

  // useEffect(() => {
  //   const showTimer = setTimeout(() => {
  //     setShowBats(true); // Show bats after 10 seconds
  //   }, 100); // 10000 ms = 10 seconds

  //   const hideTimer = setTimeout(() => {
  //     setShowBats(false); // Hide bats after they have been shown for a while
  //   }, 12900); // 15000 ms = 15 seconds (10 seconds + 5 seconds)

  //   return () => {
  //     clearTimeout(showTimer); // Cleanup on unmount
  //     clearTimeout(hideTimer); // Cleanup on unmount
  //   };
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="spooky-bg">
        <Home />
        <Bat showBats={showBats} /> {/* Pass the showBats state as a prop */}
      </div>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
