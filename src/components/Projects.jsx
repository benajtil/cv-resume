import { projects } from "../constants";

const Projects = () => {
  return (
    <div className="scroll-mt-24 mt-20 pt-16 pb-16 bg-slate-950 rounded-4xl max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-white text-center">
        PROJECTS
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x300?text=No+Image";
              }}
            />

            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(project.url).map(([key, value]) => {
                    const isLiveLink = key === "live";
                    const isActive = project.live;
                    const href = isLiveLink
                      ? isActive
                        ? value.startsWith("http")
                          ? value
                          : `https://${value}`
                        : undefined
                      : value.startsWith("http")
                      ? value
                      : `https://${value}`;

                    let classes = "px-3 py-1 rounded text-xs uppercase ";

                    if (isLiveLink) {
                      classes += isActive
                        ? "bg-red-500 text-white hover:bg-red-600 "
                        : "bg-gray-300 text-gray-600 cursor-not-allowed pointer-events-none ";
                    } else if (key === "github") {
                      classes += "bg-gray-800 text-white hover:bg-gray-900 ";
                    } else {
                      classes += "bg-gray-300 text-gray-800 hover:bg-gray-400 ";
                    }

                    return (
                      <a
                        key={key}
                        href={href}
                        target={isLiveLink && !isActive ? undefined : "_blank"}
                        rel={
                          isLiveLink && !isActive
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className={classes}
                      >
                        {key}
                      </a>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="bg-amber-300 text-black text-xs font-medium px-2 py-1 rounded"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
