import React from "react";
import { motion } from "framer-motion";
import { IPortfolioProjectKeyPoint } from "../../../../../types/components-types";

const KeyPointsList = ({
  keyPoints,
}: {
  keyPoints: IPortfolioProjectKeyPoint[];
}) => {
  return (
    <ul className="list-disc ml-4 sm:w-7/12 sm:mr-[8.33%] sm:ml-auto">
      {keyPoints?.map((keyPoint, index) => (
        <li key={index} className="mb-4 sm:mb-3">
          {keyPoint.keyPoint}
        </li>
      ))}
    </ul>
  );
};

export default KeyPointsList;
