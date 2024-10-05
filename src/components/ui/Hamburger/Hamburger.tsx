import React from "react";

interface IHamburgerProps {
  currentLang: string;
  ariaControls: string;
  isMenuOpen: boolean;
  handleMenuToggleClick: () => void;
}

const Hamburger = ({
  ariaControls,
  isMenuOpen,
  currentLang,
  handleMenuToggleClick,
}: IHamburgerProps) => {
  const getMenuText = () => {
    if (isMenuOpen) {
      return currentLang === "IT" ? "Chiudi" : "Close";
    }
    return "Menu";
  };

  const menuText = getMenuText();
  return (
    <button
      id="menu-button"
      type="button"
      className="flex flex-col gap-2"
      aria-haspopup="true"
      aria-controls={ariaControls}
      aria-expanded={isMenuOpen}
      onClick={handleMenuToggleClick}
    >
      <span>{menuText}</span>
    </button>
  );
};

export default Hamburger;
