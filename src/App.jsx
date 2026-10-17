import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import { GraphicDesign } from "./gallery"; // or import GraphicDesign from "./gallery/GraphicDesign"
import { TargetCursor } from "./components"; // ✅ import cursor globally
import "./components/extra/loading.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    let percent = 0;
    const duration = 3000;
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      percent += step;
      if (percent >= 100) {
        percent = 100;
        clearInterval(timer);
        setTimeout(() => {
          const loaderEl = document.getElementById("loader");
          loaderEl?.classList.add("fade-out");
          setShowLoader(false);
        }, 1000);
      }
      setProgress(Math.floor(percent));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (showLoader) {
    return (
      <div id="loader">
        <div className="water-logo"></div>
        <div id="loading-text">{progress}%</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* ✅ Global cursor so it's active everywhere */}
      <TargetCursor
        targetSelector="button, a, input, textarea, label, p, span, .switchbutton, .profileimages, .timeline-item, .album-images"
        spinDuration={3}
        hideDefaultCursor
      />

      {/* Floating quick link to Graphic Design gallery */}
      <div style={{ position: "fixed", right: 20, bottom: 10, zIndex: 9999 }}>
        <Link
          to="/graphic-design"
          className="text-2xl bg-purple-300 rounded-full p-2 hover:bg-purple-400 transition-colors"
        >
          Graphic Design
        </Link>
      </div>

      {/* 🔹 All routes */}
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
  );
};

export default App;
