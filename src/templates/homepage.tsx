import React from "react";
import HomePageTitleSection from "../components/sections/homepage/HomePageTitleSection/HomePageTitleSection";
import WhatIDoSection from "../components/sections/homepage/WhatIDoSection/WhatIDoSection";
import CommonSection from "../components/sections/CommonSection/CommonSection";
import PageProjectsSection from "../components/sections/PageProjectsSection/PageProjectsSection";
import Seo from "gatsby-plugin-wpgraphql-seo";
import { graphql } from "gatsby";
import { IPageContext } from "../types/page-types";
import { IWpHomePageACFQuery } from "../types/queries-types";
import { useProjectsCountQuery } from "../hooks/useProjectsCountQuery";

const HomePageTemplate = ({ data }: { data: IWpHomePageACFQuery }) => {
  const { wpPage, allWpActivity } = data;
  const {
    allWpPortfolio: { totalCount },
  } = useProjectsCountQuery();
  return (
    <>
      <Seo post={wpPage} />
      <HomePageTitleSection
        featuredImage={wpPage.featuredImage}
        pageTitle={wpPage.pageTitleSection.pageTitle}
        pageSubtitle={wpPage.pageTitleSection.pageSubtitle}
        pageParagraph={wpPage.pageTitleSection.pageParagraph}
      />

      <CommonSection
        sectionName={wpPage.commonSection.sectionName}
        sectionTitle={{ title: wpPage.commonSection.sectionTitle, tag: "h3" }}
        sectionParagraph={wpPage.commonSection.sectionParagraph}
        sectionCta={wpPage.commonSection.sectionCta}
        sectionVideo={wpPage.commonSection.sectionVideo}
      />

      <WhatIDoSection
        sectionTitle={wpPage.homepage.whatIDoSection.whatIDoTitle}
        sectionDescription={wpPage.homepage.whatIDoSection.whatIDoDescription}
        activities={allWpActivity.nodes}
      />

      <PageProjectsSection
        projectsSectionTitle={
          wpPage.pageProjectsSection.projectsSection.projectsSectionTitle
        }
        projectSectionDescription={
          wpPage.pageProjectsSection.projectsSection.projectsSectionDescription
        }
        projectsCta={wpPage.pageProjectsSection.projectsSection.projectsCta}
        projects={
          wpPage.pageProjectsSection?.projectsSection?.selectedProjects?.nodes
        }
        projectsCount={totalCount}
      />
    </>
  );
};

export const homePageQuery = graphql`
  query GET_PAGE($databaseId: Int!, $currentLang: WpLanguageCodeEnum) {
    allWpActivity(
      sort: { date: DESC }
      filter: { language: { code: { eq: $currentLang } } }
    ) {
      nodes {
        title
        featuredImage {
          node {
            altText
            gatsbyImage(width: 200, height: 300)
          }
        }
      }
    }
    wpPage(databaseId: { eq: $databaseId }) {
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
      featuredImage {
        node {
          gatsbyImage(width: 600, height: 600)
          altText
        }
      }
      commonSection {
        sectionName
        sectionParagraph
        sectionTitle
        sectionVideo {
          node {
            publicUrl
          }
        }
        sectionCta {
          target
          title
          url
        }
      }
      pageTitleSection {
        pageTitle
        pageParagraph
        pageSubtitle
      }
      pageProjectsSection {
        projectsSection {
          projectsCta {
            target
            title
            url
          }
          projectsCtaPre
          projectsSectionDescriptionPre
          projectsSectionDescription
          projectsSectionTitle
          selectedProjects {
            nodes {
              ... on WpPortfolio {
                id
                title
                uri
                project {
                  listingImage {
                    node {
                      gatsbyImage(width: 502, height: 610)
                      altText
                    }
                  }
                }
                terms {
                  nodes {
                    ... on WpCategory {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      homepage {
        whatIDoSection {
          whatIDoTitle
          whatIDoDescription
        }
      }
    }
  }
`;

export default HomePageTemplate;

export function Head({ pageContext }: { pageContext: IPageContext }) {
  return <html lang={pageContext.currentLang?.toLowerCase()} />;
}
