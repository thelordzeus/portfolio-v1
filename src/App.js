import React from "react";
import Hero from "./components/About/Hero";

import Experience from "./components/Card/Experience";
import Projects from "./components/Card/Projects";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App  bg-gradient-to-b from-black via-black to-gray-800 space-y-3">
      <NavBar />

      <Hero />

      <Experience />

      <Projects />
    </div>
  );
}

export default App;
