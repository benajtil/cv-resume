import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import textBubble from "../assets/pixel-speech-bubble.gif";
import catAnimation from "../assets/8-bit.json";
import turnOnGif from "../assets/background/turnon.gif";
import turnOffGif from "../assets/background/turnoff.gif";
import lightModeGif from "../assets/background/lightmode.gif";
import darkModeGif from "../assets/background/darkmode.gif";
import { person, typedTitle, info } from "../constants";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeSwitch from "./ThemeSwitch";

const Hero = ({ isDarkMode, setIsDarkMode }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [backgroundSrc, setBackgroundSrc] = useState(
    isDarkMode ? darkModeGif : lightModeGif,
  );
  const [currentPhase, setCurrentPhase] = useState("normal");

  const currentTitle = typedTitle.title[index];
  const currentColor = currentTitle?.color ?? "text-purple-500";

  useEffect(() => {
    const title = typedTitle.title[index];

    if (!title) return;

    if (!deleting && subIndex >= title.text.length) {
      const timeout = setTimeout(() => {
        setDeleting(true);
      }, 1200);

      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex <= 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % typedTitle.title.length);
      return;
    }

    const speed = deleting ? 45 : Math.floor(Math.random() * 81) + 40;

    const timeout = setTimeout(() => {
      const nextIndex = deleting ? subIndex - 1 : subIndex + 1;

      setSubIndex(nextIndex);
      setText(title.text.substring(0, nextIndex));
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, subIndex, deleting]);

  useEffect(() => {
    setCurrentPhase(isDarkMode ? "turnon" : "turnoff");
    setBackgroundSrc(isDarkMode ? turnOnGif : turnOffGif);
  }, [isDarkMode]);

  useEffect(() => {
    if (currentPhase === "normal") return;

    const timeout = setTimeout(() => {
      setBackgroundSrc(currentPhase === "turnon" ? darkModeGif : lightModeGif);
      setCurrentPhase("normal");
    }, 2500);

    return () => clearTimeout(timeout);
  }, [currentPhase, isDarkMode]);

  const handleCatClick = () => {
    setShowBubble((prev) => !prev);
  };

  return (
    <section
      id="hero"
      className={`relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden
        transition-colors duration-500
        ${isDarkMode ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <img
          key={backgroundSrc}
          src={backgroundSrc}
          alt=""
          className={`h-full w-full object-cover ${
            isDarkMode ? "brightness-[0.3]" : "brightness-[0.5]"
          }`}
        />
      </div>

      {/* Readability overlay */}
      <div
        className={`absolute inset-0 -z-10 transition-colors duration-500 ${
          isDarkMode ? "bg-black/45" : "bg-black/30"
        }`}
        aria-hidden="true"
      />

      {/* Top navigation */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between gap-4 p-4 sm:p-6">
        <a
          href="#hero"
          className="text-xl font-bold text-white transition-colors hover:text-purple-400 sm:text-2xl"
          aria-label="Ben.Dev home"
        >
          Ben.Dev
        </a>

        <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>

      {/* Main introduction */}
      <div className="relative z-20 flex flex-1 items-center justify-center px-5 pb-20 pt-24 sm:px-8 sm:pb-24">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300 sm:text-base">
            Hello, I'm
          </p>

          <h1 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {person.name.fullname}
          </h1>

          <div
            className="mb-6 flex min-h-[4rem] items-center justify-center sm:min-h-[5.5rem]"
            aria-label={currentTitle?.text ?? "Developer"}
          >
            <p
              aria-hidden="true"
              className={`break-words text-4xl font-bold leading-tight font-Pixeboy sm:text-5xl md:text-7xl ${currentColor}`}
            >
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="mx-auto max-w-2xl text-balance text-sm leading-7 text-white/90 sm:text-base sm:leading-8 md:text-lg">
            {info.titleDesc}
          </p>

          {/* Main actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-purple-500 bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-950/20 transition duration-300 hover:-translate-y-1 hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <i className="fas fa-code" aria-hidden="true" />
              View My Projects
            </a>

            <a
              href="/resume/Junior%20Software%20Developer.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/60 bg-black/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <i className="fas fa-download" aria-hidden="true" />
              Download Résumé
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="mx-auto mt-10 inline-flex flex-col items-center gap-2 text-xs text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 sm:text-sm"
          >
            <span>Discover more</span>
            <i
              className="fas fa-chevron-down animate-bounce"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Interactive pixel cat */}
      <button
        type="button"
        onClick={handleCatClick}
        aria-label={showBubble ? "Hide cat message" : "Show cat message"}
        aria-expanded={showBubble}
        className="absolute bottom-3 right-4 z-30 hidden h-56 w-44 cursor-pointer items-end justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 md:flex lg:bottom-5 lg:right-8 lg:h-72 lg:w-56"
      >
        <div className="h-full w-full [transform:rotateY(180deg)]">
          <Lottie
            animationData={catAnimation}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </button>

      {/* Cat speech bubble */}
      <div
        className={`pointer-events-none absolute bottom-36 right-36 z-20 hidden w-48 transition-opacity duration-300 lg:bottom-44 lg:right-48 lg:w-64 md:block ${
          showBubble ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!showBubble}
      >
        <img src={textBubble} alt="" className="h-auto w-full" />
      </div>
    </section>
  );
};

export default Hero;
