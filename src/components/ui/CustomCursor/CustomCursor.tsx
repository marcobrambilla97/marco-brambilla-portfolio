import React from "react";

const CustomCursor = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-centerw-[12rem] h-[12rem] bg-black/50 rounded-full blur-md">
      <span className="text-white text-[1.8rem]">{text}</span>
    </div>
  );
};

export default CustomCursor;
