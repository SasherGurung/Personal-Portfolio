import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projects from "../../projects.js";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <h1>MY PROJECTS</h1>
      </div>
      <div>
        
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.img} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
