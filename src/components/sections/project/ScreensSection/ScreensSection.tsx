import React, { useRef } from "react";
import KeyPoints from "../KeyPoints/KeyPoints";
import SplittedText from "../../../ui/SplittedText/SplittedText";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, useInView } from "framer-motion";
import { IPortfolioProjectScreen } from "../../../../types/components-types";

interface IScreenSectionProps {
  label: string;
  screens?: IPortfolioProjectScreen[];
  keyPoints?: any;
  mobileText?: string;
}

const ScreensSection = ({
  label,
  screens,
  keyPoints,
  mobileText,
}: IScreenSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    screens &&
    screens?.length > 0 && (
      <section className="mb-12 sm:mb-64" ref={sectionRef}>
        <span className="block text-sm border-t pt-4 mb-10 border-color-primary/15 dark:border-white/30 sm:pt-6 sm:mb-20 sm:text-[1.4rem]">
          {label}
        </span>
        {mobileText && (
          <div className="overflow-hidden leading-tight mb-12 sm:w-5/12 sm:ml-auto sm:mr-[8.33%] sm:mb-28 ">
            <SplittedText
              isInView={isInView}
              text={mobileText || ""}
              tag="h3"
            />
          </div>
        )}
        {screens?.map((screen, index) => (
          <div key={index}>
            {index === 1 && keyPoints && <KeyPoints keyPoints={keyPoints} />}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
              //className="aspect-square sm:aspect-auto"
            >
              <GatsbyImage
                image={screen?.screen?.node.gatsbyImage}
                alt={screen?.screen?.node.altText}
                className="w-full h-full object-cover mb-12 sm:mb-24"
              />
            </motion.div>
          </div>
        ))}
      </section>
    )
  );
};

export default ScreensSection;
