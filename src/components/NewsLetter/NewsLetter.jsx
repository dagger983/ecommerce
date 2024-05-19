import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1> GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>SUBSCRIBE TO NEWSLETTER AND STAY UPDATED</p>     
           <div>
            <input type="email" placeholder='Enter Your Email ID' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter