import { useState } from "react";
import { projects } from "../constants";

const Projects = ({ isDarkMode }) => {
  const categories = ["All", "Software", "Data", "Graphic", "Others"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (proj) =>
            proj.category &&
            proj.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section
      id="projects"
      className="bg-[var(--background)] py-20 px-6 md:px-12"
    >
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1
          className={`text-4xl md:text-5xl font-bold ${
            isDarkMode ? "text-gray-50" : "text-gray-700"
          } mb-4`}
        >
          Selected <span className="text-purple-600">Projects</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A curated selection of my works showcasing creativity, design, and
          technical expertise across multiple disciplines.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Project Grid */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 transition-all duration-500">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj, i) => (
            <div
              key={i}
              className={`bg-gray-50 rounded-3xl overflow-hidden shadow-md transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl ${
                i % 2 === 1 ? "md:translate-y-24" : ""
              }`}
            >
              {/* Image Section */}
              <div className="px-6 pt-6">
                <div className="relative bg-gray-100 rounded-3xl overflow-hidden group">
                  <a
                    href={proj.url?.live ? `https://${proj.url.live}` : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/800x1200?text=Preview+Unavailable")
                      }
                    />
                  </a>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 space-y-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {proj.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {proj.description}
                </p>

                {/* Languages */}
                {proj.languages?.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-3 py-2">
                    {proj.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="text-sm bg-gray-200 text-gray-700 font-semibold px-3 py-1 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex justify-center gap-4 pt-4">
                  {proj.url?.live && proj.live && (
                    <a
                      href={`https://${proj.url.live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-3xl font-semibold text-white bg-purple-600 border-2 border-transparent transition-all hover:bg-white hover:text-purple-600 hover:border-purple-600"
                    >
                      View Live
                    </a>
                  )}
                  {proj.url?.github && (
                    <a
                      href={proj.url.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-3xl font-semibold text-purple-600 border-2 border-purple-600 transition-all hover:bg-purple-600 hover:text-white"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-2">
            No projects found in this category.
          </p>
        )}
      </main>
    </section>
  );
};

export default Projects;
