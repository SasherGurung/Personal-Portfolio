import React from "react";
import "./Hero.css";
import profile_img from "../../assets/portfolio.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
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

          <a href="/resume.pdf" target="_blank" className="hero-resume">
            My Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile_img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
