import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import { IMenuItem } from "../../../../types/components-types";

const DesktopMenu = ({ menuItems }: { menuItems: IMenuItem[] }) => {
  return (
    <nav aria-labelledby="mainmenulabel" className="mr-[8rem]">
      <span id="mainmenulabel" className="screen-reader-text">
        Main Menu
      </span>
      <MainMenu menuItems={menuItems} />
    </nav>
  );
};

export default DesktopMenu;
