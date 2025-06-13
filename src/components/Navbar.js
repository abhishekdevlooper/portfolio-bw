import React, { useState, useEffect, useMemo } from "react";
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
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
// import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";
import "../styles/navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState("hero");

  // Memoized Navigation items with icons
  const navItems = useMemo(
    () => [
      { name: "Home", class: "hero", icon: <HomeIcon /> },
      { name: "Experience", class: "experience-container", icon: <WorkIcon /> },
      { name: "Projects", class: "projects-container", icon: <CodeIcon /> },
      // { name: "Skills", class: "skills-section", icon: <SchoolIcon /> },
      { name: "Contact", class: "contact-section", icon: <ContactMailIcon /> },
    ],
    []
  );

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 70, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  // Update scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / height) * 100);

      // Update active section
      navItems.forEach((item) => {
        const section = document.querySelector(`.${item.class}`);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(item.class);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" className="custom-navbar">
        <Toolbar className="navbar-container">
          {/* Logo */}
          <Typography variant="h6" className="logo">
            🚀 My Portfolio
          </Typography>

          {/* Desktop Navigation with smooth slide-up */}
          <div className="nav-links">
            {navItems.map((item, index) => (
              <Tooltip key={index} title={item.name}>
                <motion.a
                  onClick={() => scrollToSection(item.class)}
                  className={`nav-item ${
                    active === item.class ? "active" : ""
                  }`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon} {item.name}
                </motion.a>
              </Tooltip>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <IconButton className="menu-icon" onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer with smooth slide-up */}
          <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
            <List className="mobile-menu">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
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

      {/* Back To Top Button */}
      {scrollProgress > 20 && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <ArrowUpwardIcon />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
