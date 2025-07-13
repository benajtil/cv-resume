import React, { useState, useEffect } from "react";
import background from "../assets/background.jpg";
import { person, tagline, typedTitle } from "../constants";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typedTitle.title[index];

    if (!deleting && subIndex === current.text.length) {
      setText(current.text);
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % typedTitle.title.length);
      return;
    }

    const randomSpeed = Math.floor(Math.random() * (120 - 40 + 1)) + 40;

    const timeout = setTimeout(() => {
      setText(current.text.substring(0, subIndex));
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, randomSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  const currentColor = typedTitle.title[index].color;

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-no-repeat"
    >
      {}
      <div className="absolute inset-0">
        <img
          src={background}
          alt="background"
          className="w-full h-screen object-cover z-0"
        />
      </div>
      {}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      {}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center h-full pr-10">
        <header className="w-full text-center text-white space-y-4 cursor-default">
          <h1 className="text-2xl font-bold">{person.name.fullname}</h1>

          <h1
            className={`text-3xl font-bold font-sans min-h-[2rem] ${currentColor}`}
          >
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="p-10 m-10 text-gray-400 text-center text-sm">
            {tagline.tag.split(" ").join("\u00A0\u00A0\u00A0")}
          </p>
        </header>
      </div>
    </section>
  );
};

export default Hero;
