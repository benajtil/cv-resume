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
            {/* responsive image */}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x300?text=No+Image";
              }}
            />

            {/* overlay */}
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
                {/* links */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(project.url).map(([key, value]) => {
                    const isLive = key === "live" && project.live;
                    const href = value.startsWith("http")
                      ? value
                      : `https://${value}`;

                    return (
                      <a
                        key={key}
                        href={isLive ? href : href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          px-3 py-1 rounded text-xs uppercase
                          ${
                            isLive
                              ? "bg-red-500 text-white hover:bg-red-600"
                              : "bg-gray-300 text-gray-800 cursor-not-allowed pointer-events-none line-through"
                          }
                        `}
                      >
                        {key}
                      </a>
                    );
                  })}
                </div>

                {/* languages */}
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
