import React from "react";

interface IBackToTopProps {
  text: string;
  onClick: () => void;
}

const BackToTop = ({ text, onClick }: IBackToTopProps) => {
  return (
    <button
      onClick={onClick}
      className="mb-5 text-white font-medium text-xl sm:text-[1.7rem] sm:font-normal sm:mb-0"
    >
      {text}
    </button>
  );
};

export default BackToTop;
