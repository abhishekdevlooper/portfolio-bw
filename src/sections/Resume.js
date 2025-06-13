import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/resume.css";

const Resume = () => {
  return (
    <motion.div
      className="resume-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -3 }} // Floating effect
    >
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Download My Resume
      </motion.h2>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <Button variant="contained" className="resume-button">
          <a
            href="https://drive.google.com/file/d/1bDRtjwXs88OTPvuaYh1fXCKHoWzUTPBw/view?usp=drive_link"
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
