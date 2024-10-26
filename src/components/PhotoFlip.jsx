import React from 'react';
import './PhotoFlip.css'

function PhotoFlip() {
  return (
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="./images/Profile.png" alt="RandomPic" />
      </div>
      <div class="flip-card-back">
      <img src="./images/MyProfile.png" alt="Mypic" />
      </div>
    </div>
  </div>
  )
}

export default PhotoFlip
