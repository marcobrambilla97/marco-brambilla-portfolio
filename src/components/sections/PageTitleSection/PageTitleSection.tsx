import React, { useRef } from "react";
import Heading from "../../ui/Heading/Heading";
import ProjectInfoGroup from "../project/ProjectInfoGroup/ProjectInfoGroup";
import { motion, useInView } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import { IPageTitleSection } from "../../../types/components-types";

const PageTitleSection = ({
  featuredImage,
  pageTitle,
  pageSubtitle,
  pageTitleSup,
  pageParagraph,
  projectInfo,
  sectionType,
  currentLang,
  uri,
}: IPageTitleSection) => {
  let sectionClasses;
  switch (sectionType) {
    case "about":
      sectionClasses = "mb-16 sm:mb-64";
      break;
    case "projects":
      sectionClasses = "relative";
      break;
    case "project":
      sectionClasses = "mb-16 sm:mb-64";
      break;
    default:
      sectionClasses = "";
  }


  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={`pt-24 sm:pt-56 ${sectionClasses}`} ref={ref}>
      <div className="sm:grid sm:grid-cols-2">
        <div style={{ gridArea: "1 / 1 / 2 / 3" }}>
          <div className="overflow-hidden mb-6 sm:mb-20 sm:w-9/12">
            <h1>
              {pageSubtitle && (
                <span className="text-color-primary/90 dark:text-white/90 text-lg sm:text-[1.8rem]">
                  {pageSubtitle}
                </span>
              )}
              <motion.span
                initial={{ y: 200, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }
                }
                transition={{
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="block relative text-white mix-blend-difference z-10 overflow-hidden py-4"
              >
                <Heading
                  Tag="span"
                  styles="h1"
                  title={pageTitle}
                  className="relative max-sm:text-7xl"
                  sup={pageTitleSup}
                />
              </motion.span>
            </h1>
          </div>
          {pageParagraph && (
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mb-12 sm:w-1/3 sm:mb-0"
            >
              {pageParagraph}
            </motion.p>
          )}
          {projectInfo && (
            <ProjectInfoGroup
              client={projectInfo.client}
              year={projectInfo.year}
              agency={projectInfo.agency}
              stack={projectInfo.stack}
              awards={projectInfo.awards}
              currentLang={currentLang}
            />
          )}
        </div>

        {featuredImage && (
          <motion.div
            style={{ gridArea: "1 / 2 / 2 / 3" }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="w-[calc(100%+48px)] -ml-[24px] sm:w-full sm:ml-0"
          >
            <GatsbyImage
              alt={featuredImage.node.altText}
              image={featuredImage?.node.gatsbyImage}
              className="w-full"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageTitleSection;
