import React, { useState, useEffect } from "react";
import loadingGif from "../assets/8-bit-loading.gif";

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 200);

    const onLoad = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    const totalSegments = 10;
    const filledSegments = Math.round((progress / 100) * totalSegments);

    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-center bg-cover z-50"
        style={{ backgroundImage: `url(${loadingGif})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative z-10 text-white text-2xl font-bold mb-4">
          Loading...
        </h1>
        <div className="relative z-10 w-50 h-5 flex space-x-1 border-3 border-gray-500 bg-gray-500 overflow-hidden">
          {Array.from({ length: totalSegments }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-full transition-colors duration-200 ${
                i < filledSegments ? "bg-gray-200" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
