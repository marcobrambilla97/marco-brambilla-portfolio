import { useStaticQuery, graphql } from "gatsby";

export const useEnSiteFooterMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query EnSiteFooterMenuQuery {
      wpMenu(locations: { eq: FOOTER_MENU___EN }) {
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
