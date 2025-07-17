import React from "react";
import { timeline } from "../constants";

const Timeline = () => {
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
      <div key={i} className="grid grid-cols-9 items-start mb-10">
        {isLeft ? (
          <>
            {}
            <div className="col-span-4 pr-8 text-right">
              <div className="inline-block bg-gray-200 p-6 shadow-lg rounded-lg transition-all ease-in-out hover:bg-green-300 hover:scale-105">
                <div className="text-sm text-gray-500">{date}</div>
                {}
                <div className="flex justify-end space-x-4">
                  {entry.logo?.length > 0 && (
                    <div className="flex my-2 inset-y-0 right-0 flex-shrink-0 items-center h-auto w-auto">
                      {entry.logo.map((lg, idx) => (
                        <img
                          key={idx}
                          src={lg}
                          alt={`${title} logo`}
                          className="w-auto h-8 object-contain px-1.5"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                {subtitle && (
                  <div className="text-gray-700 mt-1">{subtitle}</div>
                )}
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            </div>

            {}
            <div className="col-span-1 flex justify-center">
              <div className="w-4 h-4 bg-blue-500 rotate-45 border-2 border-white" />
            </div>

            {}
            <div className="col-span-4" />
          </>
        ) : (
          <>
            {}
            <div className="col-span-4" />

            {}
            <div className="col-span-1 flex justify-center">
              <div className="w-4 h-4 bg-blue-500 rotate-45 border-2 border-white" />
            </div>

            {}
            <div className="col-span-4 pl-8 text-left">
              <div className="inline-block bg-gray-200 p-6 shadow-lg rounded-lg transition-all ease-in-out hover:bg-green-300 hover:scale-105">
                <div className="text-sm text-gray-500">{date}</div>

                {logo && (
                  <div className="flex my-2 inset-y-0 right-0 flex-shrink-0 items-center h-auto w-9">
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                )}

                <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                {subtitle && (
                  <div className="text-gray-700 mt-1">{subtitle}</div>
                )}
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {}

      <div className="bg-white h-30 flex justify-center">
        <h1 className="text-4xl font-bold text-center">TIMELINE</h1>
      </div>
      <div className="relative ">
        <div className="relative left-1/2 -translate-x-1/2 bg-gray-300 h-4 w-4 flex mb-10 rounded-full"></div>
      </div>
      {}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2 -z-10" />
      {}
      <h2 className="text-2xl font-bold text-center bg-white h-20 flex flex-col justify-center relative ">
        EDUCATION
      </h2>
      <div className="mb-16">
        {education.map((entry, i) => renderEntry(entry, i, true))}
      </div>
      {}
      <h2 className="text-2xl font-bold text-center mb-8 bg-white h-20 flex flex-col justify-center">
        HISTORY
      </h2>
      <div>{experience.map((entry, i) => renderEntry(entry, i, false))}</div>
      {}
      <div className="relative">
        <div className="relative left-1/2 -translate-x-1/2 bg-gray-300 h-4 w-4 rounded-full"></div>
      </div>
    </div>
  );
};

export default Timeline;
