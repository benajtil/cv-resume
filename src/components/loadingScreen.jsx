
import React, { useEffect, useState } from "react";
import "./extra/Loading.css";

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeout;

    const finishLoading = () => {
      // Keep the loader visible long enough for the water animation.
      timeout = setTimeout(() => {
        setLoading(false);
      }, 3500);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading && (
        <div id="loader">
          <div className="water-logo">
            <div className="water-fill">
              <div className="wave wave-one"></div>
              <div className="wave wave-two"></div>
            </div>

            <div className="water-shine"></div>
          </div>

          <div id="loading-text">LOADING...</div>
        </div>
      )}

      {children}
    </>
  );
};

export default LoadingScreen;
