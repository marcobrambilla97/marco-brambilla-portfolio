import React, { useRef } from "react";
import KeyPointsList from "./KeyPointsList/KeyPointsList";
import Heading from "../../../ui/Heading/Heading";
import { motion, useInView } from "framer-motion";
import { IPortfolioProjectKeyPoint } from "../../../../types/components-types";

const KeyPoints = ({
  keyPoints,
}: {
  keyPoints: IPortfolioProjectKeyPoint[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const MotionHeading = motion(Heading);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col mt-6 mb-16 sm:flex-row sm:items-start sm:mt-24 sm:mb-48" ref={ref}>
      <div className="overflow-hidden sm:w-1/4">
        <MotionHeading
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          Tag="h3"
          className="!text-2xl sm:text-[1.8rem] font-medium mb-6 sm:mb-0"
          title="Key points"
        />
      </div>
      <KeyPointsList keyPoints={keyPoints} />
    </div>
  );
};

export default KeyPoints;
