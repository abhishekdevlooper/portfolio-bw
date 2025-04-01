import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import laptopImage from "./Laptop.jpg"; // import the image

function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="about-content">
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
            I am a passionate developer who enjoys building interactive and
            scalable applications. I have experience in React, Spring Boot,
            Docker, Kubernetes, and Cloud technologies. My goal is to create
            efficient, user-friendly solutions that make a difference.
          </motion.p>
        </div>

        {/* Optional Image Section */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img src={laptopImage} alt="About Me" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
