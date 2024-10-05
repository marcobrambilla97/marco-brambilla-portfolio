import React, { memo, useRef } from "react";
import Cta from "../../ui/Cta/Cta";
import Project from "../../common/Project/Project";
import Heading from "../../ui/Heading/Heading";
import { motion, useInView } from "framer-motion";
import { IPortfolioProject, IWpCta } from "../../../types/components-types";

interface IProjectsSection {
  projectsSectionTitle: string;
  projectSectionDescription?: string;
  projects: IPortfolioProject[];
  projectsCta: IWpCta;
  projectsCount?: number;
}

const MotionHeading = memo(motion(Heading));

const PageProjectsSection = ({
  projectsSectionTitle,
  projectSectionDescription,
  projects,
  projectsCta,
  projectsCount,
}: IProjectsSection) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const getProjectStyles = (index: number): string => {
    let projectStyles = "";
    switch (index) {
      case 1:
        projectStyles = "sm:ml-[4.16%]";
        break;
      case 2:
        projectStyles = "sm:ml-auto sm:-mt-[33.33%]";
        break;
      case 3:
        projectStyles = "sm:ml-[8.33%] sm:-mt-[12.5%]";
        break;
      default:
        projectStyles;
    }

    return projectStyles;
  };

  const projectSection = projects?.length > 0 && (
    <section className="relative" ref={ref}>
      <div className="mb-16 sm:flex sm:items-end sm:justify-between sm:gap-6 sm:mb-32">
        <div className="sm:w-1/2">
          <div className="overflow-hidden py-3">
            <MotionHeading
              initial={{ y: 120, skewY: 8 }}
              animate={isInView ? { y: 0, skewY: 0 } : { y: 120, skewY: 8 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              Tag="h2"
              className="!text-7xl sm:!text-[12.8rem]"
              title={projectsSectionTitle}
              sup={{
                title: projectsCount ? `(${projectsCount})` : "",
                className: "text-sm sm:text-[16px]",
              }}
            />
          </div>
          <p className="mb-8 mt-3 sm:w-1/2 sm:mt-10 sm:mb-0">{projectSectionDescription}</p>
        </div>
        {projectsCta && (
          <Cta
            to={projectsCta.url}
            target={projectsCta.target}
            text={projectsCta.title}
            variant="outlined"
          />
        )}
      </div>

      {projects?.map((project, index) => (
        <Project
          key={project.id}
          gatsbyImage={project.project.listingImage}
          title={project.title}
          uri={project.uri}
          terms={project?.terms?.nodes}
          className={`sm:w-5/12 ${getProjectStyles(index + 1)}`}
        />
      ))}
    </section>
  );

  return projectSection;
};

export default PageProjectsSection;
