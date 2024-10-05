import React from "react";
import { IPortfolioProject } from "../../../../types/components-types";
import Project from "../../../common/Project/Project";

const ProjectsGrid = ({ projects }: { projects: IPortfolioProject[] }) => {
  const getProjectStyles = (index: number): string => {
    let className =
      (index + 1) % 2 === 0
        ? "sm:ml-auto sm:-mt-[33.33%]"
        : index + 1 === 1
          ? "sm:ml-[4.16%] sm:mt-0"
          : "sm.-mt-[14.4rem] sm:ml-[4.16%]";
    return className;
  };

  return (
    <div className="relative pt-8 sm:pt-40">
      {projects.map((project, index) => (
        <Project
          key={project.id}
          title={project.title}
          gatsbyImage={project.project.listingImage}
          uri={project.uri}
          terms={project.terms?.nodes}
          className={`sm:w-5/12 ${getProjectStyles(index)}`}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
