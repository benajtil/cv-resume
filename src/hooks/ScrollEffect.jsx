import React from "react";
import useInView from "./useInView";

const ScrollEffect = ({ children, direction = "up" }) => {
  const [ref, isInView] = useInView();

  const directionClasses = {
    up: isInView ? "translate-y-0" : "translate-y-10",
    down: isInView ? "translate-y-0" : "-translate-y-10",
    left: isInView ? "translate-x-0" : "translate-x-100",
    right: isInView ? "translate-x-0" : "-translate-x-20",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform
        ${isInView ? "opacity-100" : "opacity-0"} ${
        directionClasses[direction]
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollEffect;
