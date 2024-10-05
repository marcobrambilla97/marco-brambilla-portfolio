import { useStaticQuery, graphql } from "gatsby";

export const usePrimaryMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query PrimaryMenuQuery {
      wpMenu(locations: { eq: PRIMARY_MENU }) {
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
