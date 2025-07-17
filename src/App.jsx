import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Header,
  About,
  Timeline,
  Projects,
  Skills,
  Contact,
  Bottom,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {}
      <div className="scroll-smooth">
        {}
        <section id="home">
          <Hero />
        </section>
        <Header />

        {}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {}
        <section id="timeline" className="scroll-mt-24">
          <Timeline />
        </section>

        {}
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        {}
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        {}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </div>
      <Bottom />
    </BrowserRouter>
  );
};

export default App;
