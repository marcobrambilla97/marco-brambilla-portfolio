import React, { useRef } from "react";
import Heading from "../../../ui/Heading/Heading";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { IPortfolioProject } from "../../../../types/components-types";
import { motion, useInView } from "framer-motion";

interface INextProjectProps {
  nextProject: IPortfolioProject[];
  currentLang?: string;
}

const NextProject = ({ nextProject, currentLang }: INextProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const project = nextProject[0];
  const isInView = useInView(ref, { once: true });
  const MotionHeading = motion(Heading);

  return (
    <section ref={ref}>
      <div className="flex items-center justify-between pt-4 mb-8 border-t border-color-primary/15 dark:border-white/30 sm:mb-20 sm:pt-6">
        <span className="text-lg sm:text-[1.7rem]">{project.title}</span>
        <div className="flex items-center gap-5">
          {project.terms?.nodes.map((term) => (
            <span
              key={term.id}
              className="block text-color-secondary text-sm sm:text-2xl"
            >
              {term.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col-reverse sm:flex-row sm:items-end">
          <div className="sm:w-1/2 sm:pr-8">
            <div className="overflow-hidden py-5 sm:py-3">
              <MotionHeading
                initial={{ y: 200, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }
                }
                transition={{
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                Tag="span"
                className="block text-3xl leading-none sm:text-[9.6rem]"
                title={
                  currentLang === "IT" ? "Prossimo progetto" : "Next project"
                }
                link={{
                  uri: project.uri,
                }}
                icon={{
                  className: "block size-5 flex-none sm:hidden",
                  pathClassname: "fill-color-primary dark:fill-white",
                }}
              />
            </div>
          </div>
          {project.featuredImage && (
            <div className="sm:w-1/2">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true }}
              >
                <Link to={project.uri} target="_self">
                  <GatsbyImage
                    image={project.featuredImage.node.gatsbyImage}
                    alt={project.featuredImage.node.altText}
                  />
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NextProject;
