import React, { useState } from "react";

interface IProjectsSwitchProps {
  onClick: (layout: "grid" | "list") => void;
  activeLayout: "grid" | "list";
}

const ProjectsSwitch = ({ onClick, activeLayout }: IProjectsSwitchProps) => {
  const isGridLayout = activeLayout === "grid";

  const handleClick = (layout: "grid" | "list"): void => {
    onClick(layout);
  };

  return (
    <div className="hidden relative ml-auto border border-white rounded-full w-[14.4rem] h-[4.4rem] sm:flex items-center z-20 mix-blend-difference switcher sm:-top-20">
      <span className="switch">
        <span
          className={`rounded-full bg-white absolute top-1/2 -translate-y-1/2 w-[6rem] h-[2.8rem] -z-10 transition-all duration-500 ease-out ${isGridLayout ? "translate-x-[0.8rem]" : "translate-x-[7.6rem]"}`}
        ></span>
      </span>
      <button
        onClick={() => handleClick("grid")}
        className="w-1/2 text-white text-center cursor-pointer mix-blend-difference"
      >
        Grid
      </button>
      <button
        onClick={() => handleClick("list")}
        className="w-1/2 text-white text-center cursor-pointer mix-blend-difference"
      >
        List
      </button>
    </div>
  );
};

export default ProjectsSwitch;
