import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function BackToTop() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <Button
        color="primary"
        variant="contained"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        startIcon={<ArrowUpwardIcon />}
      >
        Back to Top
      </Button>
    )
  );
}

export default BackToTop;
