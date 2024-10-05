import React, { useRef } from "react";
import Heading from "../../../ui/Heading/Heading";
import HomeMarquee from "../../../ui/Marquee/HomeMarquee/HomeMarquee";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import { IPageTitleSection } from "../../../../types/components-types";

const HomePageTitleSection = ({
  pageTitle,
  pageSubtitle,
  pageParagraph,
  featuredImage,
}: IPageTitleSection) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative pt-24 mb-16 sm:pt-56 sm:mb-64"
      ref={sectionRef}
    >
      <div className="flex items-center justify-end">
        {pageSubtitle && (
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100, skewY: 8 }}
              animate={{ y: 0, skewY: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Heading
                Tag="h2"
                title={pageSubtitle}
                className="subtitle w-full text-lg mb-5 sm:text-right sm:text-[2.4rem] sm:mb-0"
              />
            </motion.div>
          </div>
        )}
      </div>

      <div className="w-[calc(100%+48px)] ml-[-24px] z-20 mb-10 sm:w-auto sm:max-w-[100vw] sm:ml-[calc(-50vw+50%)] sm:mr-[calc(-50vw-50%)] sm:mb-20">
        <div className="overflow-hidden">
          <HomeMarquee title={pageTitle} baseVelocity={-100} />
        </div>
      </div>

      <div className="sm:flex sm:items-start">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="sm:w-1/2"
        >
          <p className="mb-16 sm:columns-2 sm:mb-0">{pageParagraph}</p>
        </motion.div>
        {featuredImage && (
          <div className="overflow-hidden w-[calc(100%+48px)] -ml-[24px] sm:w-1/2 sm:h-[40rem] sm:ml-[2.4rem]">
            <div className="relative flex justify-end w-full z-0 sm:h-[40rem]">
              <div className="w-full sm:h-[40rem]">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <GatsbyImage
                    alt={featuredImage.node.altText}
                    image={featuredImage.node.gatsbyImage}
                    className="w-full h-full object-cover image2"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePageTitleSection;
