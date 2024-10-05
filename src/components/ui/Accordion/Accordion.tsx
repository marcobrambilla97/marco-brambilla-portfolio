import React from "react";
import Heading from "../Heading/Heading";
import PlusIcon from "../PlusIcon/PlusIcon";

interface IAccordionProps {
  index: number;
  summary: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleToggleClick: () => void;
}

const Accordion = ({
  index,
  summary,
  children,
  isOpen,
  handleToggleClick,
}: IAccordionProps) => {
  return (
    <div
      className={`mb-8 pb-8 border-b ${isOpen ? "border-color-primary dark:border-white" : "border-color-primary/50 dark:border-white/50"} sm:mb-14 sm:pb-14`}
    >
      <button
        type="button"
        className="flex items-center w-full"
        aria-expanded={isOpen}
        id={summary}
        onClick={handleToggleClick}
      >
        <span className={`text-xl block relative sm:font-medium top-1 w-[14.2%] text-left ${!isOpen && "text-color-primary/50 dark:text-white/50"} sm:text-[2rem]`}>
          0{index}.
        </span>
        <Heading
          Tag="h3"
          styles="h6"
          title={summary}
          className={`font-medium leading-none ${!isOpen && "text-color-primary/50 dark:text-white/50"}`}
        />
        <PlusIcon wrapperClassName="size-6 ml-auto sm:size-9" isToggled={isOpen} />
      </button>
      <div
        className={`transition-all ease-linear duration-200 px-[14.2%] ${isOpen ? "max-h-[1000px] opacity-1 pointer-events-auto py-8 sm:py-14" : "max-h-0 opacity-0 pointer-events-none"}`}
        role="region"
        aria-labelledby={summary}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
