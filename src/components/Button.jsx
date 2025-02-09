import React from "react";
import { Button } from "@mui/material";
import "../styles/button.css";

const CustomButton = ({ text, onClick }) => {
  return (
    <Button className="custom-button" onClick={onClick} variant="contained">
      {text}
    </Button>
  );
};

export default CustomButton;
