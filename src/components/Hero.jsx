import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import textBubble from "../assets/pixel-speech-bubble.gif";
import catAnimation from "../assets/8-bit.json";
import turnOnGif from "../assets/background/turnon.gif";
import turnOffGif from "../assets/background/turnoff.gif";
import lightModeGif from "../assets/background/lightmode.gif";
import darkModeGif from "../assets/background/darkmode.gif";
import { person, tagline, typedTitle, info } from "../constants";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeSwitch from "./ThemeSwitch";

const Hero = ({ isDarkMode, setIsDarkMode }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [backgroundSrc, setBackgroundSrc] = useState(lightModeGif);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("normal"); // 'turnon', 'turnoff', 'normal'

  // Typing animation
  useEffect(() => {
    const current = typedTitle.title[index];
    if (!deleting && subIndex === current.text.length) {
      setText(current.text);
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % typedTitle.title.length);
      return;
    }
    const randomSpeed = Math.floor(Math.random() * (120 - 40 + 1)) + 40;
    const timeout = setTimeout(() => {
      setText(current.text.substring(0, subIndex));
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, randomSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  const currentColor = typedTitle.title[index].color;

  // 🌗 Background change effect
  useEffect(() => {
    setIsTransitioning(true);

    if (isDarkMode) {
      // Going to dark mode → play turn-on animation
      setCurrentPhase("turnon");
      setBackgroundSrc(turnOnGif);
    } else {
      // Going to light mode → play turn-off animation
      setCurrentPhase("turnoff");
      setBackgroundSrc(turnOffGif);
    }
  }, [isDarkMode]);

  // 🎞 Once animation finishes loading, change to static mode bg
  const handleAnimationLoad = () => {
    let gifDuration = 2500; // adjust this to match actual length of turnon/off gif (ms)

    setTimeout(() => {
      if (currentPhase === "turnon") {
        setBackgroundSrc(darkModeGif);
      } else if (currentPhase === "turnoff") {
        setBackgroundSrc(lightModeGif);
      }
      setIsTransitioning(false);
      setCurrentPhase("normal");
    }, gifDuration);
  };

  return (
    <section
      id="hero"
      className={`relative h-screen w-full overflow-hidden bg-no-repeat pt-16 transition-all duration-500 ${
        isDarkMode ? "bg-[#0a0a0a]" : "bg-[#ffffff]"
      }`}
    >
      {/* 🎞 Background */}
      <div className="absolute inset-0">
        <img
          key={backgroundSrc}
          src={backgroundSrc}
          alt="background"
          onLoad={handleAnimationLoad}
          className={`w-full h-screen object-cover z-0 transition-opacity duration-700 ${
            isDarkMode ? "brightness-[0.3]" : "brightness-[0.5]"
          } ${isTransitioning ? "opacity-90" : "opacity-90"}`}
        />
      </div>

      {/* Dim overlay when dark */}
      {isDarkMode && (
        <div className="absolute inset-0 bg-black/60 z-10 transition-all duration-500"></div>
      )}

      {/* Logo */}
      <div className="absolute top-0 left-0 z-20 m-4">
        <h1
          className={` text-2xl font-bold transition-colors ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Ben.Dev
        </h1>
      </div>

      {/* 🌗 Theme Switch */}
      <div className="absolute top-0 left-40 z-30 m-4">
        <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>

      {/* 🐱 Cat */}
      <div
        className="absolute bottom-10 right-10 flex-col w-70 h-100 z-30 [transform:rotateY(180deg)] cursor-pointer hidden md:flex"
        onClick={() => setShowBubble((prev) => !prev)}
      >
        <Lottie
          animationData={catAnimation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* 💬 Speech Bubble */}
      <div
        className={`absolute bottom-20 right-40 w-80 h-80 z-20 pointer-events-none transition-opacity duration-300 hidden md:block ${
          showBubble ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={textBubble} alt="text-bubble" />
      </div>

      {/* Text Content */}
      <div className="  ml-10 absolute inset-0 flex items-center h-full pr-10 z-20">
        <header className="w-full text-center mb-40 space-y-4 cursor-default">
          <h1
            className={` text-2xl font-bold justify-center flex w-full top-90 text-center ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            {person.name.fullname}
          </h1>

          <h1
            className={`text-7xl font-bold font-Pixeboy min-h-[2rem] ${currentColor}`}
          >
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <div className="w-full flex justify-center">
            <p
              className={`absolute text-justify leading-relaxed max-w-2xl ${
                isDarkMode ? "text-white" : "text-white"
              }`}
            >
              {info.titleDesc}
            </p>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
