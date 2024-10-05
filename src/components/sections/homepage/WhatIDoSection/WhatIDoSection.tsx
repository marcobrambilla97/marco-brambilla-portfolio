import React, { memo, useRef } from "react";
import Heading from "../../../ui/Heading/Heading";
import IntroSection from "../../IntroSection/IntroSection";
import { IWpActivity } from "../../../../types/components-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, useInView } from "framer-motion";

interface IWhatIDoSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  activities: IWpActivity[];
}

const MotionHeading = memo(motion(Heading));

const WhatIDoSection = ({
  sectionTitle,
  sectionDescription,
  activities,
}: IWhatIDoSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="mb-24 sm:mb-64" ref={ref}>
      <div className="flex flex-col sm:flex-row sm:items-start">
        <IntroSection title={sectionTitle} description={sectionDescription} />
        <div className="relative ml-auto sm:w-8/12 sm:mt-8 sm:pr-[8.33%]">
          <span className="hidden sm:block text-right mb-6">(hover)</span>
          {activities?.map((activity, index) => {
            const image = activity.featuredImage?.node.gatsbyImage;
            return (
              <div
                key={`${index}-${activity.title}`}
                className="relative group activity flex justify-end mb-5 sm:mb-6"
              >
                <div className="flex items-end transition-transform duration-500 overflow-hidden sm:group-hover:-translate-x-[18rem]">
                  <span className="text-xs pb-1 mr-1 text-color-primary/50 dark:text-white/50 transition-colors sm:dark:group-hover:text-white sm:text-[1.8rem] sm:group-hover:text-color-primary sm:mr-5 sm:pb-5 sm:text-color-primary/20 sm:dark:text-white/20">
                    0{index + 1}.
                  </span>
                  <div className="">
                    <MotionHeading
                      ref={ref}
                      initial={{ y: 100, opacity: 0 }}
                      animate={
                        isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                      }
                      transition={{
                        duration: 1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      Tag="h3"
                      styles="h2"
                      className="!text-[4rem] sm:!text-[12.8rem] text-right uppercase font-medium text-color-primary/40 dark:text-white/40 transition-colors sm:group-hover:text-color-primary sm:dark:group-hover:text-white sm:ml-auto sm:text-color-primary/20 sm:dark:text-white/20"
                      title={activity.title}
                    />
                  </div>
                </div>
                <GatsbyImage
                  image={image}
                  alt={activity.featuredImage?.node.altText}
                  className={`!hidden w-[14rem] h-[10.5rem] !absolute right-0 scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 -z-10 top-1/2 -translate-y-1/2 duration-500 delay-100 transition-all sm:!block`}
                />
              </div>
            );
          })}
          <span className="hidden sm:block text-right mt-6 sm:mr-[66.67%]">
            (repeat)
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
