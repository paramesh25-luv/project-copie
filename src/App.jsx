import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />   {/* ✅ Your detailed projects */}
      <Skills />
      <Certificates />
      <Contact />    {/* ✅ Your email + GitHub */}
      <Footer />
    </div>
  );
}
