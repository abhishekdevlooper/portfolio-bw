import React from "react";
import { motion } from "framer-motion";
import "../styles/footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>

      <div className="social-icons">
        {[
          { icon: <FaLinkedin />, link: "https://linkedin.com" },
          { icon: <FaGithub />, link: "https://github.com" },
          { icon: <FaTwitter />, link: "https://twitter.com" },
          { icon: <FaEnvelope />, link: "mailto:example@gmail.com" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, color: "#FFD700" }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;
