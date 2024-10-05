import React, { useState } from "react";
import PageTitleSection from "../components/sections/PageTitleSection/PageTitleSection";
import ProjectsSwitch from "../components/ui/ProjectsSwitch/ProjectsSwitch";
import ProjectsGrid from "../components/sections/projects/ProjectsGrid/ProjectsGrid";
import ProjectsList from "../components/sections/projects/ProjectsList/ProjectsList";
import Seo from "gatsby-plugin-wpgraphql-seo";
import { graphql } from "gatsby";
import { IWpProjectsACFQuery } from "../types/queries-types";
import { useProjectsCountQuery } from "../hooks/useProjectsCountQuery";
import { IPageContext } from "../types/page-types";

const ProjectsTemplate = ({ data }: { data: IWpProjectsACFQuery }) => {
  const { wpPage, allWpPortfolio } = data;
  const wpProjectsTotalCount = useProjectsCountQuery();
  const [activeLayout, setActiveLayout] = useState<"grid" | "list">("grid");
  const handleCallbackOnClick = (layout: "grid" | "list") => {
    setActiveLayout(layout);
  };

  return (
    <>
      <Seo post={wpPage} />
      <PageTitleSection
        pageTitle={wpPage.pageTitleSection.pageTitle}
        pageParagraph={wpPage.pageTitleSection.pageParagraph}
        sectionType="projects"
        pageTitleSup={{
          title: `(${wpProjectsTotalCount.allWpPortfolio.totalCount})`,
          className: "text-base sm:text-[2.4rem]",
        }}
      />
      <ProjectsSwitch
        activeLayout={activeLayout}
        onClick={handleCallbackOnClick}
      />

      {activeLayout === "grid" && (
        <ProjectsGrid projects={allWpPortfolio.nodes} />
      )}
      {activeLayout === "list" && (
        <ProjectsList projects={allWpPortfolio.nodes} />
      )}
    </>
  );
};

export const projectsPageQuery = graphql`
  query GET_PAGE($databaseId: Int!, $currentLang: WpLanguageCodeEnum) {
    allWpPortfolio(
      filter: { language: { code: { eq: $currentLang } } }
      sort: { date: DESC }
    ) {
      nodes {
        id
        title
        uri
        date
        project {
          listingImage {
            node {
              altText
              gatsbyImage(width: 502, height: 610)
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
    wpPage(databaseId: { eq: $databaseId }) {
      language {
        locale
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
      pageTitleSection {
        pageTitle
        pageParagraph
      }
    }
  }
`;

export default ProjectsTemplate;

export function Head({ pageContext }: { pageContext: IPageContext }) {
  return <html lang={pageContext.currentLocale} />;
}
