import React from "react";

interface IDarkModeSwitchProps {
  toggled: boolean;
  ariaLabel?: string;
  onClick: () => void;
}

const Switch = ({ toggled, ariaLabel, onClick }: IDarkModeSwitchProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      role="switch"
      aria-checked={toggled}
      aria-label={ariaLabel}
      tabIndex={0}
      className="switch group flex flex-col justify-end gap-3 cursor-pointer absolute bottom-12 left-1/2 -translate-x-1/2 sm:static sm:block sm:mt-0"
      onClick={handleClick}
    >
      <span className="screen-reader-text-mobile">Dark mode</span>
      <span className="block w-[4rem] h-[2rem] rounded-full bg-white/10 switch__wrapper">
        <span
          className={`relative top-0 block w-[2rem] h-[2rem] bg-white rounded-full z-10 transition-all duration-500 ${toggled ? "translate-x-full" : "translate-x-0"}`}
        ></span>
      </span>
      <span className="screen-reader-text" aria-hidden="true">
        On
      </span>
      <span className="screen-reader-text" aria-hidden="true">
        Off
      </span>
    </div>
  );
};

export default Switch;
