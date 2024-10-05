import { ISocial } from "./components-types";

export interface IPageContext {
  databaseId: number;
  currentLang?: string;
  currentLocale?: string;
  currentUri: string;
  translations?: any;
}

export interface IPageSEO {
  wp: {
    seo: {
      contentTypes: {
        post: {
          title: string;
          schemaType: string;
          metaRobotsNoindex: boolean;
          metaDesc: string;
        };
        page: {
          metaDesc: string;
          metaRobotsNoindex: boolean;
          schemaType: string;
          title: string;
        };
      };
      webmaster: {
        googleVerify: string;
        yandexVerify: string;
        msVerify: string;
        baiduVerify: string;
      };
      schema: {
        companyName: string;
        personName: string;
        companyOrPerson: string;
        wordpressSiteName: string;
        siteUrl: string;
        siteName: string;
        inLanguage: string;
        logo: {
          sourceUrl: string;
          mediaItemUrl: string;
          altText: string;
        };
      };
      social: {
        facebook: {
          url: string;
          defaultImage: {
            sourceUrl: string;
            mediaItemUrl: string;
          };
        };
      };
    };
  };
}

export interface IPageProps {
  // wpPage: {
  //   nodeType: string;
  //   title: string;
  //   uri: string;
  //   seo: IPageSEO;
  // };
  pageContext: IPageContext;
}

export interface IPageLangProps {
  currentLang?: string;
  currentUri: string;
  translations: any;
}

export interface ISiteGlobal {
  contactEmail: string;
  siteTitle: string;
  siteSubtitle: string;
  socials: ISocial[];
}
