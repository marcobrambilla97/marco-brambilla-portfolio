import React from "react";

const FooterMenuItem = ({ children }: { children: React.JSX.Element }) => {
  return <li className="text-white/50 mb-3">{children}</li>;
};

export default FooterMenuItem;
