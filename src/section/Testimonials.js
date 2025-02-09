import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Testimonial = ({ name, feedback }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 3 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{feedback}</Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
