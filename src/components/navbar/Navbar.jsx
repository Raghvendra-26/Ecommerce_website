import React from 'react'
import './navbar.scss'
import logo from '../../assets/crown.svg';
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='navbar'>
        <Link className='logo-container' to="/">
            <img src={logo} alt="logo" className='logo'/>
        </Link>

        <div className="options">
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
        </div>
    </div>
  )
}

export default Navbar