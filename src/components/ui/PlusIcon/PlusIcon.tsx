import React from "react";

interface IPlusIconProps {
  wrapperClassName: string;
  isToggled: boolean;
  isStatic?: true;
}

const PlusIcon = ({
  isToggled,
  wrapperClassName,
  isStatic,
}: IPlusIconProps) => {
  return (
    <span className={`block relative ${wrapperClassName}`}>
      <span
        className={`block absolute inset-0 w-[2.4px] sm:w-1 h-full mx-auto transition ease-linear duration-200 ${isToggled ? "opacity-0 rotate-90 bg-color-primary dark:bg-white" : isStatic ? "bg-color-primary dark:bg-white" : "bg-[#868686] dark:bg-[#808080]"}`}
      ></span>
      <span
        className={`block absolute inset-0 h-[2.4px] sm:h-1 w-full my-auto dark:bg-white ${isToggled ? "bg-color-primary dark:bg-white" : isStatic ? "bg-color-primary dark:bg-white" : "bg-[#868686] dark:!bg-[#808080]"}`}
      ></span>
    </span>
  );
};

export default PlusIcon;
