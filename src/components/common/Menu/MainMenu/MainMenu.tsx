import React from "react";
import { Link } from "gatsby";
import { IMenuItem } from "../../../../types/components-types";

interface IMainMenuProps {
  currentUri?: string;
  menuItems: IMenuItem[];
}

const MainMenu = ({ menuItems, currentUri }: IMainMenuProps) => {
  return (
    <ul className="flex flex-col text-right sm:flex-row sm:items-center gap-3 sm:gap-9 sm:text-left">
      {menuItems?.map((menuItem: IMenuItem) => (
        <li
          key={menuItem.id}
          className="text-left text-5xl sm:text-[1.7rem] max-sm:uppercase"
        >
          <Link
            role="menuitem"
            id={menuItem.id}
            to={menuItem.uri}
            className={`block py-3 ${currentUri === menuItem.uri ? " sm:text-white sm:font-medium" : "max-sm:text-white/50"}`}
          >
            {menuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
