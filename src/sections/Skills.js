import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Animation library
import "../styles/skills.css";

const skills = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Component-based UI library for building interactive web apps.",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Dynamic programming language used for web development.",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    description:
      "Java framework for building scalable and production-ready apps.",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    description: "React UI framework for building responsive web designs.",
  },
  {
    name: "Hibernate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
    description: "Object-relational mapping framework for Java applications.",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "NoSQL database for flexible and scalable data storage.",
  },
];

const Skills = () => {
  return (
    <Box className="skills-section">
      <Typography variant="h3" className="skills-title">
        Skills
      </Typography>
      <Box className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="skill-card-inner">
              {/* Front Side */}
              <div className="skill-card-front">
                <img src={skill.logo} alt={skill.name} className="skill-icon" />
                <Typography variant="h6" className="skill-name">
                  {skill.name}
                </Typography>
              </div>

              {/* Back Side */}
              <div className="skill-card-back">
                <Typography variant="body2" className="skill-description">
                  {skill.description}
                </Typography>
              </div>
            </div>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
