import React from "react";
import { Chip, Box, Typography } from "@mui/material";
import { skills } from "../utils/data";
import "../styles/techstack.css";

const TechStack = () => {
  return (
    <Box className="tech-stack">
      <Typography variant="h4">Tech Stack</Typography>
      <Box className="tech-chip-container">
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} className="tech-chip" />
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
