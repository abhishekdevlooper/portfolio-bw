import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <section className="hero">
      {/* Particles Background */}
      <Particles
        options={{
          particles: { number: { value: 60 } },
          move: { enable: true, speed: 0.5 },
          color: { value: "#FFD700" },
          size: { value: 2 },
        }}
      />

      {/* Tilt wrapper for depth */}
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <div className="hero-content">
          <motion.h1
            className="fade-in glow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              options={{
                strings: ["Hi, I'm ABHISHEK"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
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
            className="cta-button glitch"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          {/* Social Links */}
          <div className="social-icons">
            <a
              aria-label="Github"
              href="https://github.com/abhishekdevlooper"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a aria-label="Email" href="mailto:abhishekdevlooper@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default Hero;
