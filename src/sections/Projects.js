import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  {
    name: "E-commerce Platform",
    description: "Built an Amazon-like store using React & Spring Boot.",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    name: "Portfolio Website",
    description: "Developed a personal portfolio with animations and MUI.",
    link: "https://github.com/yourusername/portfolio-website",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.a
            className="project-card"
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
