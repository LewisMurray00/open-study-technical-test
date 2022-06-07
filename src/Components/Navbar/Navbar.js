import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars, FaShoppingCart } from "react-icons/fa"

const Navbar = () => {

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' >
                    Technical Test
                </Link>

                {/* Div container for the hamburger responsive menu
                <div className='menu-icon' onClick={handleClick}>
                    <p className={click ? <FaTimes className='fa-times' /> : <FaBars className='fa-bars' />} />
                </div> */}


            <ul className='nav-menu'>
                <li>
                    <Link to='shopping-basket' className='nav-links' >
                        <FaShoppingCart />
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar