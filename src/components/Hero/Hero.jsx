import React from "react";
import "./Hero.css";
import profile_img from "../../assets/portfolio.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="hero-content"
      >
        <h1>
          <span>Hi, I'm Sasher Gurung </span>Front-end Developer
        </h1>
        <p>
          Frontend Developer specializing in building responsive, accessible,
          and high-performance user interfaces using modern web technologies.
        </p>
        <div className="hero-action">
          <a href="mailto:sashergrg602@gmail.com" className="hero-connect">
            Connect With Me
          </a>

          <a href="/personal-portfolio/resume.pdf" target="_blank" className="hero-resume">
            My Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="hero-image"
      >
        <img src={profile_img} alt="" />
      </motion.div>
    </section>
  );
}

export default Hero;
