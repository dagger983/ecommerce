import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='Offers'>
        <div className="offers-left">
          <div className='offers-you'>
            <h1 >Exclusive</h1>
            <h1 >Offers For You</h1>
            </div>
            <p>Only On Best Selling Products</p>
            <button>Check Now</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" srcset="" />
            
        </div>
    </div>

  )
}

export default Offers