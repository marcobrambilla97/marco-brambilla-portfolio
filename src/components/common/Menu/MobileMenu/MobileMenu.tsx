import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import Switch from "../../../ui/Switch/Switch";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";
import { IMobileMenu } from "../../../../types/components-types";

const MobileMenu = ({
  currentLang,
  menuItems,
  isMobileMenuOpen,
  currentUri,
  translations,
  darkMode,
  onToggleDarkMode,
}: IMobileMenu) => {
  return (
    <div
      aria-label="Menu"
      className={`fixed top-0 left-0 w-full h-[100dvh] bg-black/90 text-white backdrop-blur-md z-40 transition-all ease-out duration-700 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div
        id="primary-menu"
        className="pt-24 px-6"
        aria-labelledby="menu-button"
        role="menu"
      >
        <LanguageSwitcher
          currentUri={currentUri}
          currentLang={currentLang}
          translations={translations}
        />
        <MainMenu currentUri={currentUri} menuItems={menuItems} />
        <Switch toggled={darkMode} onClick={onToggleDarkMode} />
      </div>
    </div>
  );
};

export default MobileMenu;
