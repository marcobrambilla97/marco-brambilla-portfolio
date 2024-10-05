import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { Link } from "gatsby";
import { ICTAClassesObj } from "../../../types/components-types";

interface ICta {
  to: string;
  text: string;
  target?: string;
  email?: boolean;
  variant: "filled" | "outlined" | "text";
}

const CTA_CLASSES: ICTAClassesObj = {
  anchor: {
    filled: "relative inline-block group rounded-full",
    outlined: "relative inline-block group rounded-full overflow-hidden [transform:translateZ(0)]",
    text: "relative inline-block group rounded-full sm:hover:scale-95 sm:hover:opacity-90 transition-all duration-300",
  },
  wrapper: {
    filled:
      "rounded-full flex items-center justify-center gap-6 transition-colors duration-300 px-6 sm:px-12 h-12 sm:h-20 group-hover:bg-transparent group-hover:border group-hover:border-color-primary bg-white group-hover:border-white",
    outlined:
      "rounded-full flex items-center justify-center gap-6 transition-colors duration-300 bg-transparent border border-color-primary dark:border-white px-6 h-12 sm:px-12 sm:h-20 [transform:translateZ(0)]",
    text: "rounded-full flex items-center justify-center gap-6 transition-colors duration-300",
  },
  after: {
    filled: "",
    outlined:
      "after:w-full after:h-20 after:rounded-full after:bg-color-primary dark:after:bg-white after:absolute after:top-0 after:left-0 after:-z-10 after:translate-y-[5rem] after:transition-transform after:duration-300 group-hover:after:translate-y-0 overflow-hidden [transform:translateZ(0)]",
    text: "",
  },
  text: {
    filled:
      "text-lg sm:text-[1.8rem] transition-colors duration-300 text-color-primary group-hover:text-white",
    outlined:
      "text-lg sm:text-[1.8rem] transition-colors duration-300 text-color-primary group-hover:text-white dark:text-white dark:group-hover:text-color-primary",
    text: "text-lg sm:text-[1.8rem] transition-colors duration-300 font-medium text-color-primary dark:text-white",
  },
  arrowPath: {
    filled:
      "fill-color-primary group-hover:fill-white transition-colors duration-300",
    outlined:
      "fill-color-primary group-hover:fill-white transition-colors duration-300 dark:fill-white dark:group-hover:fill-color-primary",
    text: "fill-color-primary transition-colors duration-300 dark:fill-white",
  },
};

const Cta = ({ to, text, target, email, variant = "filled" }: ICta) => {
  const href = email ? `mailto:${to}` : to;

  const CtaDisplay = ({ children }: { children: React.ReactNode }) => {
    return target === "_blank" ? (
      <a href={href} target="_blank" className={CTA_CLASSES.anchor[variant]}>
        {children}
      </a>
    ) : (
      <Link to={href} className={CTA_CLASSES.anchor[variant]} target="_self">
        {children}
      </Link>
    );
  };

  return (
    <CtaDisplay>
      <span
        className={`${CTA_CLASSES.wrapper[variant]} ${CTA_CLASSES.after[variant]}`}
      >
        <span className={CTA_CLASSES.text[variant]}>{text}</span>
        <ArrowIcon
          className="size-4 sm:size-5"
          pathClassname={CTA_CLASSES.arrowPath[variant]}
        />
      </span>
    </CtaDisplay>
  );
};

export default Cta;
