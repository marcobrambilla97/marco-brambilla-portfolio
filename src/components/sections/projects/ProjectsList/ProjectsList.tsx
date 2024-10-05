import React, { useState, useEffect } from "react";
import ProjectList from "../../../common/Project/ProjectList";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  IPortfolioProject,
  IWpGatsbyImage,
} from "../../../../types/components-types";

const ProjectsList = ({ projects }: { projects: IPortfolioProject[] }) => {
  const defaultActiveImage: IWpGatsbyImage = {
    node: {
      //@ts-ignore
      gatsbyImage: null,
      altText: "",
    },
  };
  const [activeImage, setActiveImage] = useState<IWpGatsbyImage>(defaultActiveImage);
  const [rightOffset, setRightOffset] = useState(0);

  useEffect(() => {
    const calculateRightOffset = () => {
      const containerWidth = document.querySelector('.sm\\:w-10\\/12')?.clientWidth || 0;
      const screenWidth = window.innerWidth;
      const newOffset = (screenWidth - containerWidth) / 2;
      setRightOffset(newOffset);
    };

    calculateRightOffset();
    window.addEventListener('resize', calculateRightOffset);

    return () => window.removeEventListener('resize', calculateRightOffset);
  }, []);

  const handleMouseEnter = (activeImage: IWpGatsbyImage): void => {
    setActiveImage(activeImage);
  };

  const handleMouseLeave = (): void => {
    setActiveImage(defaultActiveImage);
  };

  return (
    <div className="relative pt-40 mx-auto sm:w-10/12">
      {projects.map((project) => (
        <ProjectList
          key={project.id}
          title={project.title}
          gatsbyImage={project.project.listingImage}
          uri={project.uri}
          onMouseEnter={() => handleMouseEnter(project.project.listingImage)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
      <div 
        className="hidden sm:block fixed top-1/2 -translate-y-1/2 -z-10"
        style={{ right: `${rightOffset}px` }}
      >
        {activeImage.node.gatsbyImage && (
          <GatsbyImage
            image={activeImage.node.gatsbyImage}
            alt={activeImage.node.altText}
            className="animate-reveal w-[50.2rem] h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsList;