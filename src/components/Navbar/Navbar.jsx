import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><span>Sasher Gurung</span></div>
        <ul className='nav-menu'>
            <li className='nav-link'><a href="#home">Home</a></li>
            <li className='nav-link'><a href="#about">About Me</a></li>
            <li className='nav-link'><a href="#projects">Portfolio</a></li>
            <li className='nav-link'><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-contact"><a href="#contact">Contact</a></div>
    </div>
  )
}

export default Navbar
