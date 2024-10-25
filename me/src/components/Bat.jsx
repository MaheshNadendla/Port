import React from 'react';
import '../App.css';

const BatMatrix = ({ showBats }) => {
  const rows = 25; // Number of rows of bats
  const cols = 25; // Number of columns of bats
//   const batSize = 120; // Bat size (adjust this as needed)

  return (
    <div className="bat-container">
      {showBats && Array.from({ length: rows }).map((_, rowIndex) =>
        Array.from({ length: cols }).map((_, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="bat"
            style={{
              top: `${(rowIndex / rows) * 100}vh`, // Spread bats across the screen vertically
              left: `${(colIndex / cols) * 100}vw`, // Spread bats across the screen horizontally
              width: `${ Math.random() * (100 - 50) + 50}px`, // Set bat size
              animationDelay: `${Math.random() * 5}s`, // Random delay for flight animation
            }}
          >
            <img src="images/bat.png" alt="Bat" />
          </div>
        ))
      )}
    </div>
  );
};

export default BatMatrix;
