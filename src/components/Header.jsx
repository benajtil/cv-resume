import React, { useState } from "react";
import { navLink } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {}
        <div className="text-xl font-bold">Ben.Dev</div>

        {}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {}
        <ul
          className={`
            absolute inset-x-0 top-full bg-white flex flex-col items-center gap-6 py-4
            transition-transform transform origin-top
            ${menuOpen ? "scale-y-100" : "scale-y-0"} 
            md:static md:flex md:flex-row md:scale-y-100 md:bg-transparent md:py-0
          `}
        >
          {navLink.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-black hover:text-green-400 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
