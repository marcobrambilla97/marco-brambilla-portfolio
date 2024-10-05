import React, { useRef } from "react";
import Cta from "../../components/ui/Cta/Cta";
import Heading from "../../components/ui/Heading/Heading";
import { motion, useInView } from "framer-motion";
import { IPageContext } from "../../types/page-types";

const NotFoundPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="pt-24 sm:pt-56" ref={ref}>
      <div className="sm:w-7/12">
        <div className="overflow-hidden mb-6 sm:mb-20 sm:w-9/12">
          <h1>
            <span className="text-color-primary/90 dark:text-white/90 text-lg sm:text-[1.8rem]">
              Page not found
            </span>

            <motion.span
              initial={{ y: 200, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="block relative text-white mix-blend-difference z-10 overflow-hidden py-4"
            >
              <Heading
                Tag="span"
                styles="h1"
                title="404"
                className="relative max-sm:text-7xl"
              />
            </motion.span>
          </h1>
        </div>

        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-8 sm:mb-16 sm:text-[3.2rem]"
        >
          The page you are looking for was not found. Click the button below to
          return to the homepage.
        </motion.p>
      </div>
      <Cta text="Go to home" to="/en/" variant="outlined" target="_self" />
    </section>
  );
};

export default NotFoundPage;

export const Head = ({ pageContext }: { pageContext: IPageContext }) => (
  <>
    <html lang={pageContext.currentLang} />
    <meta name="robots" content="noindex, follow"></meta>
    <title>Page not found | Marco Brambilla Portfolio</title>
  </>
);
