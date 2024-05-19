import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import card_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const[menu,setmenu]= useState("");
  return (
    <div className='Navbar'>
        <div className="Nav-logo">
            <img src={logo}  />
            <p>RATEGLE</p>
        </div>
        <ul className="Nav_menu">
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:"none"}} to="./">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:"none"}} to="/womens">women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:"none"}} to="/mens">men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids">kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav_login_cart">
           <Link to="/login"> <button> Login</button></Link>
           <Link to="/cart"> <img src={card_icon} alt=""  /></Link>
            <div className="nav-cart-count">0</div>
        </div>


    </div>
  )
}
 
export default Navbar