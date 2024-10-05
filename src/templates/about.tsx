import React from "react";
import PageTitleSection from "../components/sections/PageTitleSection/PageTitleSection";
import CommonSection from "../components/sections/CommonSection/CommonSection";
import WhatIDoSection from "../components/sections/about/WhatIDoSection/WhatIDoSection";
import SkillsSection from "../components/sections/about/SkillsSection/SkillsSection";
import PageProjectsSection from "../components/sections/PageProjectsSection/PageProjectsSection";
import Seo from "gatsby-plugin-wpgraphql-seo";
import { graphql } from "gatsby";
import { IPageContext } from "../types/page-types";
import { IWpAboutACFQuery } from "../types/queries-types";
import { useProjectsCountQuery } from "../hooks/useProjectsCountQuery";

const AboutTemplate = ({ data }: { data: IWpAboutACFQuery }) => {
  const { wpPage, allWpActivity, allWpSkill } = data;
  const wpProjectsTotalCount = useProjectsCountQuery();

  return (
    <>
      <Seo post={wpPage} />
      <PageTitleSection
        pageTitle={wpPage.pageTitleSection.pageTitle}
        pageParagraph={wpPage.pageTitleSection.pageParagraph}
        featuredImage={wpPage.featuredImage}
        sectionType="about"
      />
      <CommonSection
        sectionTitle={{ title: wpPage.commonSection.sectionTitle }}
        sectionParagraph={wpPage.commonSection.sectionParagraph}
        sectionVideo={wpPage.commonSection.sectionVideo}
      />
      <WhatIDoSection
        sectionTitle={wpPage.about.whatIDoTitle}
        activities={allWpActivity.nodes}
      />
      <SkillsSection
        sectionTitle={wpPage.about.programmingSkillsTitle}
        sectionDescription={wpPage.about.programmingSkillsDescription}
        skillsGroup={allWpSkill.nodes}
      />
      <PageProjectsSection
        projectsSectionTitle={
          wpPage.pageProjectsSection.projectsSection.projectsSectionTitle
        }
        projectsCount={wpProjectsTotalCount.allWpPortfolio.totalCount}
        projects={
          wpPage.pageProjectsSection?.projectsSection?.selectedProjects?.nodes
        }
        projectSectionDescription={
          wpPage.pageProjectsSection.projectsSection.projectsSectionDescription
        }
        projectsCta={wpPage.pageProjectsSection.projectsSection.projectsCta}
      />
    </>
  );
};

export const aboutPageQuery = graphql`
  query GET_PAGE($databaseId: Int!, $currentLang: WpLanguageCodeEnum) {
    allWpActivity(
      sort: { date: DESC }
      filter: { language: { code: { eq: $currentLang } } }
    ) {
      nodes {
        title
        activities {
          activityDescription
        }
      }
    }
    allWpSkill(
      sort: { date: DESC }
      filter: { language: { code: { eq: $currentLang } } }
    ) {
      nodes {
        title
        skillsGroup {
          skillsList {
            skillTitle
          }
          skillDescription
        }
      }
    }
    wpPage(databaseId: { eq: $databaseId }) {
      language {
        code
      }
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
        sectionParagraph
        sectionTitle
        sectionVideo {
          node {
            publicUrl
          }
        }
      }
      pageTitleSection {
        pageTitle
        pageParagraph
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
      about {
        whatIDoTitle
        programmingSkillsTitle
        programmingSkillsDescription
      }
    }
  }
`;

export default AboutTemplate;

export function Head({ pageContext }: { pageContext: IPageContext }) {
  return <html lang={pageContext.currentLocale} />;
}
