import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import laptopImage from "./Laptop.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      {/* Parallax Background */}
      <div className="parallax-bg"></div>

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section: Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={laptopImage} alt="About Me" />
        </motion.div>

        {/* Right Section: Content */}
        <div className="about-content">
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I am a passionate developer specializing in backend development,
            microservices, and cloud solutions. I love building scalable
            applications that enhance user experiences.
          </motion.p>

          {/* Timeline Section */}
          <div className="timeline">
            <div className="timeline-item">
              <span className="dot"></span>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                💻 <strong>2+ Years Experience</strong> in Java & Microservices.
              </motion.p>
            </div>

            <div className="timeline-item">
              <span className="dot"></span>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                🚀 <strong>React & DevOps</strong> Enthusiast.
              </motion.p>
            </div>

            <div className="timeline-item">
              <span className="dot"></span>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                🔥 Passionate about <strong>Cloud & AI Solutions</strong>.
              </motion.p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <motion.div
            className="tech-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <h3>Tech Stack</h3>
            <ul className="tech-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Microservices</li>
              <li>Hibernate</li>
              <li>Rest API</li>
              <li>Kafka</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>AWS</li>
              <li>Kubernetes</li>
              <li>Docker</li>
              <li>Jenkins</li>
              <li>Selenium</li>
            </ul>
          </motion.div>

          {/* Download Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1bDRtjwXs88OTPvuaYh1fXCKHoWzUTPBw/view?usp=drive_link"
            download
            className="download-cv"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📁 Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
