import { projects } from "../constants";

const Projects = () => {
  return (
    <div
      className="scroll-mt-24 mt-20 pt-16 pb-16  
                bg-slate-950 rounded-4xl  
                max-w-420 mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8 text-white text-center">
        PROJECTS
      </h1>

      <div className="grid grid-cols-4 mt-10 md:px-4 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-200 flex-col relative text-black p-6 rounded-4xl transition-all ease-in-out max-w-100 hover:bg-green-300  hover:scale-105"
          >
            {}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="rounded-md w-full mb-4 object-cover max-h-56"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x300?text=No+Image";
              }}
            />

            {}
            <div className="flex justify-end gap-4 mb-2">
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
                  if (isActive) {
                    classes += "bg-red-500 text-white hover:bg-red-600 ";
                  } else {
                    classes +=
                      "bg-gray-300 text-gray-600 cursor-not-allowed pointer-events-none ";
                  }
                } else {
                  classes += "bg-black/30 hover:underline ";
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

            {}
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-justify line-clamp-5">
              {project.description}
            </p>

            {}
            <div className="mt-4 flex flex-wrap gap-2">
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
