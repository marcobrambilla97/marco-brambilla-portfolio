import React from "react";
import PageTitleSection from "../components/sections/PageTitleSection/PageTitleSection";
import CommonSection from "../components/sections/CommonSection/CommonSection";
import ScreensSection from "../components/sections/project/ScreensSection/ScreensSection";
import NextProject from "../components/sections/project/NextProject/NextProject";
import Seo from "gatsby-plugin-wpgraphql-seo";
import { graphql } from "gatsby";
import { IWpProjectACFQuery } from "../types/queries-types";
import { IPageContext } from "../types/page-types";

const ProjectTemplate = ({
  data,
  pageContext,
}: {
  data: IWpProjectACFQuery;
  pageContext: IPageContext;
}) => {
  const { wpPortfolio } = data;
  const { currentLang } = pageContext;

  return (
    <>
      <Seo post={wpPortfolio} />
      <PageTitleSection
        pageTitle={wpPortfolio.project.projectTitle || wpPortfolio.title}
        pageSubtitle={wpPortfolio.project.projectSubtitle}
        featuredImage={wpPortfolio.featuredImage}
        projectInfo={wpPortfolio.project.projectInfo}
        sectionType="project"
        uri={pageContext.currentUri}
        currentLang={currentLang}
      />
      <CommonSection
        sectionTitle={{ title: wpPortfolio.commonSection.sectionTitle }}
        sectionParagraph={wpPortfolio.commonSection.sectionParagraph}
        sectionCta={wpPortfolio.commonSection.sectionCta}
        isProjectPage
      />
      <ScreensSection
        label={"Desktop screens"}
        screens={wpPortfolio.project.desktopScreens}
        keyPoints={wpPortfolio.project.keyPoints}
      />
      <ScreensSection
        label={"Mobile screens"}
        screens={wpPortfolio.project.mobileScreens}
        mobileText={wpPortfolio.project.mobileText}
      />
      {wpPortfolio.project.nextProject && (
        <NextProject
          currentLang={currentLang}
          nextProject={wpPortfolio.project.nextProject.nodes}
        />
      )}
    </>
  );
};

export const projectQuery = graphql`
  query GET_PROJECT($databaseId: Int!) {
    wpPortfolio(databaseId: { eq: $databaseId }) {
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
          altText
          gatsbyImage(width: 720, height: 720)
        }
      }
      title
      project {
        projectTitle
        projectSubtitle
        projectInfo {
          agency
          client
          stack
          year
          awards
        }
        keyPoints {
          keyPoint
        }
        desktopScreens {
          screen {
            node {
              gatsbyImage(width: 1240, height: 744)
              altText
            }
          }
        }
        mobileText
        mobileScreens {
          screen {
            node {
              gatsbyImage(width: 1240, height: 744)
              altText
            }
          }
        }
        nextProject {
          nodes {
            ... on WpPortfolio {
              title
              uri
              featuredImage {
                node {
                  altText
                  gatsbyImage(width: 720, height: 720)
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
      commonSection {
        sectionTitle
        sectionParagraph
        sectionCta {
          target
          title
          url
        }
      }
    }
  }
`;

export default ProjectTemplate;

export function Head({ pageContext }: { pageContext: IPageContext }) {
  return (
    <>
      <html lang={pageContext.currentLang?.toLowerCase()} />
      <link
        rel="alternate"
        href={`https://marcobrambilladev.it${pageContext.currentUri}`}
        hrefLang={pageContext.currentLang?.toLowerCase()}
      />
      <link
        rel="alternate"
        href={`https://marcobrambilladev.it${pageContext.translations[0].uri}`}
        hrefLang={pageContext.translations[0].language.code?.toLowerCase()}
      />
    </>
  );
}
