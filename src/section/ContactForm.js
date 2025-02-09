import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactForm = () => {
  return (
    <Box textAlign="center" p={5}>
      <Typography variant="h4">Contact Me</Typography>
      <Box mt={2}>
        <TextField label="Your Email" fullWidth sx={{ mb: 2 }} />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
