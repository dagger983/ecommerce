import React from 'react';
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
        <div className="hero-hand-icon">
        <p >New</p>
        <img src={hand_icon} className='herohand' alt="Hand Icon" />
        </div>        
        <p>Collections</p>
        <p>For everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collections
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero Image"className='hero-image' />
      </div>
    </div>
    
  );
}

export default Hero;
