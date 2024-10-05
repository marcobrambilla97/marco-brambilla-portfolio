import { useStaticQuery, graphql } from "gatsby";

export const useSiteFooterQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      wp {
        siteFooter {
          footer {
            backToTop {
              backToTopText
              backToTopTextEn
            }
            contactButton {
              contactButtonText
              contactButtonTextEn
            }
            copyrightText
          }
        }
      }
    }
  `);
  return data;
};
