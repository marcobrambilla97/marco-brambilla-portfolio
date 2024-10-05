import React, { forwardRef } from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { Link } from "gatsby";

interface IHeading {
  title: string;
  titleClassName?: string;
  className?: string;
  styles?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  sup?: {
    title: string;
    className?: string;
  };
  link?: {
    uri: string;
    target?: string;
  };
  icon?: {
    className: string;
    pathClassname: string;
  };
}

const Heading = forwardRef(
  (
    {
      title,
      titleClassName,
      className,
      styles,
      Tag,
      sup,
      link,
      icon,
    }: IHeading,
    ref: React.ForwardedRef<HTMLHeadingElement>,
  ) => {
    let headingClasses = "";
    const switchEl = styles || Tag;
    switch (switchEl) {
      case "h1":
        headingClasses = "text-9xl sm:text-[20rem] leading-none break-words";
        break;
      case "h2":
        headingClasses = "sm:text-[12.8rem] leading-none";
        break;
      case "h3":
        headingClasses = "text-6xl";
        break;
      case "h4":
        headingClasses = "text-5xl";
        break;
      case "h5":
        headingClasses = "text-[4rem]";
        break;
      case "h6":
        headingClasses = "text-3xl sm:text-[3.2rem]";
        break;
      default:
        headingClasses = "";
    }

    const returnedHeading = link ? (
      <Tag className={`${headingClasses} ${className || ""}`} ref={ref}>
        <Link
          to={link.uri}
          target={link.target || "_self"}
          className={icon ? "flex items-end justify-between" : ""}
        >
          <span className={titleClassName}>{title}</span>
          {sup && <sup className={sup.className}>{sup.title}</sup>}
          {icon && (
            <ArrowIcon
              className={icon?.className}
              pathClassname={icon?.pathClassname}
            />
          )}
        </Link>
      </Tag>
    ) : (
      <Tag className={`${headingClasses} ${className || ""}`} ref={ref}>
        {title} {sup && <sup className={sup.className}>{sup.title}</sup>}
      </Tag>
    );

    return returnedHeading;
  },
);

export default React.memo(Heading);
