import React from "react";
import { timeline } from "../constants";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Timeline = ({ isDarkMode = false }) => {
  const { education = [], experience = [] } = timeline;

  const theme = {
    card: isDarkMode
      ? "border-white/10 bg-[#171720] hover:border-purple-400/40"
      : "border-gray-200 bg-white hover:border-purple-300",
    text: isDarkMode ? "text-gray-100" : "text-gray-500",
    muted: isDarkMode ? "text-gray-300" : "text-gray-500",
    description: isDarkMode ? "text-gray-300" : "text-gray-600",
    line: isDarkMode ? "bg-white/25" : "bg-gray-300",
    marker: isDarkMode ? "bg-[#171720]" : "bg-white",
  };

  const renderEntry = (entry, index, isEducation) => {
    const title = isEducation ? entry.school : entry.title;
    const subtitle = isEducation ? entry.degree : null;

    const date = isEducation
      ? [entry.start, entry.graduated].filter(Boolean).join(" – ")
      : [entry.start, entry.end].filter(Boolean).join(" – ");

    const logos = Array.isArray(entry.logo)
      ? entry.logo
      : entry.logo
        ? [entry.logo]
        : [];

    const isLeft = index % 2 === 0;

    return (
      <article
        key={`${title}-${entry.start}-${index}`}
        className="relative grid grid-cols-1 pb-7 pl-8 md:grid-cols-[1fr_3rem_1fr] md:gap-0 md:pb-10 md:pl-0"
      >
        {/* Timeline marker */}
        <span
          aria-hidden="true"
          className={`absolute left-[3px] top-6 z-10 h-3.5 w-3.5 rotate-45 border-2 border-purple-400 ${theme.marker} shadow-[0_0_12px_rgba(168,85,247,0.3)] md:left-1/2 md:-translate-x-1/2`}
        />

        {/* Left card */}
        <div className="min-w-0 md:col-start-1 md:row-start-1 md:pr-6">
          {isLeft && (
            <TimelineCard
              title={title}
              subtitle={subtitle}
              date={date}
              description={entry.description}
              logos={logos}
              isEducation={isEducation}
              theme={theme}
            />
          )}
        </div>

        {/* Center gutter */}
        <div className="hidden md:col-start-2 md:row-start-1 md:block" />

        {/* Right card */}
        <div className="min-w-0 md:col-start-3 md:row-start-1 md:pl-6">
          {!isLeft && (
            <TimelineCard
              title={title}
              subtitle={subtitle}
              date={date}
              description={entry.description}
              logos={logos}
              isEducation={isEducation}
              theme={theme}
            />
          )}
        </div>
      </article>
    );
  };

  const renderSection = (title, entries, isEducation) => {
    const Icon = isEducation ? FaGraduationCap : FaBriefcase;

    return (
      <section className="relative mb-16 last:mb-0">
        <div className="relative z-10 mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-500/10 text-xl text-purple-400">
            <Icon />
          </div>

          <div>
            <h2 className={`text-xl font-bold sm:text-2xl ${theme.text}`}>
              {title}
            </h2>
            <p className={`mt-1 text-sm ${theme.muted}`}>
              {isEducation
                ? "The foundation of my technical journey"
                : "The work, skills, and experience I've built"}
            </p>
          </div>
        </div>

        {entries.length > 0 ? (
          <div className="relative">
            <div
              aria-hidden="true"
              className={`absolute bottom-0 left-[9px] top-0 w-px md:left-1/2 md:-translate-x-1/2 ${theme.line}`}
            />

            <div className="relative">
              {entries.map((entry, index) =>
                renderEntry(entry, index, isEducation),
              )}
            </div>
          </div>
        ) : (
          <p className={`text-sm ${theme.muted}`}>No entries added yet.</p>
        )}
      </section>
    );
  };

  return (
    <section
      id="timeline"
      className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
    >
      {/* Background glow stays inside this section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-32 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-16 text-center sm:mb-20">
          <span className="inline-flex items-center rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-purple-400">
            My Journey
          </span>

          <h1
            className={`mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${theme.text}`}
          >
            My <span className="text-purple-400">Timeline</span>
          </h1>

          <p
            className={`mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base ${theme.muted}`}
          >
            My education, professional experience, and the journey that shaped
            me as a developer and creative technologist.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />
        </header>

        {renderSection("Education", education, true)}
        {renderSection("Experience", experience, false)}
      </div>
    </section>
  );
};

const TimelineCard = ({
  title,
  subtitle,
  date,
  description,
  logos,
  isEducation,
  theme,
}) => (
  <div
    className={`group relative h-full overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${theme.card}`}
  >
    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-transparent" />

    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <span
        className={`inline-flex items-center gap-2 text-xs font-medium sm:text-sm ${theme.muted}`}
      >
        <FaCalendarAlt className="shrink-0 text-purple-400" />
        {date || "Date not specified"}
      </span>

      {logos.length > 0 && (
        <div className="flex items-center gap-2">
          {logos.map((logo, index) => (
            <img
              key={`${logo}-${index}`}
              src={logo}
              alt={`${title} logo ${index + 1}`}
              loading="lazy"
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          ))}
        </div>
      )}
    </div>

    <h3
      className={`text-lg font-bold leading-snug transition-colors group-hover:text-purple-400 sm:text-xl ${theme.text}`}
    >
      {title}
    </h3>

    {subtitle && (
      <p className="mt-2 text-sm font-medium text-purple-400">{subtitle}</p>
    )}

    {description && (
      <p
        className={`mt-3 text-sm leading-7 sm:text-[15px] ${theme.description}`}
      >
        {description}
      </p>
    )}

    <div className="mt-5 flex items-center gap-2">
      <span className="h-1 w-8 rounded-full bg-purple-500 transition-all duration-300 group-hover:w-14" />
      <span
        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${theme.muted}`}
      >
        {isEducation ? "Education" : "Experience"}
      </span>
    </div>
  </div>
);

export default Timeline;
