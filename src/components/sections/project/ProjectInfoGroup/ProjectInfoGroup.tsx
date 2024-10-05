import React from "react";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import { IPortfolioProjectInfo } from "../../../../types/components-types";

const ProjectInfoGroup = ({
  client,
  year,
  agency,
  stack,
  awards,
  currentLang,
}: IPortfolioProjectInfo) => {
  const isEnLang = currentLang === "EN";

  const projectInfosObj = [
    {
      label: isEnLang ? "Client" : "Cliente",
      info: client,
      className: "",
    },
    {
      label: isEnLang ? "Year" : "Anno",
      info: year,
      className: "",
    },
    {
      label: isEnLang ? "Agency" : "Agenzia",
      info: agency,
      className: "",
    },
    {
      label: "Stack",
      info: stack,
      className: "",
    },
    {
      label: isEnLang ? "Awards" : "Premi",
      info: awards,
      className: "col-span-full pt-3 sm:pt-6 sm:w-full",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 sm:w-1/3 mb-16 sm:mb-0">
      {projectInfosObj.map(
        (projectInfo, index) =>
          projectInfo.info && (
            <ProjectInfo
              key={`${index}-${projectInfo.label}`}
              label={projectInfo.label}
              info={projectInfo.info}
              className={projectInfo.className}
            />
          ),
      )}
    </div>
  );
};

export default ProjectInfoGroup;
