import React from "react";
import {
  Hero,
  Header,
  About,
  Skills,
  Timeline,
  Projects,
  Contact,
  FeaturedWork,
  EngineeringJournal,
} from "./components";

import ScrollEffect from "./hooks/ScrollEffect";

export default function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <>
      <div className="scroll-smooth transition-colors duration-500 bg-[var(--background)] text-[var(--foreground)]">
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
          <section id="skills" className="scroll-mt-24">
            <Skills />
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
          <section id="featured works" className="scroll-mt-24">
            <FeaturedWork />
          </section>
        </ScrollEffect>

        <ScrollEffect>
          <section id="engineering journal" className="scroll-mt-24">
            <EngineeringJournal />
          </section>
        </ScrollEffect>

        <ScrollEffect>
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </ScrollEffect>
      </div>
    </>
  );
}
