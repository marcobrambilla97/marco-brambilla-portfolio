import { useStaticQuery, graphql } from "gatsby";

export const useSiteGlobalQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteGlobalQuery {
      wp {
        siteGlobalOptions {
          siteGlobal {
            contactEmail
            siteSubtitle
            siteTitle
            socials {
              social {
                target
                title
                url
              }
            }
          }
        }
      }
    }
  `);
  return data;
};
