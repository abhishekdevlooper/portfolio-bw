import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";

const experiences = [
  {
    title: "Software Developer - Tech Mahindra",
    duration: "2022 - Present",
    description:
      "Developed automation and full-stack solutions for British Telecom (BT). Built scalable applications using Java, React, and automation frameworks.",
  },
  {
    title: "Intern - Tech Mahindra",
    duration: "2021 - 2022",
    description:
      "Worked on automation testing and backend development. Gained hands-on experience with Selenium, Java, and Spring Boot.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-item"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <h4 className="duration">{exp.duration}</h4>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
