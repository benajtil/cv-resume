import React from "react";
import { FaCheck } from "react-icons/fa";
import { about, person } from "../constants";

export default function About() {
  const scopes = about.bio.scopes;
  const half = Math.ceil(scopes.length / 2);
  const leftColumn = scopes.slice(0, half);
  const rightColumn = scopes.slice(half);

  return (
    <section className="w-full bg-white pt-16 pb-16">
      {}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold">BIO</h1>
      </div>

      {}
      <div className="flex items-center justify-center mb-16">
        <div className="h-px w-24 bg-gray-300" />
        <div className="flex items-center mx-4 gap-2">
          <div className="w-10 h-[2px] bg-gray-300 rotate-45" />
          <div className="w-3 h-3 bg-gray-300 rotate-45" />
          <div className="w-10 h-[2px] bg-gray-300 rotate-45" />
        </div>
        <div className="h-px w-24 bg-gray-300" />
      </div>

      {}
      <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-12">
        {}
        <div className="flex-1 space-y-12">
          {}
          <div>
            <h2 className="text-2xl font-semibold mb-4">OVERVIEW</h2>
            <p className="text-[15px] leading-relaxed max-w-2xl">
              {about.bio.objective}
            </p>
          </div>

          {}
          <div>
            <h2 className="text-2xl font-semibold mb-4">SCOPES</h2>
            <div className="flex gap-16">
              <ul className="space-y-3">
                {leftColumn.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {rightColumn.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {}
        <div className="relative w-64 h-64 rounded-full overflow-hidden mx-auto">
          {/* Your circular photo */}
          <img
            src={person.photo.img}
            alt={person.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* The GIF border on top, clipped to the same circle */}
          <img
            src={person.photo.border} // your border.gif
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
