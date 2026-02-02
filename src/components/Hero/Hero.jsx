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
          <div className="hero-connect">Connect With me</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile_img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
