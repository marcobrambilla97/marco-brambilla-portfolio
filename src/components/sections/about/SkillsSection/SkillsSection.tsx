import React, { useState } from "react";
import IntroSection from "../../IntroSection/IntroSection";
import Accordion from "../../../ui/Accordion/Accordion";
import SkillsMarquee from "../../../ui/Marquee/SkillsMarquee/SkillsMarquee";
import { IWpSkill } from "../../../../types/components-types";

interface ISkillsSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  skillsGroup: IWpSkill[];
}
const SkillsSection = ({
  sectionTitle,
  sectionDescription,
  skillsGroup,
}: ISkillsSectionProps) => {
  const [openedAccordion, setOpenedAccordion] = useState("Frontend");

  const handleAccordionClick = (title: string): void => {
    setOpenedAccordion((prevState) => (prevState !== title ? title : ""));
  };

  return (
    <section className="mb-24 sm:mb-64">
      <div className="mb-24 w-[calc(100%+48px)] -ml-[24px] overflow-hidden sm:w-auto sm:max-w-[100vw] sm:ml-[calc(-50vw+50%)] sm:mr-[calc(-50vw-50%)] sm:mb-64">
        <SkillsMarquee title={sectionTitle} baseVelocity={100} />
        <SkillsMarquee title={sectionTitle} baseVelocity={-100} />
      </div>
      <IntroSection title={sectionTitle} description={sectionDescription} />
      <div className="sm:w-7/12 sm:mr-[8.33%] sm:ml-auto">
        <div>
          {skillsGroup?.map(({ title, skillsGroup: { skillsList } }, index) => (
            <Accordion
              key={`${index}-${title}`}
              index={index + 1}
              summary={title}
              isOpen={title === openedAccordion}
              handleToggleClick={() => handleAccordionClick(title)}
            >
              <div>
                {skillsList?.length > 0 && (
                  <p>
                    {skillsList.map(({ skillTitle }) => skillTitle).join(", ")}
                  </p>
                )}
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
