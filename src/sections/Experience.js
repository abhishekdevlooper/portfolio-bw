import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";

const experience = {
  title: "Software Engineer (Development and Cloud)",
  duration: "2023 - Present",
  description: [
    "Built 5+ microservices (Spring Boot, Hibernate), improving backend performance by 25%.",
    "Developed 15+ REST APIs, reducing response time by 30%.",
    "Implemented CI/CD pipelines (Jenkins, Docker, Kubernetes), cutting deployment time by 30%.",
    "Optimized PostgreSQL queries, reducing execution time by 20%.",
    "Developed React.js dashboards for 6000+ users, enhancing visualization.",
    "Strengthened security using JWT and OAuth2, improving compliance.",
    "Reduced UI rendering time by 15% through React performance optimizations.",
  ],
};

function Experience() {
  return (
    <section id="experience" className="experience-single">
      <h2 className="section-title">Experience</h2>

      <motion.div
        className="experience-card"
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h3>{experience.title}</h3>
        <span>{experience.duration}</span>
        <ul>
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Experience;
