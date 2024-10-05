import React from "react";

export interface IWrapper {
  children: React.ReactNode;
  className?: string;
  wrapperTag?: keyof JSX.IntrinsicElements;
}

const Wrapper = ({ children, className, wrapperTag }: IWrapper) => {
  const Tag = wrapperTag || "div";
  return <Tag className={`px-6 sm:px-[10rem] ${className}`}>{children}</Tag>;
};

export default Wrapper;
