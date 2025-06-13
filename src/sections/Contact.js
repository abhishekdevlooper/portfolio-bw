import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import { Person, Email, Message } from "@mui/icons-material";
import "../styles/contact.css";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = { name: "", email: "", msg: "" };
    if (!name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^@ ]+@[^@ ]+\.[^@ ]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }
    if (!msg) {
      newErrors.msg = "Message is required.";
      isValid = false;
    }
    setErrors(newErrors);

    if (isValid) {
      // Here you would normally send this to a backend
      setOpen(true);
      setName("");
      setEmail("");
      setMsg("");
    }
  };

  return (
    <Box className="contact-section">
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Me
        </Typography>
      </motion.div>

      <form onSubmit={handleSubmit}>
        <motion.div variants={variants}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            className="contact-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
        </motion.div>

        <motion.div variants={variants}>
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            className="contact-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
        </motion.div>

        <motion.div variants={variants}>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            className="contact-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Message />
                </InputAdornment>
              ),
            }}
            margin="normal"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            error={!!errors.msg}
            helperText={errors.msg}
          />
        </motion.div>

        <motion.div variants={variants}>
          <Button
            variant="contained"
            color="primary"
            className="contact-button"
            type="submit"
          >
            Send Message
          </Button>
        </motion.div>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Your message has been sent successfully! ✅
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
