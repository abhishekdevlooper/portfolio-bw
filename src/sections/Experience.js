import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";

const experiences = [
  {
    title: "Software Engineer (Development and Cloud)",
    duration: "2022 - Present",
    description: [
      "Built 5+ microservices (Spring Boot, Hibernate), improving backend performance by 25%.",
      "Developed 15+ REST APIs, reducing response time by 30%.",
      "Implemented CI/CD pipelines (Jenkins, Docker, Kubernetes), cutting deployment time by 30%.",
      "Optimized PostgreSQL queries, reducing execution time by 20%.",
      "Developed React.js dashboards for 6000+ users, enhancing visualization.",
      "Strengthened security using JWT and OAuth2, improving compliance.",
      "Reduced UI rendering time by 15% through React performance optimizations.",
    ],
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
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <h4 className="duration">{exp.duration}</h4>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
