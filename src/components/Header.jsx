import React from "react";
import { navLink } from "../constants";

const Header = () => {
  return (
    <nav className="w-full bg-black/80 backdrop-blur-md shadow-md ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center ">
        <ul className="flex gap-6 ml-auto">
          {navLink.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-gray-300 hover:text-amber-400 transition"
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
