import { IPageContext } from "./src/types/page-types";
import { IWpPageQuery } from "./src/types/queries-types";

const path = require("path");

exports.createPages = async ({
  actions,
  graphql,
}: {
  actions: any;
  graphql: any;
}) => {
  const homePageTemplate = path.resolve("src/templates/homepage.tsx");
  const aboutTemplate = path.resolve("src/templates/about.tsx");
  const projectsTemplate = path.resolve("src/templates/projects.tsx");
  const projectTemplate = path.resolve("src/templates/project.tsx");

  const { createPage } = actions;
  const { data } = await graphql(`
    query AllPagesQuery {
      allWpPage {
        nodes {
          databaseId
          title
          uri
          __typename
          language {
            locale
            code
            name
          }
          translations {
            databaseId
            title
            uri
            __typename
            language {
              locale
              code
              name
            }
          }
        }
      }
      allWpPortfolio {
        nodes {
          databaseId
          title
          uri
          __typename
          language {
            locale
            code
            name
          }
          translations {
            databaseId
            title
            uri
            __typename
            language {
              locale
              code
              name
            }
          }
        }
      }
    }
  `);

  const allWpPages = [...data.allWpPage.nodes, ...data.allWpPortfolio.nodes];

  allWpPages.forEach((wpPage: IWpPageQuery) => {
    const isWpPage = wpPage.__typename === "WpPage";
    const isWpPortfolioPage = wpPage.__typename === "WpPortfolio";

    // Normalizza l'URI per rimuovere l'eventuale dominio
    const normalizedUri = wpPage.uri.replace(/^https?:\/\/[^\/]+/, "");

    const context: IPageContext = {
      databaseId: wpPage.databaseId,
      currentLang: wpPage.language.code,
      currentLocale: wpPage.language.locale,
      currentUri: normalizedUri,
      translations: wpPage.translations,
    };

    let component = "";

    if (isWpPage) {
      if (normalizedUri === "/" || normalizedUri === "/en/") {
        component = homePageTemplate;
      } else if (
        normalizedUri === "/chi-sono/" ||
        normalizedUri === "/en/about/"
      ) {
        component = aboutTemplate;
      } else if (
        normalizedUri === "/progetti/" ||
        normalizedUri === "/en/projects/"
      ) {
        component = projectsTemplate;
      }
    }

    if (isWpPortfolioPage) {
      component = projectTemplate;
    }

    if (component === "") {
      console.warn(
        `Nessun template trovato per la pagina con URI: ${normalizedUri}`,
      );
    }

    createPage({
      path: normalizedUri,
      component: component,
      context: context,
    });
  });
};

exports.onCreatePage = async ({
  page,
  actions,
}: {
  page: any;
  actions: any;
}) => {
  const { createPage, deletePage } = actions;

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page };

    // Get the language code from the path
    const langCode = page.path.split(`/`)[1];

    // Set the context with the correct language
    page.context = {
      ...page.context, // Preserve any existing context
      currentLang: langCode,
    };

    // Match all paths starting with this language code
    page.matchPath = `/${langCode}/*`;

    // Recreate the modified page
    try {
      deletePage(oldPage);
      createPage(page);
      console.log(`Successfully created 404 page for language: ${langCode}`);
    } catch (error) {
      console.error(
        `Error recreating 404 page for language: ${langCode}`,
        error,
      );
    }
  }

  // Handle the default 404 page
  if (page.path === "/404/") {
    const oldPage = { ...page };

    // Set a default language for the main 404 page
    page.context = {
      ...page.context,
      currentLang: "it", // Or whichever language you want as default
    };

    // Recreate the modified page
    try {
      deletePage(oldPage);
      createPage(page);
      console.log("Successfully created default 404 page");
    } catch (error) {
      console.error("Error recreating default 404 page", error);
    }
  }
};
