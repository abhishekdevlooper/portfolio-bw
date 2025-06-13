import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";
// import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/globals.css";

function App() {
  const [dark, setDark] = useState(true);

  const customTheme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: { main: "#000000" },
      secondary: { main: "#000000" },
    },
    components: {
      MuiAppBar: {
        styleOverrides: { root: { backgroundColor: "#000000 !important" } },
      },
      MuiButton: {
        styleOverrides: {
          root: { "&:focus": { outline: "none", boxShadow: "none" } },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      {/* Light/Dark button to toggle */}
      <Container className="main-content">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDark((prev) => !prev)}
          style={{ marginBottom: "20px" }}
        >
          {dark ? "Switch to Light" : "Switch to Dark"}
        </Button>
        {/* <BackToTop /> */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <Skills /> */}
        {/* <Resume /> */}
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
