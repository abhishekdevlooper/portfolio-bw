import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import "./styles/globals.css";
import Hero from "./sections/Hero";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const customTheme = createTheme({
  palette: {
    primary: { main: "#000000" }, // Black primary color
    secondary: { main: "#000000" }, // Black secondary color
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: "#000000 !important" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": { outline: "none", boxShadow: "none" },
        },
      },
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <Container className="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
