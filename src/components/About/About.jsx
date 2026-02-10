import React from "react";
import "./About.css";
import profileImg from "../../assets/portfolio.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/javascript.png";
import reactIcon from "../../assets/react.png";
import gitIcon from "../../assets/git.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="about-title"
      >
        <h2>My Personal Information</h2>
      </motion.div>

      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="profile"
        >
          <img src={profileImg} alt="Profile" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="about-me"
        >
          <h1>About Me</h1>
          <p>
            I am a frontend developer focused on building clean, responsive, and
            accessible web interfaces using modern web technologies. I
            prioritize performance, usability, and maintainable code.
          </p>

          <div className="contact-me">My Resume</div>

          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              <Skill icon={jsIcon} label="JavaScript" />
              <Skill icon={reactIcon} label="React" />
              <Skill icon={htmlIcon} label="HTML" />
              <Skill icon={cssIcon} label="CSS" />
              <Skill icon={gitIcon} label="Git" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Skill = ({ icon, label }) => (
  <div className="skill-card">
    <img src={icon} alt={label} />
    <span>{label}</span>
  </div>
);

export default About;
