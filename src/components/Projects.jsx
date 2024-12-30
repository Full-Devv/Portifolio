import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    { id: 1, title: "Project 1", image: "/assets/project1.jpg" },
    { id: 2, title: "Project 2", image: "/assets/project2.jpg" },
    { id: 3, title: "Project 3", image: "/assets/project3.jpg" },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-gallery">
        {projectList.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.image} alt={project.title} />
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
