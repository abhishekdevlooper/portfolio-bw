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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
