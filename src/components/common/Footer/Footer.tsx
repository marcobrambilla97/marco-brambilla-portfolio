import React from "react";
import Cta from "../../ui/Cta/Cta";
import Wrapper from "../../layout/Wrapper/Wrapper";
import Heading from "../../ui/Heading/Heading";
import FooterMenu from "./FooterMenu/FooterMenu";
import BackToTop from "../../ui/BackToTop/BackToTop";
import { ISiteFooter } from "../../../types/components-types";
import { ISiteGlobal } from "../../../types/page-types";
import { usePrimaryMenuQuery } from "../../../hooks/usePrimaryMenuQuery";
import { useEnPrimaryMenuQuery } from "../../../hooks/useEnPrimaryMenuQuery";
import { useSiteFooterQuery } from "../../../hooks/useSiteFooterQuery";
import { useSiteGlobalQuery } from "../../../hooks/useSiteGlobalQuery";
import {
  IMenuQuery,
  ISiteFooterQuery,
  ISiteGlobalQuery,
} from "../../../types/queries-types";

interface IFooterProps {
  currentLang: string;
  onBackToTopClick: () => void;
}

const Footer = ({ currentLang, onBackToTopClick }: IFooterProps) => {
  const wpSiteFooterData: ISiteFooterQuery = useSiteFooterQuery();
  const wpSiteGlobalData: ISiteGlobalQuery = useSiteGlobalQuery();
  const wpPrimaryMenu: IMenuQuery = usePrimaryMenuQuery();
  const wpEnPrimaryMenu: IMenuQuery = useEnPrimaryMenuQuery();
  // const wpSiteFooterMenu: IMenuQuery = useSiteFooterMenuQuery();
  // const wpEnSiteFooterMenu: IMenuQuery = useEnSiteFooterMenuQuery();
  const siteGlobalData: ISiteGlobal =
    wpSiteGlobalData.wp.siteGlobalOptions.siteGlobal;
  const siteFooterData: ISiteFooter = wpSiteFooterData.wp.siteFooter.footer;
  const primaryMenuItems =
    currentLang === "EN"
      ? wpEnPrimaryMenu.wpMenu.menuItems.nodes
      : wpPrimaryMenu.wpMenu.menuItems.nodes;
  // const footerMenuItems =
  //   currentLang === "EN"
  //     ? wpEnSiteFooterMenu.wpMenu.menuItems.nodes
  //     : wpSiteFooterMenu.wpMenu.menuItems.nodes;

  const backToTopText =
    currentLang === "EN"
      ? siteFooterData.backToTop.backToTopTextEn
      : siteFooterData.backToTop.backToTopText;

  const ctaText =
    currentLang === "EN"
      ? siteFooterData.contactButton.contactButtonTextEn
      : siteFooterData.contactButton.contactButtonText;

  const footerMenuComponents = [
    {
      id: 1,
      menuLabel: "Sitemap",
      menuItems: primaryMenuItems,
    },
    // {
    //   id: 2,
    //   menuLabel: "Privacy",
    //   menuItems: footerMenuItems,
    // },
    {
      id: 2,
      menuLabel: "Socials",
      socialItems: siteGlobalData.socials,
      isSocialMenu: true,
    },
  ];

  const copyrightYear = new Date().getFullYear();

  return (
    <Wrapper
      wrapperTag="footer"
      className="flex items-center py-14 bg-color-primary w-full text-white z-10 dark:bg-[#101010] sm:py-24 sm:h-[70vh] sm:fixed sm:bottom-0 sm:left-0"
    >
      <div className="w-full">
        <div className="pb-10 mb-14 border-b border-white/25 sm:flex sm:justify-between sm:items-end sm:gap-6">
          <div className="sm:w-1/3">
            <Heading
              Tag="span"
              title={siteGlobalData.siteTitle}
              className="block text-6xl mb-6 sm:text-9xl sm:mb-5"
            />
            <span className="block mb-6 sm:mb-0">
              {siteGlobalData.siteSubtitle}
            </span>
          </div>
          <Cta
            to={siteGlobalData.contactEmail}
            text={ctaText}
            target="_blank"
            variant="filled"
            email
          />
        </div>
        <div className="mb-16">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:flex">
            {footerMenuComponents.map((footerMenu) => (
              <FooterMenu
                key={footerMenu.id}
                menuLabel={footerMenu.menuLabel}
                menuItems={footerMenu.menuItems}
                socialItems={footerMenu.socialItems}
                isSocialMenu={footerMenu.isSocialMenu}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="sm:flex sm:items-center sm:justify-end sm:gap-20">
            <BackToTop onClick={onBackToTopClick} text={backToTopText} />
            <p className="text-sm sm:text-[1.7rem]">
              {siteFooterData.copyrightText} {copyrightYear}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
