import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLink } from "../constants";
import { FaBars, FaTimes, FaPalette } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const textColor = isDarkMode ? "text-gray-100" : "text-gray-400";

  const linkClass = `relative text-sm font-medium transition-colors duration-200 ${
    isDarkMode
      ? "text-gray-300 hover:text-purple-400"
      : "text-gray-700 hover:text-purple-600"
  }`;

  const closeMenu = () => setMenuOpen(false);

  const graphicDesignClass = `inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
    isDarkMode
      ? "bg-purple-500/15 text-purple-300 hover:bg-purple-500/25"
      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
  }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isDarkMode
          ? "border-white/10 bg-[#0b0b10]/90"
          : "border-gray-200/80 bg-white/90"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className={`shrink-0 text-2xl font-extrabold tracking-tight ${textColor}`}
          aria-label="Ben.Dev home"
        >
          Ben<span className="text-purple-500">.</span>Dev
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          {navLink.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={linkClass}>
              {link.name}
            </a>
          ))}

          {/* Graphic Design link */}
          <Link
            to="/graphic-design"
            className={graphicDesignClass}
            onClick={closeMenu}
          >
            <FaPalette aria-hidden="true" />
            <span>Graphic Design</span>
          </Link>

          {/* Theme switch */}
          <div
            className={`ml-1 border-l pl-5 ${
              isDarkMode ? "border-white/15" : "border-gray-200"
            }`}
          >
            <ThemeSwitch
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
              isDarkMode
                ? "border-white/10 text-white hover:bg-white/10"
                : "border-gray-200 text-gray-800 hover:bg-gray-100"
            }`}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile navigation dropdown */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full overflow-hidden border-b shadow-xl transition-all duration-300 md:hidden ${
            isDarkMode
              ? "border-white/10 bg-[#111116]"
              : "border-gray-200 bg-white"
          } ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {navLink.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className={`border-b py-4 last:border-b-0 ${
                  isDarkMode ? "border-white/10" : "border-gray-100"
                } ${linkClass}`}
              >
                {link.name}
              </a>
            ))}

            {/* Graphic Design mobile link */}
            <Link
              to="/graphic-design"
              onClick={closeMenu}
              className={`my-3 ${graphicDesignClass}`}
            >
              <FaPalette aria-hidden="true" />
              <span>Graphic Design</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
