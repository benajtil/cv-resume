import React from "react";
import { timeline } from "../constants";

const Timeline = ({ isDarkMode }) => {
  const { education, experience } = timeline;

  const renderEntry = (entry, i, isEducation = false) => {
    const isLeft = i % 2 === 0;
    const date = isEducation
      ? `${entry.start} – ${entry.graduated}`
      : `${entry.start} – ${entry.end}`;
    const title = isEducation ? entry.school : entry.title;
    const subtitle = isEducation ? entry.degree : "";
    const desc = entry.description;
    const logo = entry.logo;

    return (
      <div
        key={i}
        className="relative flex flex-col md:grid md:grid-cols-9 items-start mb-10"
      >
        {/* Left side (Education or Experience) */}
        {isLeft ? (
          <>
            <div className="md:col-span-4 md:pr-8 text-right md:text-right text-left w-full md:w-auto">
              <div
                className="
                  inline-block p-6 rounded-lg shadow-md border
                  border-[var(--border-color)]
                  bg-white dark:bg-[var(--accent)]
                  transition-transform duration-300 hover:scale-105
                  w-full
                "
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {date}
                </div>

                {/* Logos */}
                {entry.logo?.length > 0 && (
                  <div className="flex justify-end md:justify-end mt-2 space-x-2">
                    {entry.logo.map((lg, idx) => (
                      <img
                        key={idx}
                        src={lg}
                        alt={`${title} logo`}
                        className="w-auto h-6 object-contain"
                      />
                    ))}
                  </div>
                )}

                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                {subtitle && (
                  <div className="text-black dark:text-gray-400 mt-1">
                    {subtitle}
                  </div>
                )}
                <p className={`mt-2 `}>{desc}</p>
              </div>
            </div>

            {/* Diamond center */}
            <div className="hidden md:flex md:col-span-1 justify-center my-4 md:my-0">
              <div className="w-4 h-4 bg-purple-400 rotate-45 border-2 border-white dark:border-neutral-900" />
            </div>

            <div className="hidden md:block md:col-span-4" />
          </>
        ) : (
          <>
            <div className="hidden md:block md:col-span-4" />
            <div className="hidden md:flex md:col-span-1 justify-center my-4 md:my-0">
              <div className="w-4 h-4 bg-purple-400  rotate-45 border-2 border-white dark:border-neutral-900" />
            </div>

            {/* Right side */}
            <div className="md:col-span-4 md:pl-8 text-left w-full">
              <div
                className="
                  inline-block p-6 rounded-lg shadow-md border
                  border-[var(--border-color)]
                  bg-white dark:bg-[var(--accent)]
                  transition-transform duration-300 hover:scale-105
                  w-full
                "
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {date}
                </div>

                {logo && (
                  <div className="flex my-2 flex-shrink-0 items-center h-auto w-auto">
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                )}

                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                {subtitle && (
                  <div className="text-gray-600 dark:text-gray-400 mt-1">
                    {subtitle}
                  </div>
                )}
                <p className="mt-2 ">{desc}</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Title */}
      <div className="flex justify-center mb-6">
        <h1 className="text-4xl font-bold text-center text-[var(--foreground)] select-none bg-[var(--background)] px-4 py-2 rounded-md">
          Time<span className="text-purple-600">line</span>
        </h1>
      </div>

      {/* Top dot */}
      <div className="relative left-1/2 -translate-x-1/2 bg-gray-300 dark:bg-gray-600 h-4 w-4 flex mb-10 rounded-full"></div>
      {/* Center vertical line (hidden on mobile) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 -z-10" />

      {/* Education Section */}
      <h2 className="text-2xl font-bold text-center h-20 flex flex-col justify-center text-[var(--foreground)] select-none bg-[var(--background)]">
        EDUCATION
      </h2>
      <div className="mb-16">
        {education.map((entry, i) => renderEntry(entry, i, true))}
      </div>

      {/* History Section */}
      <h2 className="text-2xl font-bold text-center mb-8 h-20 flex flex-col justify-center text-[var(--foreground)] select-none bg-[var(--background)]">
        HISTORY
      </h2>
      <div>{experience.map((entry, i) => renderEntry(entry, i, false))}</div>

      {/* Bottom dot */}
      <div className="relative left-1/2 -translate-x-1/2 bg-gray-300 dark:bg-gray-600 h-4 w-4 rounded-full mt-10"></div>
    </div>
  );
};

export default Timeline;
