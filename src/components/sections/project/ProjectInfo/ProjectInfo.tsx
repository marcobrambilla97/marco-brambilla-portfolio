import React from "react";

interface IProjectInfoProps {
  label?: string;
  info?: string;
  className?: string;
}

const ProjectInfo = ({ label, info, className }: IProjectInfoProps) => {
  return (
    <div className={`${className} sm:inline-flex sm:flex-col sm:mb-8 sm:pl-8`}>
      <span className="block text-lg text-color-primary/50 font-medium mb-2 dark:text-white/70 sm:text-[1.8rem]">
        {label}
      </span>
      <span className="block">{info}</span>
    </div>
  );
};

export default ProjectInfo;
