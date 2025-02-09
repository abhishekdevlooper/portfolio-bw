import React from "react";
import { Box, Typography, Avatar, Chip } from "@mui/material";
import { motion } from "framer-motion"; // Animation library
import "../styles/skills.css";

const skills = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Hibernate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
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
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Chip
              label={skill.name}
              avatar={<Avatar src={skill.logo} className="skill-avatar" />}
              className="skill-chip"
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
