import React, { useRef } from "react";
import Heading from "../../ui/Heading/Heading";
import { motion, useInView } from "framer-motion";

interface IntroSectionProps {
  title: string;
  description?: string;
}

const IntroSection = ({ title, description }: IntroSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const MotionHeading = motion(Heading);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="mb-16 sm:w-1/4 sm:mb-0" ref={ref}>
      <div className="overflow-hidden mb-5 sm:mb-10">
        <MotionHeading
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          Tag="h2"
          className="text-xl sm:!text-[2rem] font-medium"
          title={title}
        />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default React.memo(IntroSection);
