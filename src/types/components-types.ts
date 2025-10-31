import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IPageTitleSection {
  pageTitle: string;
  pageTitleSup?: {
    title: string;
    className: string;
  };
  pageSubtitle?: string;
  pageParagraph?: string;
  projectInfo?: IPortfolioProjectInfo;
  featuredImage?: IWpGatsbyImage;
  sectionType?: "about" | "projects" | "project";
  uri?: string;
  currentLang?: string;
}

export interface ICommonSection {
  sectionName: string;
  sectionParagraph: string;
  sectionTitle: string;
  sectionVideo: {
    node: {
      publicUrl: string;
    };
  };
  sectionCta: IWpCta;
}

export interface IWpPageProjectsSection {
  projectsCta: IWpCta;
  projectsCtaPre: string;
  projectsSectionDescriptionPre: string;
  projectsSectionDescription: string;
  projectsSectionTitle: string;
  selectedProjects: {
    nodes: IPortfolioProject[];
  };
}

export interface IMenuItem {
  id: string;
  label: string;
  uri: string;
}

export interface ILanguage {
  id: string;
  locale?: string;
  code: "IT" | "EN";
  name: "Italiano" | "English";
}

export interface IWorkField {
  workField: {
    workFieldTitle: string;
    workFieldDescription: string;
  };
}

export interface IPortfolioCategory {
  id: string;
  name: string;
}

export interface IPortfolioProject {
  featuredImage?: IWpGatsbyImage;
  id: string;
  title: string;
  uri: string;
  project: {
    listingImage: IWpGatsbyImage;
  };
  terms: {
    nodes: IPortfolioCategory[];
  };
}

export interface IPortfolioProjectScreen {
  screen: IWpGatsbyImage;
}

export interface IWpActivity {
  index?: number;
  title: string;
  activities?: {
    activityDescription: string;
  };
  featuredImage: IWpGatsbyImage;
}

export interface IWpSkillTitle {
  skillTitle: string;
}

export interface IWpSkill {
  title: string;
  skillsGroup: {
    skillsList: IWpSkillTitle[];
  };
}

export interface IWpCta {
  title: string;
  target: string;
  url: string;
}

export interface IWpGatsbyImage {
  node: {
    altText: string;
    gatsbyImage: IGatsbyImageData;
  };
}

export interface IPortfolioProjectInfo {
  client: string;
  year: string;
  agency?: string;
  stack?: string;
  awards?: string;
  currentLang?: string;
}

export interface IPortfolioProjectKeyPoint {
  keyPoint: string[];
}

export interface ISiteFooter {
  contactEmail: string;
  backToTop: {
    backToTopText: string;
    backToTopTextEn: string;
  };
  contactButton: {
    contactButtonText: string;
    contactButtonTextEn: string;
  };
  copyrightText: string;
}

export interface ISocial {
  social: {
    target: string;
    title: string;
    url: string;
  };
}

export interface ICTAClassesObj {
  anchor: {
    filled: string;
    outlined: string;
    text: string;
  };
  wrapper: {
    filled: string;
    outlined: string;
    text: string;
  };
  after: {
    filled: string;
    outlined: string;
    text: string;
  };
  text: {
    filled: string;
    outlined: string;
    text: string;
  };
  arrowPath: {
    filled: string;
    outlined: string;
    text: string;
  };
}

export interface IMobileMenu {
  currentUri: string;
  currentLang: string;
  translations: any;
  menuItems: IMenuItem[];
  isMobileMenuOpen: boolean;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}
