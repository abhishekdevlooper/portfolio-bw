import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import "../styles/navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
    setMobileOpen(false); // Close menu after clicking a link
  };

  // Mapping Navbar Items to Their Class-Based Sections
  const navItems = [
    { name: "About", class: "about-container" },
    { name: "Experience", class: "experience-container" },
    { name: "Projects", class: "projects-container" },
    { name: "Skills", class: "skills-section" },
    { name: "Resume", class: "resume-section" },
    { name: "Contact", class: "contact-section" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(30, 30, 30, 0.9))",
        backdropFilter: "blur(10px)",
        padding: "12px 30px",
        transition: "background 0.3s ease-in-out",
        zIndex: 1200, // Ensures the navbar is above the content
      }}
    >
      <Toolbar className="navbar-container">
        {/* LOGO */}
        <Typography variant="h6" className="logo">
          🚀 My Portfolio
        </Typography>

        {/* Desktop Navigation - Now Center Aligned */}
        <div className="nav-links">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              onClick={() => scrollToSection(item.class)}
              className="nav-item"
              whileHover={{ scale: 1.1, color: "#000000" }} // Black color on hover
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <IconButton className="menu-icon" onClick={toggleMobileMenu}>
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
          <List className="mobile-menu">
            {navItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => scrollToSection(item.class)}
              >
                <ListItemText primary={item.name} className="mobile-nav-item" />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
