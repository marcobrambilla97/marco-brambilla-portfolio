import React from "react";

interface IArrowIconProps {
  className?: string;
  pathClassname?: string;
}

const ArrowIcon = ({ className, pathClassname }: IArrowIconProps) => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.0437 1.59358L0.165042 1.59358L0.165041 0.390623H12.9463L12.9463 13.7734L11.7433 13.7733L11.7433 2.59516L0.891503 13.447L0.0409024 12.5964L11.0437 1.59361L11.0437 1.59358Z"
        className={pathClassname}
      />
    </svg>
  );
};

export default ArrowIcon;
