import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="about-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        I am a passionate developer who loves building interactive web
        applications. I enjoy experimenting with new technologies and creating
        solutions that make a difference.
      </motion.p>
    </motion.div>
  );
}

export default About;
