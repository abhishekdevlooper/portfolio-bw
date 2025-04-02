import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { motion } from "framer-motion";
import "../styles/navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with icons
  const navItems = [
    { name: "Home", class: "hero", icon: <HomeIcon /> },
    { name: "Experience", class: "experience-container", icon: <WorkIcon /> },
    { name: "Projects", class: "projects-container", icon: <CodeIcon /> },
    { name: "Skills", class: "skills-section", icon: <SchoolIcon /> },
    { name: "Contact", class: "contact-section", icon: <ContactMailIcon /> },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" className="custom-navbar">
        <Toolbar className="navbar-container">
          {/* Logo */}
          <Typography variant="h6" className="logo">
            🚀 My Portfolio
          </Typography>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                onClick={() => scrollToSection(item.class)}
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon} {item.name}
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ListItem button onClick={() => scrollToSection(item.class)}>
                    {item.icon} <ListItemText primary={item.name} />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Drawer>
        </Toolbar>

        {/* Scroll Progress Bar */}
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          className="scroll-progress"
        />
      </AppBar>
    </>
  );
};

export default Navbar;
