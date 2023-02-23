import React from "react";
import Hero from "./components/About/Hero";

import Experience from "./components/Card/Experience";
import Projects from "./components/Card/Projects";
import { Footer } from "./components/Footer";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App  bg-black space-y-3">
      <NavBar />

      <Hero />

      <Experience />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
