import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='navbar'>
            <img src="" alt="" width="130"/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <button> Get Started </button>
        </nav>
  )
}

export default Navbar