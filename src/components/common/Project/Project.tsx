import React, { useRef } from "react";
import Heading from "../../ui/Heading/Heading";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  IPortfolioCategory,
  IWpGatsbyImage,
} from "../../../types/components-types";
import { motion, useScroll, useTransform } from "framer-motion";

interface IProjectProps {
  gatsbyImage: IWpGatsbyImage;
  title: string;
  terms: IPortfolioCategory[];
  uri: string;
  className?: string;
}

const Project = ({
  gatsbyImage,
  title,
  terms,
  uri,
  className,
}: IProjectProps) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  //const scaleX = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.article
      initial={{ y: 100, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
      role="article"
      className={`relative mb-11 sm:px-[1.2rem] sm:mb-0 ${className}`}
      ref={projectRef}
    >
      <div className="overflow-hidden w-full aspect-[4/5] sm:h-[61rem]">
        <div className="relative aspect-[4/5] sm:h-[61rem] w-full panel">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-[4/5] sm:h-[61rem]">
            <motion.div
              style={{ y }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link to={uri} aria-label={title} className="block">
                <GatsbyImage
                  image={gatsbyImage?.node.gatsbyImage}
                  alt={gatsbyImage?.node.altText}
                  className="w-full h-full object-cover aspect-[4/5] image"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="py-5 sm:py-10">
        {terms?.map((term) => (
          <span
            key={term.id}
            className="block text-color-secondary text-base mb-2 sm:mb-4 sm:text-2xl"
          >
            {term.name}
          </span>
        ))}
        <Heading
          Tag="h3"
          title={title}
          titleClassName="w-[70%] leading-tight"
          className="!text-2xl sm:!text-[3.2rem]"
          link={{ uri: uri }}
          icon={{
            className: "size-5 sm:w-[2.4rem] sm:h-[2.5rem] sm:mr-8",
            pathClassname: "fill-color-primary dark:fill-white",
          }}
        />
      </div>
    </motion.article>
  );
};

export default Project;
