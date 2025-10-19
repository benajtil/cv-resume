import React from "react";

const ThemeSwitch = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`switchbutton relative w-24 h-10 border-4 border-black cursor-pointer transition-all duration-300 active:scale-95 ${
        isDarkMode ? "bg-red-500" : "bg-emerald-400"
      }`}
      role="button"
      aria-label="Toggle dark mode"
    >
      <p
        className={`absolute text-2xl font-bold top-1 select-none transition-all duration-500 ${
          isDarkMode ? "right-3 text-gray-400" : "left-3 text-white"
        }`}
      >
        {isDarkMode ? "OFF" : "ON"}
      </p>

      {/* Sliding pixel block */}
      <div
        className={`absolute w-7 h-7 top-0.5 border-1 border-black shadow-[2px_2px_0_#000] transition-all duration-300 ${
          isDarkMode
            ? "left-[10px] bg-red-700"
            : "left-[48px] relative bg-emerald-600"
        }`}
      >
        <div className="grid grid-cols-3 gap-1 p-[3px]">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-white w-1 h-1"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
