import React from "react";
import {
  FaBookOpen,
  FaBug,
  FaCode,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
  FaLightbulb,
} from "react-icons/fa";

const journalEntries = [
  {
    number: "01",
    category: "Debugging",
    icon: <FaBug />,
    title: "When submitting results reset the statistics",
    context: "Offline Tabulation System",
    problem:
      "During my internship, I encountered a bug in the tabulation system where submitting results caused existing statistics to reset.",
    approach:
      "I investigated the backend behavior and identified that the update process was replacing existing data instead of preserving and updating it correctly.",
    lesson:
      "Database updates need to account for existing records. I also learned the importance of keeping the latest code synchronized, making frequent Git pushes, and preparing backups before deployment.",
    tags: ["PHP", "SQL", "Debugging", "Git"],
  },
  {
    number: "02",
    category: "Architecture",
    icon: <FaDatabase />,
    title: "Connecting the frontend, backend, and database",
    context: "KOMU Community Platform",
    problem:
      "KOMU brings together a React frontend, a PHP backend, and PostgreSQL. The application also includes different administrative roles and session handling.",
    approach:
      "The project requires the frontend, server-side logic, and database operations to work together while respecting the responsibilities of each layer.",
    lesson:
      "A working interface is only one part of an application. I need to consider data validation, permissions, session handling, and how the backend processes requests.",
    tags: ["React", "PHP", "PostgreSQL"],
    link: "https://github.com/benajtil/Komu_Web",
    linkLabel: "View repository",
  },
  {
    number: "03",
    category: "Frontend Development",
    icon: <FaCode />,
    title: "Building a portfolio inspired by Windows 95",
    context: "BenOS Portfolio",
    problem:
      "I wanted my portfolio to feel more personal than a standard portfolio template and reflect my interest in retro computers and interactive interfaces.",
    approach:
      "I developed a Windows 95-inspired portfolio with desktop-style windows, applications, and interactive elements using React and frontend technologies.",
    lesson:
      "Visual design can help a project stand out, but usability still matters. Responsive layouts, clear navigation, and reliable interactions are important parts of the experience.",
    tags: ["React", "Tailwind CSS", "UI Design"],
    link: "https://ben-os.vercel.app/",
    linkLabel: "View live portfolio",
  },
];

const EngineeringJournal = ({ isDarkMode = false }) => {
  const theme = {
    heading: isDarkMode ? "text-gray-100" : "text-gray-500",
    body: isDarkMode ? "text-gray-300" : "text-gray-600",
    muted: isDarkMode ? "text-gray-400" : "text-gray-500",
    card: isDarkMode
      ? "border-white/10 bg-white/[0.035] hover:border-purple-400/40"
      : "border-gray-200 bg-white hover:border-purple-300",
    inset: isDarkMode
      ? "border-white/10 bg-black/20"
      : "border-gray-200 bg-gray-50",
  };

  return (
    <section
      id="engineering-journal"
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 md:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <header className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
              <FaBookOpen />
            </span>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
              Learn · Build · Improve
            </p>
          </div>

          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-5xl ${theme.heading}`}
          >
            Engineering <span className="text-purple-400">Journal</span>
          </h2>

          <p className={`mt-5 text-sm leading-7 sm:text-base ${theme.body}`}>
            Notes from my development journey, including bugs I've encountered,
            technical decisions I've considered, and lessons I've learned while
            building applications.
          </p>
        </header>

        {/* Journal entries */}
        <div className="grid gap-6 lg:grid-cols-2">
          {journalEntries.map((entry, index) => (
            <article
              key={entry.number}
              className={`group flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
                theme.card
              } ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-lg text-purple-400">
                    {entry.icon}
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                      {entry.category}
                    </p>

                    <p className={`mt-1 text-xs ${theme.muted}`}>
                      {entry.context}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-sm font-bold ${theme.muted}`}
                  aria-label={`Journal entry ${entry.number}`}
                >
                  {entry.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`mt-6 text-xl font-bold leading-snug transition-colors group-hover:text-purple-400 sm:text-2xl ${theme.heading}`}
              >
                {entry.title}
              </h3>

              {/* Problem */}
              <div className="mt-6">
                <h4 className={`text-sm font-bold ${theme.heading}`}>
                  The situation
                </h4>

                <p className={`mt-2 text-sm leading-7 ${theme.body}`}>
                  {entry.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="mt-5">
                <h4 className={`text-sm font-bold ${theme.heading}`}>
                  My approach
                </h4>

                <p className={`mt-2 text-sm leading-7 ${theme.body}`}>
                  {entry.approach}
                </p>
              </div>

              {/* Lesson */}
              <div className={`mt-5 rounded-xl border p-4 ${theme.inset}`}>
                <div className="flex items-center gap-2">
                  <FaLightbulb className="shrink-0 text-purple-400" />

                  <h4 className={`text-sm font-bold ${theme.heading}`}>
                    Key takeaway
                  </h4>
                </div>

                <p className={`mt-2 text-sm leading-7 ${theme.body}`}>
                  {entry.lesson}
                </p>
              </div>

              {/* Technology tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                      isDarkMode
                        ? "bg-white/[0.07] text-gray-300"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project link, when available */}
              {entry.link && (
                <div className="mt-6 border-t border-current/10 pt-5">
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:text-purple-300"
                  >
                    {entry.link.includes("github.com") ? (
                      <FaGithub size={16} />
                    ) : (
                      <FaExternalLinkAlt size={13} />
                    )}

                    {entry.linkLabel}
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-10 flex items-start gap-3">
          <FaLightbulb className="mt-1 shrink-0 text-purple-400" />

          <p className={`text-sm leading-7 ${theme.muted}`}>
            This journal documents lessons from my projects and development
            experience. I aim to keep improving through testing, feedback,
            debugging, and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringJournal;
