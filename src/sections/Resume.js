import React from "react";
import { Button, Box, Typography } from "@mui/material";
import "../styles/resume.css";

const Resume = () => {
  return (
    <Box className="resume-section">
      <Typography variant="h3">Download My Resume</Typography>
      <Button variant="contained" className="resume-button">
        <a href="/resume.pdf" download="Resume.pdf">
          Download
        </a>
      </Button>
    </Box>
  );
};

export default Resume;
