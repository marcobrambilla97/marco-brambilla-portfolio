import { useStaticQuery, graphql } from "gatsby";

export const useEnPrimaryMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query PrimaryMenuQueryEn {
      wpMenu(locations: { eq: PRIMARY_MENU___EN }) {
        menuItems {
          nodes {
            id
            uri
            label
          }
        }
      }
    }
  `);
  return data;
};
