import React, { useRef } from "react";
import Cta from "../../ui/Cta/Cta";
import Heading from "../../ui/Heading/Heading";
import SplittedText from "../../ui/SplittedText/SplittedText";
import { IWpCta } from "../../../types/components-types";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useMatchMedia } from "../../../utils/utils";

interface ICommonSectionProps {
  sectionName?: string;
  sectionTitle: {
    title: string;
    tag?: keyof JSX.IntrinsicElements;
  };
  sectionParagraph: string;
  sectionCta?: IWpCta;
  sectionVideo?: {
    node: {
      publicUrl: string;
    };
  };
  isProjectPage?: boolean;
}

const CommonSection = ({
  sectionName,
  sectionTitle,
  sectionParagraph,
  sectionCta,
  sectionVideo,
  isProjectPage,
}: ICommonSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const isDesktop = useMatchMedia("(min-width: 640px)", true);
  const scaleValue = isDesktop ? [0.5, 0.8] : [0.5, 1];
  const scale = useTransform(scrollYProgress, [0, 1], scaleValue);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="relative sm:mb-56" ref={sectionRef}>
      <div
        className={`sm:flex ${sectionName ? "sm:justify-start" : "sm:justify-center"} sm:mb-28`}
      >
        {sectionName && (
          <Heading
            Tag="h2"
            className="font-medium !text-lg mb-6 sm:!text-[1.8rem] sm:mb-16 sm:w-3/12"
            title={sectionName}
          />
        )}

        <div className="w-full sm:w-4/6">
          <div className="overflow-hidden mb-5 sm:mb-12">
            <SplittedText
              isInView={isInView}
              text={sectionTitle.title || ""}
              tag={sectionTitle.tag || "h2"}
            />
          </div>
          <div className="sm:w-[62.5%] sm:ml-auto">
            <p className="mb-12 sm:mb-20">{sectionParagraph}</p>
            {sectionCta && (
              <div className={`${isProjectPage ? "mb-16 sm:mb-0" : ""}`}>
                <Cta
                  text={sectionCta.title}
                  to={sectionCta.url}
                  target={sectionCta.target}
                  variant="text"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {sectionVideo && (
        <motion.div className="w-full flex items-center justify-center h-[65vh] sm:block sm:h-[300vh]">
          <motion.div
            style={{ scale }}
            className="w-full h-[50vh] overflow-hidden sm:sticky sm:h-[90vh] sm:top-[5vh]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              src={sectionVideo.node.publicUrl}
              className="grayscale sm:aspect-auto w-full h-full object-cover"
            >
              <source src={sectionVideo.node.publicUrl} type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CommonSection;
