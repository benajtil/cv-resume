import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { GraphicDesign } from "./gallery";
import { TargetCursor } from "./components";

// IMPORTANT: Match the actual filename capitalization.
import "./components/extra/Loading.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Loading progress
  useEffect(() => {
    const duration = 3500;
    const interval = 35;
    const step = 100 / (duration / interval);

    let percent = 0;

    const timer = setInterval(() => {
      percent += step;

      if (percent >= 100) {
        percent = 100;
        clearInterval(timer);

        setProgress(100);

        // Allow the water to finish, then fade out.
        setTimeout(() => {
          const loader = document.getElementById("loader");

          loader?.classList.add("fade-out");

          // Remove loader after fade transition.
          setTimeout(() => {
            setShowLoader(false);
          }, 1000);
        }, 300);
      } else {
        setProgress(Math.floor(percent));
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* WATER LOADING SCREEN */}
      {showLoader && (
        <div id="loader">
          <div className="water-logo">
            <div className="water-fill" style={{ height: `${progress}%` }}>
              <div className="wave wave-one"></div>
              <div className="wave wave-two"></div>
            </div>

            <div className="water-shine"></div>
          </div>

          <div id="loading-text">{progress}%</div>
        </div>
      )}

      {/* WEBSITE CONTENT */}
      <BrowserRouter>
        <TargetCursor
          targetSelector="button, a, input, textarea, label, p, span, .switchbutton, .profileimages, .timeline-item, .album-images"
          spinDuration={3}
          hideDefaultCursor
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />

          <Route path="/graphic-design" element={<GraphicDesign />} />

          <Route
            path="*"
            element={
              <div style={{ color: "#fff", padding: 24 }}>404 Not Found</div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
