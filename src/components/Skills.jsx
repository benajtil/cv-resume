import React from "react";
import { FaCode, FaDatabase, FaTerminal, FaPalette } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiSqlite,
  SiPython,
  SiOpenjdk,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: <FaCode />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Working with server-side logic and data storage.",
    icon: <FaDatabase />,
    skills: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
  },
  {
    title: "Programming & Data",
    description: "Programming fundamentals and data-focused projects.",
    icon: <FaTerminal />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <SiOpenjdk /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Design & IT",
    description: "Creative work and hands-on computer support.",
    icon: <FaPalette />,
    skills: [
      { name: "Graphic Design", icon: <FaPalette /> },
      { name: "PC Building", icon: <FaTerminal /> },
      { name: "Troubleshooting", icon: <FaCode /> },
    ],
  },
];

export default function Skills({ isDarkMode = false }) {
  const cardTheme = isDarkMode
    ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
    : "border-gray-200 bg-white hover:bg-purple-50/60";

  const headingColor = isDarkMode ? "text-white" : "text-gray-500";
  const mutedColor = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-500">
            My Toolkit
          </p>

          <h2
            className={`mt-4 text-3xl font-extrabold sm:text-5xl ${headingColor}`}
          >
            Skills & <span className="text-purple-500">Technologies</span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${mutedColor}`}
          >
            The tools and technologies I've used across my projects and studies.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-lg ${
                isDarkMode
                  ? "hover:shadow-purple-950/20"
                  : "hover:shadow-purple-100"
              } ${cardTheme}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-500">
                  {group.icon}
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${headingColor}`}>
                    {group.title}
                  </h3>
                  <p className={`mt-1 text-sm leading-6 ${mutedColor}`}>
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                      isDarkMode
                        ? "border-white/10 bg-black/20 text-gray-200"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    <span className="text-purple-400">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
