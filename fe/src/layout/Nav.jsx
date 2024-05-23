import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Nav.scss"
function Nav() {
  return (
    <div>
    <nav className='nav'>
        <div className="logo"><img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png" alt="" /></div>
        <ul className='items'>
          <li className='list'>
            <Link to="/" className='item'>Home</Link>
          </li>
          <li className='list'>
            <Link to="/add" className='item'>add</Link>
          </li>
          
        </ul>
        <ul className='items'>
        <li className='list'>
            <Link to="/basket" className='item'><i className="fa-solid fa-cart-shopping"></i></Link>
          </li>
          <li className='list'>
            <Link to="/wishlist" className='item wish'>wishlist</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
