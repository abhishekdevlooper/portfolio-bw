import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // For animations
import "../styles/contact.css";

const Contact = () => {
  return (
    <Box className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3">Contact Me</Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          className="contact-input"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          className="contact-input"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className="contact-input"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Button variant="contained" className="contact-button">
          Send Message
        </Button>
      </motion.div>
    </Box>
  );
};

export default Contact;
