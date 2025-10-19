import React, { useState } from "react";
import { navLink } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch"; // 👈 import it

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md shadow-md transition-all duration-300"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 🌐 Logo */}
        <div className="text-2xl font-bold select-none">Ben.Dev</div>

        {/* 🌗 Theme Switch */}
        <div className="hidden relative right-80 md:block ">
          <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>

        {/* 🍔 Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 🧭 Navigation */}
        <ul
          className={`absolute inset-x-0 top-full flex flex-col items-center gap-6 py-5 transition-transform transform origin-top duration-300 
          ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} 
          md:static md:flex md:flex-row md:gap-8 md:scale-y-100 md:opacity-100 md:py-0`}
          style={{
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          {navLink.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="font-medium transition-colors duration-300 hover:text-green-400"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Show switch in mobile menu too */}
          <li className="md:hidden mt-2">
            <ThemeSwitch
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
