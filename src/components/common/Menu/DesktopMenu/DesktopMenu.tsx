import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import { IMenuItem } from "../../../../types/components-types";

export interface IDesktopMenuProps {
  menuItems: IMenuItem[];
}

const DesktopMenu = ({ menuItems }: IDesktopMenuProps) => {
  return (
    <nav aria-labelledby="mainmenulabel" className="mr-[8rem]" role="menu">
      <span id="mainmenulabel" className="screen-reader-text">
        Main Menu
      </span>
      <MainMenu menuItems={menuItems} />
    </nav>
  );
};

export default DesktopMenu;
