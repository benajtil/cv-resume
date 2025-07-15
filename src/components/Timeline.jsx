import React from "react";
import { timeline } from "../constants";

export default function Timeline() {
  const { education, experience } = timeline;

  const renderEntry = (entry, i, isEducation = false) => {
    const isLeft = i % 2 === 0;

    const date = isEducation
      ? `${entry.start} – ${entry.graduated}`
      : `${entry.start} – ${entry.end}`;
    const title = isEducation ? entry.school : entry.title;
    const subtitle = isEducation ? entry.degree : "";
    const desc = entry.description;

    return (
      <div key={i} className="grid grid-cols-9 items-start mb-10">
        {isLeft ? (
          <>
            {}
            <div className="col-start-1 col-span-4 pr-8 text-right">
              <div className="inline-block bg-gray-200 p-6 shadow-lg rounded-lg transition-all ease-in-out hover:bg-amber-200 hover:scale-115 cursor-default">
                <div className="text-sm text-gray-500">{date}</div>
                <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                {subtitle && <div className="text-gray-700"> {subtitle}</div>}
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            </div>

            {}
            <div className="col-start-5 col-span-1 flex justify-center">
              <div className="w-4 h-4 bg-blue-500 rotate-45 border-2 border-white"></div>
            </div>

            {}
            <div className="col-start-6 col-span-4"></div>
          </>
        ) : (
          <>
            {}
            <div className="col-start-1 col-span-4"></div>

            {}
            <div className="col-start-5 col-span-1 flex justify-center">
              <div className="w-4 h-4 bg-blue-500 rotate-45 border-2 border-white"></div>
            </div>

            {}

            {}
            <div className="col-start-6 col-span-4 pl-8 text-left">
              <div className="inline-block bg-gray-200 p-6 shadow-lg rounded-lg transition-all ease-in-out hover:bg-amber-200 hover:scale-115 cursor-default">
                <div className="text-sm text-gray-500">{date}</div>
                <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                {subtitle && <div className="text-gray-700">{subtitle}</div>}
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
      <div className="bg-white h-30 flex justify-center mb-10">
        <h1 className="text-4xl font-bold text-center">TIMELINE</h1>
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
        EMPLOYMENT HISTORY
      </h2>
      <div>{experience.map((entry, i) => renderEntry(entry, i, false))}</div>
      {}
      <div className="text-2xl font-bold text-center mb-8 bg-gray-300  h-4 w-4 flex flex-col justify-center"></div>
    </div>
  );
}
