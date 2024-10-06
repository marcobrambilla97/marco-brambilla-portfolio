import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import { IMenuItem } from "../../../../types/components-types";

export interface IDesktopMenuProps {
  menuItems: IMenuItem[];
}

const DesktopMenu = ({ menuItems }: IDesktopMenuProps) => {
  return (
    <nav aria-label=" Main Menu" className="mr-[8rem]">
      {/* <span id="mainmenulabel" className="screen-reader-text">
        Main Menu
      </span> */}
      <MainMenu menuItems={menuItems} />
    </nav>
  );
};

export default DesktopMenu;
