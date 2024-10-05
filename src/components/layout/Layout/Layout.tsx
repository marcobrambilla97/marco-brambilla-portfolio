import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import Loader from "../../common/Loader/Loader";
import { IPageContext } from "../../../types/page-types";
import { SEOContext } from "gatsby-plugin-wpgraphql-seo";
import { AnimatePresence } from "framer-motion";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { graphql, useStaticQuery } from "gatsby";

interface LayoutProps {
  pageContext: IPageContext;
  children: React.ReactNode;
}

const Layout = ({ pageContext, children }: LayoutProps) => {
  const {
    wp: { seo },
  } = useStaticQuery(graphql`
    query SiteInfoQuery {
      wp {
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
              cardType
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `);

  const { currentUri, currentLang, translations } = pageContext;
  const lenis = useLenis();

  const handleBackToTopClick = () => {
    lenis?.scrollTo(0, { duration: 2.5 });
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggleClick = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    setIsMobileMenuOpen(false);
  }, [currentUri]);

  return (
    <SEOContext.Provider value={{ global: seo }}>
      <ReactLenis root>
        <Header
          currentUri={currentUri}
          currentLang={currentLang}
          translations={translations}
          isMobileMenuOpen={isMobileMenuOpen}
          callbackMobileMenuToggleClick={handleMobileMenuToggleClick}
        />
        <AnimatePresence mode="wait" key={currentUri}>
          <Wrapper
            wrapperTag="main"
            className="relative z-20 bg-[#f2f2f2] pb-24 dark:bg-black sm:mb-[70vh] sm:pb-64"
          >
            <Loader>{children}</Loader>
          </Wrapper>
        </AnimatePresence>
        <Footer
          currentLang={currentLang || "IT"}
          onBackToTopClick={handleBackToTopClick}
        />
      </ReactLenis>
    </SEOContext.Provider>
  );
};

export default Layout;
