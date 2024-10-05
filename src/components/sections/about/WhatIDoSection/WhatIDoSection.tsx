import React from "react";
import IntroSection from "../../IntroSection/IntroSection";
import Activity from "../../../common/Activity/Activity";
import { IWpActivity } from "../../../../types/components-types";

interface IWhatIDoSectionProps {
  sectionTitle: string;
  activities: IWpActivity[];
}

const WhatIDoSection = ({ sectionTitle, activities }: IWhatIDoSectionProps) => {
  return (
    <section className="mb-24 sm:mb-64">
      <IntroSection title={sectionTitle} />
      <div className="sm:w-7/12 sm:mr-[8.33%] sm:ml-auto">
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-24">
          {activities?.map((activity, index) => (
            <Activity
              key={`${index}-${activity.title}`}
              index={index + 1}
              title={activity.title}
              activityDescription={activity.activities?.activityDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
