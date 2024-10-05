import React from "react";
import { motion } from "framer-motion";

const Loader = ({ children }: { children: React.ReactNode }) => {
  const calculateRandomBlockDelay = (rowIndex: number, totalRows: number) => {
    const blockDelay = Math.random() * 0.5;
    const rowDelay = (totalRows - rowIndex - 1) ^ 0.05;
    return blockDelay + rowDelay;
  };

  return (
    <>
      {children}
      <div
        className="blocks-container fixed top-0 left-0 w-screen h-screen flex flex-col pointer-events-none z-50"
        role="alert"
        aria-live="assertive"
      >
        <div className="sr-only">Loading content, please wait.</div>
        {Array.from({
          length: 5,
        }).map((rowIndex: any, index: number) => (
          <div className="row flex flex-1 w-full" key={index}>
            {Array.from({ length: 6 }).map((_, index: number) => (
              <motion.div
                key={index}
                className="block relative flex-1 bg-color-primary -m-[0.25px] origin-top dark:bg-[#f9f9f9]"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 5),
                }}
                aria-hidden="true"
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Loader;
