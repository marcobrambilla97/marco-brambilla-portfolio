import { useStaticQuery, graphql } from "gatsby";

export const useProjectsCountQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectsCountQuery {
      allWpPortfolio(filter: { language: { code: { eq: IT } } }) {
        totalCount
      }
    }
  `);
  return data;
};
