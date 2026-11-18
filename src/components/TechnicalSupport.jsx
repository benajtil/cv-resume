import React from "react";
import {
  FaDesktop,
  FaTools,
  FaNetworkWired,
  FaBug,
  FaDatabase,
  FaHeadset,
  FaCheckCircle,
  FaLaptop,
} from "react-icons/fa";

const supportAreas = [
  {
    icon: <FaDesktop />,
    title: "Computer Troubleshooting",
    description:
      "Diagnosing common computer problems, resolving system issues, and helping restore normal computer operation.",
    skills: [
      "Windows troubleshooting",
      "Software issues",
      "System maintenance",
    ],
  },
  {
    icon: <FaTools />,
    title: "Hardware & PC Support",
    description:
      "Hands-on experience building PCs, identifying hardware problems, and performing basic hardware maintenance.",
    skills: ["PC assembly", "Hardware diagnosis", "Component installation"],
  },
  {
    icon: <FaNetworkWired />,
    title: "Basic Network Support",
    description:
      "Working with home and small-office network setups, internet connectivity, and Wi-Fi-related issues.",
    skills: ["Wi-Fi troubleshooting", "Router setup", "Connectivity checks"],
  },
  {
    icon: <FaBug />,
    title: "Software Troubleshooting",
    description:
      "Investigating application errors, reproducing issues, testing solutions, and identifying possible causes.",
    skills: ["Error investigation", "Application testing", "Problem solving"],
  },
  {
    icon: <FaDatabase />,
    title: "Database & System Support",
    description:
      "Working with database-backed applications and helping investigate data-related issues during development and testing.",
    skills: ["SQL", "PHP applications", "Data troubleshooting"],
  },
  {
    icon: <FaHeadset />,
    title: "User Assistance",
    description:
      "Communicating with users, understanding reported problems, and explaining technical steps in a clear and simple way.",
    skills: [
      "Customer communication",
      "Issue documentation",
      "User assistance",
    ],
  },
];

const TechnicalSupport = ({ isDarkMode = false }) => {
  const cardClass = isDarkMode
    ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
    : "border-gray-200 bg-white hover:bg-purple-50/50";

  const mutedText = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section
      id="technical-support"
      className="relative overflow-hidden px-5 py-20 sm:px-8"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-purple-500">
            IT & Customer Support
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technical Support
            <span className="text-purple-500">.</span>
          </h2>

          <p className={`mt-5 text-sm leading-7 sm:text-base ${mutedText}`}>
            I enjoy understanding technical problems and finding practical
            solutions. My background in Computer Science, PC building, IT
            troubleshooting, and web development helps me approach issues from
            both a hardware and software perspective.
          </p>
        </div>

        {/* Support cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((item, index) => (
            <article
              key={item.title}
              className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5 ${cardClass}`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-500 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold">{item.title}</h3>

              <p className={`mt-3 min-h-[84px] text-sm leading-6 ${mutedText}`}>
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-xs ${
                      isDarkMode
                        ? "border-white/10 bg-white/5 text-gray-300"
                        : "border-gray-200 bg-gray-50 text-gray-600"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Practical experience */}
        <div
          className={`mt-10 grid gap-6 rounded-3xl border p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center ${
            isDarkMode
              ? "border-purple-500/20 bg-purple-500/[0.06]"
              : "border-purple-200 bg-purple-50/70"
          }`}
        >
          <div>
            <div className="mb-3 flex items-center gap-2 text-purple-500">
              <FaLaptop />
              <span className="text-xs font-bold uppercase tracking-widest">
                Hands-on Background
              </span>
            </div>

            <h3 className="text-xl font-bold sm:text-2xl">
              Practical IT and troubleshooting experience
            </h3>

            <p className={`mt-3 max-w-2xl text-sm leading-7 ${mutedText}`}>
              Beyond software development, I have hands-on experience with PC
              building, computer maintenance, and technical problem-solving. My
              internship also gave me experience testing applications,
              investigating system issues, and working with database-backed
              systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-purple-500">
            <FaCheckCircle />
            <span>Computer Science Graduate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupport;
