import { graphql, useStaticQuery } from "gatsby";

export const useSiteLanguagesQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteLanguagesQuery {
      wp {
        defaultLanguage {
          code
        }
        languages {
          id
          name
          locale
        }
      }
    }
  `);
  return data;
};
