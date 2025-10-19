import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Album = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imported = import.meta.glob(
      "../assets/album/*.{png,jpg,jpeg,webp,gif}",
      { eager: true, import: "default" }
    );

    const arr = Object.values(imported).map((src, i) => ({
      id: i + 1,
      src,
      title: `Project ${i + 1}`,
    }));

    setImages(arr.sort(() => Math.random() - 0.5));
  }, []);

  // Split into rows of 5
  const rows = [];
  for (let i = 0; i < images.length; i += 5) rows.push(images.slice(i, i + 5));

  const handleSpin = (e) => {
    const card = e.currentTarget;
    card.animate(
      [
        { transform: "rotateY(0deg) scale(1)" },
        { transform: "rotateY(360deg) scale(1.1)" },
        { transform: "rotateY(720deg) scale(1)" },
      ],
      {
        duration: 2000,
        easing: "ease-in-out",
      }
    );
  };

  return (
    <section
      id="album"
      className=" relative min-h-[100vh] flex flex-col justify-center items-center bg-[var(--background)] text-[var(--foreground)] overflow-hidden px-4 sm:px-8"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 tracking-wider select-none text-center">
        Album
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
        {" "}
        A visual collection of my favorite projects and creative experiments —
        snapshots of the ideas I’ve brought to life through design, code, and
        collaboration.{" "}
      </p>

      {/* Album rows */}
      <div className="relative w-full flex flex-col items-center justify-center gap-12 overflow-hidden">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={` flex gap-90 sm:gap-70 ${
              rowIndex % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            animate={{
              x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-40%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
              repeatType: "loop",
            }}
            onAnimationIteration={() => {
              setImages((prev) => [...prev].sort(() => Math.random() - 0.5));
            }}
          >
            {[...row, ...row].map((img, i) => (
              <motion.div
                key={`${rowIndex}-${i}-${img.id}`}
                className="relative w-[160px] h-[110px] sm:w-[220px] sm:h-[150px] md:w-[260px] md:h-[180px] rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 cursor-pointer flex-shrink-0"
                onClick={handleSpin}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="album-images absolute inset-0 bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: `url(${img.src})`,
                    filter: "brightness(0.95)",
                  }}
                ></div>
                <p className="absolute bottom-2 left-2 text-white text-xs sm:text-sm md:text-base font-bold drop-shadow-lg">
                  {img.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Edge fade gradients */}
      <div className="absolute inset-y-0 left-0 w-32 sm:w-40 bg-gradient-to-r from-[var(--background)] via-transparent to-transparent blur-xl pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 sm:w-40 bg-gradient-to-l from-[var(--background)] via-transparent to-transparent blur-xl pointer-events-none" />
    </section>
  );
};

export default Album;
