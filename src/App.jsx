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
import LoadingScreen from "./components/loadingScreen";

const App = () => {
  return (
    <BrowserRouter>
      <LoadingScreen>
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
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </div>
        <Bottom />
      </LoadingScreen>
    </BrowserRouter>
  );
};

export default App;
