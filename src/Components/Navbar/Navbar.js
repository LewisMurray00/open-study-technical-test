import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars, FaShoppingCart } from "react-icons/fa"

const Navbar = (props) => {

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' >
                    Technical Test
                </Link>

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