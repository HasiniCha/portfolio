import React from "react";
import "./project.css";

const projects = [
  {
    title: "Reservation Management System",
    description:
      "A full-stack web app for organizational reservations using Agile methodology.",
    tech: "React.js, Redux, ASP.NET Core, MS SQL, Git, Bootstrap",
  },
  {
    title: "Data Structure Visualizer",
    description:
      "An educational tool to visualize data structures and algorithms.",
    tech: "React.js, Spring Boot, PostgreSQL, Git, Bootstrap",
  },
  {
    title: "Quiz App",
    description:
      "A web app to manage and practice quiz questions for learning.",
    tech: "Spring Boot, Angular, HTML, CSS, PostgreSQL",
  },
  {
    title: "E-Commerce Application",
    description: "A full-stack eCommerce application .",
    tech: "Spring Boot, PostgreSQL, React.js, JWT Authentication, Git",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
