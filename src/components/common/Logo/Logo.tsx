import { Link } from "gatsby";
import React from "react";

interface ILogoProps {
  siteTitle: string;
  currentLang?: string;
}

const Logo = ({ siteTitle, currentLang }: ILogoProps) => {
  const to = currentLang === "EN" ? "/en/" : "/";
  return (
    <Link to={to}>
      <span className="font-medium">{siteTitle}</span>
    </Link>
  );
};

export default Logo;
