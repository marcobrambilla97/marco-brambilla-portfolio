import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Switch from "../../ui/Switch/Switch";
import Wrapper from "../../layout/Wrapper/Wrapper";
import DesktopMenu from "../Menu/DesktopMenu/DesktopMenu";
import MobileMenu from "../Menu/MobileMenu/MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { IPageLangProps, ISiteGlobal } from "../../../types/page-types";
import { usePrimaryMenuQuery } from "../../../hooks/usePrimaryMenuQuery";
import { useEnPrimaryMenuQuery } from "../../../hooks/useEnPrimaryMenuQuery";
import { useSiteGlobalQuery } from "../../../hooks/useSiteGlobalQuery";
import { ISiteGlobalQuery } from "../../../types/queries-types";
import Hamburger from "../../ui/Hamburger/Hamburger";
import { useMatchMedia } from "../../../utils/utils";

interface IHeaderProps extends IPageLangProps {
  isMobileMenuOpen: boolean;
  callbackMobileMenuToggleClick: () => void;
}

const Header = ({
  currentUri,
  currentLang,
  translations,
  isMobileMenuOpen,
  callbackMobileMenuToggleClick,
}: IHeaderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  const handleToggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const wpMenuData = usePrimaryMenuQuery();
  const wpEnMenuData = useEnPrimaryMenuQuery();
  const wpSiteGlobalData: ISiteGlobalQuery = useSiteGlobalQuery();
  const siteGlobalData: ISiteGlobal =
    wpSiteGlobalData.wp.siteGlobalOptions.siteGlobal;
  const menuItems =
    currentLang === "EN"
      ? wpEnMenuData.wpMenu.menuItems.nodes
      : wpMenuData.wpMenu.menuItems.nodes;

  const isDesktop = useMatchMedia("(min-width: 640px)", true);

  return (
    <>
      <Wrapper
        wrapperTag="header"
        className="flex items-center justify-between gap-6 w-full py-3 z-[99999] fixed top-0 text-white mix-blend-difference sm:py-6"
      >
        <Logo siteTitle={siteGlobalData.siteTitle} currentLang={currentLang} />
        {isDesktop && (
          <div className="flex items-center">
            <LanguageSwitcher
              currentUri={currentUri}
              currentLang={currentLang}
              translations={translations}
            />
            <DesktopMenu menuItems={menuItems} />
            <Switch
              toggled={darkMode}
              ariaLabel="Toggle dark mode"
              onClick={handleToggleDarkMode}
            />
          </div>
        )}
        {!isDesktop && (
          <Hamburger
            currentLang={currentLang || "IT"}
            ariaControls="primary-menu"
            isMenuOpen={isMobileMenuOpen}
            handleMenuToggleClick={callbackMobileMenuToggleClick}
          />
        )}
      </Wrapper>
      {!isDesktop && (
        <MobileMenu
          menuItems={menuItems}
          isMobileMenuOpen={isMobileMenuOpen}
          currentLang={currentLang || "IT"}
          currentUri={currentUri}
          translations={translations}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
        />
      )}
    </>
  );
};

export default Header;
