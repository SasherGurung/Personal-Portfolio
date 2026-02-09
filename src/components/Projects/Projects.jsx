import React from "react";
import "./Projects.css";
import projects from "../../projects.js";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <h1>MY PROJECTS</h1>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}> 
            <div className="project-img">
              <img src={project.img} alt={project.name} />
            </div>

            <div className="project-content">
              <h2>{project.name}</h2>
              <p>{project.description}</p>

              <div className="project-tools">
                {project.tools.map((tool, index) => (
                  <span key={index}>{tool}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
