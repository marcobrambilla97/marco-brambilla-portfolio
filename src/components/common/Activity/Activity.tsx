import React from "react";
import { IWpGatsbyImage } from "../../../types/components-types";
import Heading from "../../ui/Heading/Heading";

interface IActivityProps {
  index?: number;
  title: string;
  activityDescription?: string;
  featuredImage?: IWpGatsbyImage;
}

const Activity = ({ index, title, activityDescription }: IActivityProps) => {
  return (
    <div
      className={`pb-10 ${index !== 4 ? "border-b border-b-color-primary/10 dark:border-b-white/50" : ""} sm:pb-0 sm:border-none`}
    >
      <span className="block text-lg font-medium mb-2 sm:mb-10 sm:text-[1.8rem]">
        0{index}.
      </span>
      <Heading
        Tag="h3"
        styles="h6"
        title={title}
        className="block font-medium text-4xl mb-4 sm:mb-10"
      />
      <p className="sm:w-3/4">{activityDescription}</p>
    </div>
  );
};

export default Activity;
