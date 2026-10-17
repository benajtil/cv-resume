import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaLayerGroup,
} from "react-icons/fa";

import komuDashboard from "../assets/album/featured/komu-dashboard.png";

const KOMU_GITHUB = "https://github.com/benajtil/Komu_Web";

const FeaturedWork = ({ isDarkMode = false }) => {
  const theme = {
    heading: isDarkMode ? "text-gray-100" : "text-gray-500",
    body: isDarkMode ? "text-gray-300" : "text-gray-600",
    muted: isDarkMode ? "text-gray-400" : "text-gray-500",

    panel: isDarkMode
      ? "border-white/10 bg-white/[0.035]"
      : "border-gray-200 bg-white",

    inset: isDarkMode
      ? "border-white/10 bg-black/20"
      : "border-gray-200 bg-gray-50",
  };

  const technologies = ["React", "Vite", "PHP", "PostgreSQL"];

  const highlights = [
    {
      icon: <FaLayerGroup size={18} />,
      title: "Role-based administration",
      description:
        "The project structure includes super admin, municipal admin, and barangay admin roles.",
    },
    {
      icon: <FaDatabase size={18} />,
      title: "Database integration",
      description:
        "PostgreSQL is used for application data, alongside backend database operations.",
    },
    {
      icon: <FaShieldAlt size={18} />,
      title: "Session handling",
      description:
        "The codebase includes session-based authentication. Authorization rules should be tested to confirm that each role can access only the appropriate resources.",
    },
  ];

  return (
    <section
      id="featured-work"
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 md:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <header className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
            Beyond the Screenshots
          </p>

          <h2
            className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl ${theme.heading}`}
          >
            Featured <span className="text-purple-400">Work</span>
          </h2>

          <p className={`mt-5 text-sm leading-7 sm:text-base ${theme.body}`}>
            A closer look at a project, the technical decisions behind it, and
            the challenges involved in building a useful application.
          </p>
        </header>

        {/* KOMU case study */}
        <article
          className={`overflow-hidden rounded-3xl border shadow-sm transition-colors duration-300 ${theme.panel}`}
        >
          {/* Project introduction */}
          <div className="relative overflow-hidden border-b border-purple-400/20 bg-gradient-to-br from-[#171324] via-[#24133b] to-[#101018] p-6 text-white sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
            />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-purple-300/30 bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-200">
                  Featured Case Study
                </span>

                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-300">
                  Community Platform
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">
                KOMU
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                KOMU is a community-focused web platform designed around local
                communication and barangay administration. It brings community
                information and administrative tools together in one interface.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-gray-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <div className="mt-8">
                <a
                  href={KOMU_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                >
                  <FaGithub size={17} />
                  View Source Code
                  <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* Actual project screenshot */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-xl">
              {/* Browser-style header */}
              <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span className="ml-3 truncate text-xs font-medium text-gray-500">
                  KOMU — Community Dashboard
                </span>
              </div>

              <img
                src={komuDashboard}
                alt="KOMU dashboard showing the barangay feed, community tools, and important dates"
                className="block h-auto w-full"
                loading="lazy"
              />
            </div>

            <p className={`mt-3 text-center text-xs ${theme.muted}`}>
              Preview of the KOMU application interface
            </p>
          </div>

          {/* Case study details */}
          <div className="grid gap-10 p-6 pt-2 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-10">
            {/* Left column */}
            <div className="space-y-9">
              {/* Overview */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                  01 / Overview
                </p>

                <h4 className={`mt-3 text-xl font-bold ${theme.heading}`}>
                  The idea behind KOMU
                </h4>

                <p className={`mt-3 text-sm leading-7 ${theme.body}`}>
                  KOMU is a community-platform project intended to support local
                  communication and barangay administration. Its technology
                  stack includes React, PHP, and PostgreSQL.
                </p>
              </section>

              {/* Visible features */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                  02 / Application Interface
                </p>

                <h4 className={`mt-3 text-xl font-bold ${theme.heading}`}>
                  Community information in one place
                </h4>

                <p className={`mt-3 text-sm leading-7 ${theme.body}`}>
                  The displayed interface includes a barangay feed, report and
                  concern submission, emergency alert and official Q&A tools,
                  barangay activities, and a calendar for important dates.
                </p>
              </section>

              {/* Technical approach */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                  03 / Technical Approach
                </p>

                <h4 className={`mt-3 text-xl font-bold ${theme.heading}`}>
                  Connecting the application layers
                </h4>

                <p className={`mt-3 text-sm leading-7 ${theme.body}`}>
                  The project combines a React frontend, server-side PHP logic,
                  and PostgreSQL data storage. These layers need to work
                  together for application requests, database operations, and
                  session handling.
                </p>

                <div
                  className={`mt-5 rounded-2xl border p-4 sm:p-5 ${theme.inset}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                      <FaCode size={18} />
                    </span>

                    <div>
                      <p className={`font-semibold ${theme.heading}`}>
                        Application stack
                      </p>

                      <p className={`mt-1 text-sm ${theme.muted}`}>
                        React + Vite / PHP / PostgreSQL
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Development considerations */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                  04 / Development Considerations
                </p>

                <h4 className={`mt-3 text-xl font-bold ${theme.heading}`}>
                  Reliability and access control
                </h4>

                <p className={`mt-3 text-sm leading-7 ${theme.body}`}>
                  A platform with different administrative roles needs clear
                  permission rules, careful input validation, and reliable
                  database operations. These areas should be reviewed and tested
                  as the application develops.
                </p>
              </section>
            </div>

            {/* Right column */}
            <aside>
              <div className={`rounded-2xl border p-5 sm:p-6 ${theme.inset}`}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                  Technical Highlights
                </p>

                <div className="mt-6 space-y-6">
                  {highlights.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                        {item.icon}
                      </div>

                      <div>
                        <h4 className={`font-semibold ${theme.heading}`}>
                          {item.title}
                        </h4>

                        <p className={`mt-2 text-sm leading-6 ${theme.body}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repository card */}
              <div className={`mt-5 rounded-2xl border p-5 ${theme.panel}`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <FaGithub size={22} />
                  </span>

                  <div>
                    <p className={`font-semibold ${theme.heading}`}>
                      Explore the code
                    </p>

                    <p className={`mt-1 text-sm ${theme.muted}`}>
                      KOMU repository
                    </p>
                  </div>
                </div>

                <p className={`mt-4 text-sm leading-6 ${theme.body}`}>
                  Review the repository to explore the project's code and
                  implementation.
                </p>

                <a
                  href={KOMU_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:text-purple-300"
                >
                  View on GitHub
                  <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedWork;
