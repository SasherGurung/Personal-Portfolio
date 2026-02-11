import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
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
        <li className="nav-link">
          <a href="#home">Home</a>
        </li>
        <li className="nav-link">
          <a href="#about">About Me</a>
        </li>
        <li className="nav-link">
          <a href="#projects">Portfolio</a>
        </li>
        <li className="nav-link">
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
            <GiHamburgerMenu />
          </button>
        </div>
    </div>
  );
}

export default Navbar;
