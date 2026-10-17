import React, { useMemo, useState } from "react";
import {
  FaCheck,
  FaUser,
  FaHome,
  FaDownload,
  FaCode,
  FaServer,
  FaLayerGroup,
  FaExternalLinkAlt,
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
import { FaJava } from "react-icons/fa";
import { about, person, projects } from "../constants";
import profilePic from "../assets/bg1.jpg";
import profileBorder from "../assets/border.gif";
import { LogoLoop } from "./extra/LogoLoop";

export default function About({ isDarkMode = false }) {
  const [selectedTech, setSelectedTech] = useState("React");

  const techLogos = [
    {
      node: <SiHtml5 className="text-orange-500" />,
      title: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      node: <SiCss3 className="text-blue-500" />,
      title: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <SiJavascript className="text-yellow-400" />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiReact className="text-cyan-400" />,
      title: "React",
      href: "https://react.dev/",
    },
    {
      node: <SiTailwindcss className="text-sky-400" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
    },
    {
      node: <SiPhp className="text-indigo-400" />,
      title: "PHP",
      href: "https://www.php.net/",
    },
    {
      node: <SiMysql className="text-blue-400" />,
      title: "MySQL",
      href: "https://www.mysql.com/",
    },
    {
      node: <SiSqlite className="text-cyan-400" />,
      title: "SQLite",
      href: "https://www.sqlite.org/",
    },
    {
      node: <FaJava className="text-orange-400" />,
      title: "Java",
      href: "https://www.java.com/",
    },
    {
      node: <SiPython className="text-yellow-300" />,
      title: "Python",
      href: "https://www.python.org/",
    },
  ];

  const techOptions = [
    "React",
    "JavaScript",
    "PHP",
    "MySQL",
    "SQLite",
    "Python",
    "HTML",
    "CSS",
    "Tailwind",
    "Java",
  ];

  const matchingProjects = useMemo(() => {
    return projects.filter((project) =>
      (project.languages || []).some(
        (language) =>
          language.toLowerCase() === selectedTech.toLowerCase() ||
          (selectedTech === "Tailwind" &&
            language.toLowerCase() === "tailwind css"),
      ),
    );
  }, [selectedTech]);

  const capabilityCards = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Building responsive interfaces and interactive web experiences with attention to usability and design.",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Working with server-side logic, database operations, and the application features that power websites.",
      tags: ["PHP", "MySQL", "SQL"],
    },
    {
      icon: <FaLayerGroup />,
      title: "Full-Stack Applications",
      description:
        "Connecting frontend interfaces with backend functionality and data to build complete web applications.",
      tags: ["Frontend", "Backend", "Database"],
    },
  ];

  const cardClass = isDarkMode
    ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
    : "border-gray-200 bg-white hover:bg-purple-50/60";

  const mutedText = isDarkMode ? "text-gray-300" : "text-gray-400";

  return (
    <section
      id="about"
      className={`relative overflow-hidden px-4 py-20 transition-colors duration-500 sm:px-6 lg:px-16 ${
        isDarkMode ? "text-white" : "text-gray-500"
      }`}
    >
      <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
            Get to know me
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            About <span className="text-purple-600">Me</span>
          </h2>

          <p className={`mx-auto mt-5 max-w-2xl leading-7 ${mutedText}`}>
            A Computer Science graduate who enjoys building software, solving
            problems, and combining technology with creative design.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-purple-600" />
        </div>

        {/* Profile and introduction */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-14">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                My <span className="text-purple-600">Journey</span>
              </h3>

              <p
                className={`text-justify text-sm leading-8 sm:text-base ${mutedText}`}
              >
                {about.bio.aboutme.trim()}
              </p>
            </div>

            {/* What I build */}
            <div>
              <h3 className="mb-5 text-2xl font-bold">
                What I <span className="text-purple-600">Build</span>
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {capabilityCards.map((item) => (
                  <article
                    key={item.title}
                    className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 ${cardClass}`}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600/10 text-xl text-purple-500 transition group-hover:bg-purple-600 group-hover:text-white">
                      {item.icon}
                    </div>

                    <h4 className="mb-3 font-bold">{item.title}</h4>

                    <p className={`text-sm leading-6 ${mutedText}`}>
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-purple-600/10 px-2 py-1 text-xs font-medium text-purple-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Profile card */}
          <aside
            className={`mx-auto w-full max-w-[320px] rounded-2xl border p-5 shadow-xl shadow-purple-950/5 ${cardClass}`}
          >
            <div className="profileimages group relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl bg-purple-600/10">
              <img
                src={profilePic}
                alt={`Portrait of ${person.name.fullname}`}
                loading="lazy"
                className="photo-transition h-full w-full object-cover"
              />

              <img
                src={profileBorder}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-xl font-extrabold">{person.name.fullname}</h3>

              <p className="mt-1 text-sm text-purple-500">
                Computer Science Graduate
              </p>
            </div>

            <div
              className={`mt-5 space-y-4 border-t pt-5 ${
                isDarkMode ? "border-white/10" : "border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <FaUser className="mt-1 shrink-0 text-purple-500" />
                <div>
                  <p className="text-xs text-gray-500">Focus</p>
                  <p className="text-sm font-medium">Full-Stack Development</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaHome className="mt-1 shrink-0 text-purple-500" />
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium">
                    {person.bio.location.loc}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/resume/Junior%20Software%20Developer.pdf"
              download
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-purple-600 px-4 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
            >
              Download Résumé
              <FaDownload />
            </a>
          </aside>
        </div>

        {/* Technology showcase */}
        <div className="mt-20">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-500">
              My toolkit
            </p>

            <h3 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Technologies & <span className="text-purple-600">Tools</span>
            </h3>

            <p
              className={`mx-auto mt-3 max-w-xl text-sm leading-7 ${mutedText}`}
            >
              Technologies I've worked with across my projects and studies.
              Select one below to explore related projects.
            </p>
          </div>

          <div className="relative mb-6 h-28 overflow-hidden sm:h-32">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={42}
              gap={36}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Technologies and development tools"
            />
          </div>

          {/* Interactive technology filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {techOptions.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setSelectedTech(tech)}
                aria-pressed={selectedTech === tech}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  selectedTech === tech
                    ? "border-purple-600 bg-purple-600 text-white"
                    : isDarkMode
                      ? "border-white/15 bg-white/5 hover:border-purple-500 hover:text-purple-400"
                      : "border-gray-200 bg-white hover:border-purple-500 hover:text-purple-600"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Matching projects */}
          <div className={`mt-6 rounded-2xl border p-5 sm:p-6 ${cardClass}`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">
                  Selected technology
                </p>

                <h4 className="mt-1 text-xl font-bold">{selectedTech}</h4>
              </div>

              <span className={`text-sm ${mutedText}`}>
                {matchingProjects.length}{" "}
                {matchingProjects.length === 1 ? "project" : "projects"} found
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {matchingProjects.length > 0 ? (
                matchingProjects.map((project) => (
                  <div
                    key={project.title}
                    className={`flex items-center justify-between gap-3 rounded-xl border p-4 ${
                      isDarkMode
                        ? "border-white/10 bg-black/10"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="font-semibold">{project.title}</p>

                      <p className={`mt-1 text-xs ${mutedText}`}>
                        {(project.languages || []).join(" · ")}
                      </p>
                    </div>

                    <FaCheck
                      className="shrink-0 text-purple-500"
                      aria-label="Technology listed in project"
                    />
                  </div>
                ))
              ) : (
                <p className={`py-3 text-sm leading-6 ${mutedText}`}>
                  No projects currently list {selectedTech}. Add a project that
                  uses this technology when you have one to showcase.
                </p>
              )}
            </div>

            <a
              href="#projects"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-purple-500 transition hover:text-purple-400"
            >
              Explore all projects
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
