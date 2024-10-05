import {
  ILanguage,
  IMenuItem,
  ISiteFooter,
  ICommonSection,
  IWpGatsbyImage,
  IWpActivity,
  IPageTitleSection,
  IWpSkill,
  IWpPageProjectsSection,
  IPortfolioProject,
  IPortfolioProjectInfo,
  IPortfolioProjectScreen,
  IPortfolioProjectKeyPoint,
} from "./components-types";
import { ISiteGlobal } from "./page-types";

export interface IWpPageQuery {
  databaseId: number;
  title: string;
  uri: string;
  __typename: string;
  language: ILanguage;
  translations: any;
}

export interface IWpPageTitleACFQuery {
  pageTitleSection: {
    pageTitle: string;
    pageParagraph: string;
    pageSubtitle: string;
  };
}

export interface IWpHomePageACFQuery {
  allWpActivity: {
    nodes: IWpActivity[];
  };
  allWpPortfolio: {
    totalCount: number;
  };
  wpPage: {
    featuredImage: IWpGatsbyImage;
    commonSection: ICommonSection;
    pageTitleSection: IPageTitleSection;
    pageProjectsSection: {
      projectsSection: IWpPageProjectsSection;
    };
    homepage: {
      whatIDoSection: {
        whatIDoTitle: string;
        whatIDoDescription: string;
      };
    };
  };
}

export interface IWpAboutACFQuery {
  allWpActivity: {
    nodes: IWpActivity[];
  };
  allWpSkill: {
    nodes: IWpSkill[];
  };
  wpPage: {
    featuredImage: IWpGatsbyImage;
    pageTitleSection: IPageTitleSection;
    commonSection: ICommonSection;
    pageProjectsSection: {
      projectsSection: IWpPageProjectsSection;
    };
    about: {
      programmingSkillsDescription: string;
      programmingSkillsTitle: string;
      whatIDoTitle: string;
    };
  };
}

export interface IWpProjectsACFQuery {
  wpPage: {
    pageTitleSection: IPageTitleSection;
  };
  allWpPortfolio: {
    nodes: IPortfolioProject[];
  };
}

export interface IWp404ACFQuery {
  wpPage: {
    pageTitleSection: IPageTitleSection;
  };
}

export interface IWpProjectACFQuery {
  wpPortfolio: {
    title: string;
    featuredImage: IWpGatsbyImage;
    project: {
      projectTitle: string;
      projectSubtitle: string;
      projectInfo: IPortfolioProjectInfo;
      desktopScreens?: IPortfolioProjectScreen[];
      mobileScreens?: IPortfolioProjectScreen[];
      keyPoints: IPortfolioProjectKeyPoint[];
      mobileText: string;
      nextProject: {
        nodes: IPortfolioProject[];
      };
    };
    commonSection: ICommonSection;
  };
}

export interface ISiteFooterQuery {
  wp: {
    siteFooter: {
      footer: ISiteFooter;
    };
  };
}

export interface ISiteGlobalQuery {
  wp: {
    siteGlobalOptions: {
      siteGlobal: ISiteGlobal;
    };
  };
}

export interface IMenuQuery {
  wpMenu: {
    menuItems: {
      nodes: IMenuItem[];
    };
  };
}
