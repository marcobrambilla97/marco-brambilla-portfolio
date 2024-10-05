import React from "react";
import Heading from "../../ui/Heading/Heading";
import { Link } from "gatsby";
import { IWpGatsbyImage } from "../../../types/components-types";

interface IProjectProps {
  gatsbyImage: IWpGatsbyImage;
  title: string;
  uri: string;
  className?: string;
  onMouseEnter: () => void;
  onMouseLeave?: () => void;
}

const ProjectList = ({
  title,
  uri,
  onMouseEnter,
  onMouseLeave,
}: IProjectProps) => {
  return (
    <article role="article" className="mb-14">
      <Link
        to={uri}
        className="group inline-block"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
      >
        <Heading
          Tag="h2"
          title={title}
          className="!text-[7.2rem] transition-colors duration-300 text-color-primary/30 group-hover:text-color-primary focus:text-color-primary dark:text-white/30 dark:group-hover:text-white dark:group-focus:text-white"
        />
      </Link>
    </article>
  );
};

export default ProjectList;
