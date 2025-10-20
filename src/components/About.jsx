import React, { useState } from "react";
import {
  FaCheck,
  FaUser,
  FaBirthdayCake,
  FaHome,
  FaGlobe,
  FaDownload,
  FaJava,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiSqlite,
  SiPython,
} from "react-icons/si";
import { about, person } from "../constants";
import profilePic from "../assets/bg1.jpg";
import profileBorder from "../assets/border.gif";
import { LogoLoop } from "./extra/LogoLoop";
// optional interactive background

export default function About({ isDarkMode }) {
  const [open, setOpen] = useState(false);

  const techLogos = [
    {
      node: <SiHtml5 />,
      title: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      node: <SiCss3 />,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiPhp />,
      title: "PHP",
      href: "https://www.php.net/",
    },
    {
      node: <SiMysql />,
      title: "MySQL",
      href: "https://www.mysql.com/",
    },
    {
      node: <SiSqlite />,
      title: "SQLite",
      href: "https://www.sqlite.org/",
    },
    {
      node: <FaJava />,
      title: "Java",
      href: "https://www.java.com",
    },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const scopes = about.bio.scopes;
  const half = Math.ceil(scopes.length / 2);
  const leftColumn = scopes.slice(0, half);
  const rightColumn = scopes.slice(half);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-20"
    >
      {/* ✨ Section Title */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-6xl font-extrabold text-purple-600">BIO</h1>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center mb-16 relative z-10">
        <div
          className={`h-px w-24 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
        />
        <div className="flex items-center mx-4 gap-2">
          <div
            className={`w-10 h-[2px] rotate-45 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
          <div
            className={`w-3 h-3 rotate-45 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
          <div
            className={`w-10 h-[2px] rotate-45 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
        </div>
        <div
          className={`h-px w-24 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
        />
      </div>

      {/* 🛠️ Programming Logos */}
      <div className="text-center pb-5 text-2xl font-semibold relative z-10">
        <h1>PROGRAMMING LANGUAGES AND UTILITIES</h1>
      </div>
      <div
        style={{ height: "180px", position: "relative", overflow: "hidden" }}
        className="relative z-10 "
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="var(--background)"
          ariaLabel="Technology partners"
        />
      </div>

      {/* 🧍 About Info Section */}
      <div className="container mx-auto px-6 md:px-8 md:pl-20 flex flex-col md:flex-row gap-12 relative z-10">
        {/* Left Column */}
        <div className="flex-1 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Over<span className="text-purple-600">view</span>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-4xl text-justify">
              {about.bio.objective}
            </p>
          </div>

          {/* Scopes */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Sco<span className="text-purple-600">pes</span>
            </h2>
            <div className="flex gap-20 mx-4 max-w-4xl">
              <ul className="space-y-3">
                {leftColumn.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-purple-600" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {rightColumn.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-purple-600" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About Me */}
          <div className="text-2xl font-semibold">
            <h2>
              About <span className="text-purple-600">me</span>
            </h2>
            <p className="text-[15px] max-w-4xl text-justify leading-7 font-normal mt-5 whitespace-pre-line">
              {about.bio.aboutme}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Profile Image */}
          <div className="profileimages relative w-64 h-64 overflow-hidden mx-auto group">
            <img
              src={profilePic}
              alt={person.name}
              className="w-full h-full object-cover photo-transition"
            />
            <img
              src={profileBorder}
              alt=""
              className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity delay-1000 duration-1000 ease-in-out"
            />
          </div>

          {/* Personal Info */}
          <div className="p-6 mt-4">
            <ul
              className={`divide-y text-sm ${
                isDarkMode ? "divide-gray-700" : "divide-gray-200"
              }`}
            >
              <li className="flex items-center py-3">
                <FaUser className="text-purple-600 w-5 h-5 mr-3" />
                <span className="font-medium w-28">Name:</span>
                <span>
                  {person.name.fname} {person.name.lname}
                </span>
              </li>
              <li className="flex items-center py-3">
                <FaBirthdayCake className="text-purple-600 w-5 h-5 mr-3" />
                <span className="font-medium w-28">Birth:</span>
                <span>{person.bio.birth}</span>
              </li>
              <li className="flex items-center py-3">
                <FaHome className="text-purple-600 w-5 h-5 mr-3" />
                <span className="font-medium w-28">Location:</span>
                <span>{person.bio.location.loc}</span>
              </li>
              <li className="flex items-center py-3">
                <FaGlobe className="text-purple-600 w-5 h-5 mr-3" />
                <span className="font-medium w-28">Citizenship:</span>
                <span>{person.bio.citizenship}</span>
              </li>
            </ul>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center">
            <a
              href="/cv-resume/Junior Web Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-600 rounded-4xl flex items-center justify-center h-10 w-40 
              transition-all duration-300 hover:scale-105 hover:bg-green-200 hover:rounded-3xl"
            >
              <span className="font-semibold">RESUME</span>
              <FaDownload className="text-purple-600 w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
