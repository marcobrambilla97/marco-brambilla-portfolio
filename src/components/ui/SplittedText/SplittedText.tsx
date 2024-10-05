import React from "react";
import { motion } from "framer-motion";

interface ISplittedTextProps {
  isInView: boolean;
  text: string;
  tag?: keyof JSX.IntrinsicElements;
}

const SplittedText: React.FC<ISplittedTextProps> = ({
  isInView,
  text,
  tag = "span",
}) => {
  const words = text.split(" ");

  const MotionTag =
    motion[tag as "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p"];

  return (
    <MotionTag className="text-3xl sm:text-6xl">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            style={{ display: "inline-block", lineHeight: "1.3" }}
            transition={{
              ease: "easeOut",
              duration: 1,
              delay: 0.02 * index,
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
            }
          >
            {word}
          </motion.span>
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </MotionTag>
  );
};

export default React.memo(SplittedText);
