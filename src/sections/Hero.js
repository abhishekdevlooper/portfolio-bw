import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          className="fade-in"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">ABHISHEK</span>
        </motion.h1>

        <motion.p
          className="slide-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A passionate <span className="highlight">Full-Stack Developer</span>{" "}
          crafting interactive web experiences.
        </motion.p>

        <motion.a
          href="#projects"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
