import React from "react";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/resume.css";

const Resume = () => {
  return (
    <motion.div
      className="resume-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Typography variant="h3" className="resume-title">
        Download My Resume
      </Typography>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <Button variant="contained" className="resume-button">
          <a
            href="https://drive.google.com/file/d/1xIalZMOobklF9QkjecucDcJwqX_0zboz/view?usp=sharing"
            download="Resume.pdf"
          >
            Download
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
