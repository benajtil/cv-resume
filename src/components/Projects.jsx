import React, { useState } from "react";
import { projects } from "../constants";
import GraphicDesignSlideshow from "./GraphicDesign.jsx";

const Projects = ({ isDarkMode = false }) => {
  const categories = ["All", "Software", "Data", "Graphic", "Others"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category?.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const headingColor = isDarkMode ? "text-gray-100" : "text-gray-500";
  const mutedColor = isDarkMode ? "text-gray-300" : "text-gray-600";

  const cardStyle = isDarkMode
    ? "border-white/10 bg-white/[0.04] hover:border-purple-400/40"
    : "border-gray-200 bg-white hover:border-purple-300";

  const tagStyle = isDarkMode
    ? "border-white/10 bg-white/[0.06] text-gray-200"
    : "border-gray-200 bg-gray-100 text-gray-700";

  const liveUrl = (url) => {
    if (!url) return null;
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  };

  return (
    <section
      id="projects"
      className="px-4 py-20 transition-colors duration-300 sm:px-6 md:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <header className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
            What I've Built
          </p>

          <h1
            className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl ${headingColor}`}
          >
            Selected <span className="text-purple-400">Projects</span>
          </h1>

          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${mutedColor}`}
          >
            A selection of my software projects, data work, and creative
            designs, showcasing how I combine technical skills with creativity.
          </p>

          {/* Category filters */}
          <div
            className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => {
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 ${
                    isSelected
                      ? "border-purple-500 bg-purple-600 text-white shadow-md shadow-purple-500/20"
                      : isDarkMode
                        ? "border-white/10 bg-white/[0.04] text-gray-300 hover:border-purple-400/50 hover:text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:text-purple-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </header>

        {/* Graphic design showcase */}
        <section className="mb-16">
          <GraphicDesignSlideshow />
        </section>

        {/* Project grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const demoUrl =
                project.url?.live && project.live
                  ? liveUrl(project.url.live)
                  : null;

              return (
                <article
                  key={`${project.title}-${index}`}
                  className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    cardStyle
                  } ${
                    isDarkMode
                      ? "hover:shadow-purple-950/20"
                      : "hover:shadow-purple-100"
                  }`}
                >
                  {/* Project image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center ${
                          isDarkMode ? "bg-white/5" : "bg-gray-100"
                        }`}
                      >
                        <span className={`text-sm ${mutedColor}`}>
                          Preview coming soon
                        </span>
                      </div>
                    )}

                    {project.category && (
                      <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Project information */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2
                      className={`text-xl font-bold transition-colors group-hover:text-purple-400 ${headingColor}`}
                    >
                      {project.title}
                    </h2>

                    <p
                      className={`mt-3 flex-1 text-sm leading-7 ${mutedColor}`}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.languages?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.languages.map((language, languageIndex) => (
                          <span
                            key={`${language}-${languageIndex}`}
                            className={`rounded-md border px-2.5 py-1 text-xs font-medium ${tagStyle}`}
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Project links */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-current/10 pt-5">
                      {demoUrl && (
                        <a
                          href={demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                        >
                          View Live{" "}
                          <span className="ml-2" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      )}

                      {project.url?.github && (
                        <a
                          href={project.url.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                            isDarkMode
                              ? "border-white/15 text-gray-200 hover:border-purple-400 hover:text-white"
                              : "border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-700"
                          }`}
                        >
                          GitHub{" "}
                          <span className="ml-2" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div
            className={`rounded-2xl border border-dashed p-10 text-center ${
              isDarkMode ? "border-white/15" : "border-gray-300"
            }`}
          >
            <p className={`text-base ${mutedColor}`}>
              No projects found in this category.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-sm font-semibold text-purple-400 hover:text-purple-300"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
