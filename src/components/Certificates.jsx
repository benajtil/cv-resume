import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Certified Enterprise Scripting Architect",
    issuer: "Connectwise University",
    date: "Jul 2024",
    description:
      "RMM, MDM, Powershell, Scripting, Windows Server, Enterprise Architecture, Query Optimization.",
    logo: "https://cdn-icons-png.flaticon.com/512/3197/3197947.png",
    link: "#",
  },
  {
    title: "Google IT Automation With Python",
    issuer: "Google",
    date: "Mar 2023",
    description:
      "Automation, GCP, Cloud Servers & VMs, Version Control Tools, Configuration Management.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "#",
  },
  {
    title: "WHMIS (Worker Health and Safety)",
    issuer: "Government Workforce Requirement",
    date: "Sep 2020",
    description:
      "Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention.",
    logo: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    link: "#",
  },
];

const Certificates = ({ isDarkMode }) => {
  return (
    <section
      id="certificates"
      className="relative max-w-7xl mx-auto px-6 py-20 text-center mt-50"
    >
      <div className="mb-12">
        <p className="uppercase text-sm tracking-widest text-gray-500 dark:text-gray-400">
          Continuous Learning
        </p>
        <h1 className={"text-4xl md:text-5xl font-bold "}>Certifications</h1>
      </div>

      {/* Carousel style layout */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-10">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="w-[280px] md:w-[320px] p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transform perspective-1000"
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={cert.logo}
                alt={cert.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {cert.issuer} &bull; {cert.date}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {cert.description}
            </p>

            {/* Button */}
            <div className="mt-6 flex justify-center">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-full bg-black text-white dark:bg-white dark:text-black transition-all duration-300 hover:scale-105"
              >
                View Credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
