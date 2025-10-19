import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Header,
  About,
  Timeline,
  Projects,
  Contact,
  Album,
  Certificates,
  TargetCursor,
} from "./components";
import ScrollEffect from "./hooks/ScrollEffect";
import "./components/extra/loading.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  // 🌙 Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // 🌀 Loading logic
  useEffect(() => {
    let percent = 0;
    const duration = 3000; // 3 s matches CSS fillUp
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      percent += step;
      if (percent >= 100) {
        percent = 100;
        clearInterval(timer);

        // wait 1 s before hiding loader
        setTimeout(() => {
          const loaderEl = document.getElementById("loader");
          loaderEl?.classList.add("fade-out");
          setTimeout(() => setShowLoader(false), 1000); // remove from DOM after fade
        }, 1000);
      }
      setProgress(Math.floor(percent));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // ⏳ Loader visible
  if (showLoader) {
    return (
      <div id="loader">
        <div className="water-logo"></div>
        <div id="loading-text">{progress}%</div>
      </div>
    );
  }

  // 🌍 Main app after loader finishes
  return (
    <BrowserRouter>
      <TargetCursor
        targetSelector="button, a, input, textarea, label, p, span, .switchbutton, .profileimages, .timeline-item, .album-images"
        spinDuration={3}
        hideDefaultCursor
      />
      <div
        className="scroll-smooth transition-colors duration-500 
      bg-[var(--background)] text-[var(--foreground)]"
      >
        <section id="home">
          <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </section>

        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <ScrollEffect direction="right">
          <section id="about" className="scroll-mt-24">
            <About />
          </section>
        </ScrollEffect>

        <ScrollEffect>
          <section id="timeline" className="scroll-mt-24">
            <Timeline />
          </section>
        </ScrollEffect>

        <ScrollEffect>
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
        </ScrollEffect>

        <ScrollEffect>
          <section id="certificates" className="scroll-mt-24">
            <Certificates />
          </section>
        </ScrollEffect>

        <ScrollEffect>
          <section id="album" className="scroll-mt-24">
            <Album />
          </section>
        </ScrollEffect>

        <ScrollEffect>
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </ScrollEffect>
      </div>
    </BrowserRouter>
  );
};

export default App;
