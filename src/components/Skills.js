import React from "react";
import { Container } from "react-bootstrap";
import "./Skills.css";

const skills = [
  "JavaScript",
  "React.js",
  "Redux",
  "Spring Boot",
  "Java",
  "C",
  "Git",
  "MS SQL",
  "PostgreSQL",
  "ASP.NET Core",
  "Angular",
  "Docker",
  "React native",
  "Problem-Solving",
];

function Skills() {
  return (
    <section id="Skills">
      <Container>
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
