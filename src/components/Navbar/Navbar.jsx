import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="navbar">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="logo"
      >
        <span>Sasher Gurung</span>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={showMenu ? "menu-mobile" : "nav-menu"}
      >
        <li className="nav-link" onClick={handleClick}>
          <a href="#home">Home</a>
        </li>
        <li className="nav-link" onClick={handleClick}>
          <a href="#about">About Me</a>
        </li>
        <li className="nav-link" onClick={handleClick}>
          <a href="#projects">Portfolio</a>
        </li>
        <li className="nav-link" onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="nav-contact"
      >
        <a href="#contact">Contact</a>
      </motion.div>
      
      <div className="ham-menu">
        <button onClick={handleMenu}>
          <RxHamburgerMenu color="#c851ff" size={22} background-color="black" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
