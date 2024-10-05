import { useStaticQuery, graphql } from "gatsby";

export const useSiteFooterMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterMenuQuery {
      wpMenu(locations: { eq: FOOTER_MENU }) {
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
