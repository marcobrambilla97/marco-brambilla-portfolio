import React from "react";
import { IMenuItem, ISocial } from "../../../../types/components-types";
import { Link } from "gatsby";
import FooterMenuItem from "./FooterMenuItem/FooterMenuItem";

interface IFooterMenuProps {
  menuLabel: string;
  menuItems?: IMenuItem[];
  socialItems?: ISocial[];
  isSocialMenu?: boolean;
}

const FooterMenu = ({
  menuLabel,
  menuItems,
  socialItems,
  isSocialMenu,
}: IFooterMenuProps) => {
  const menuMap = isSocialMenu
    ? socialItems?.map((social, index) => (
        <FooterMenuItem key={`${index}-${social.social.title}`}>
          <a href={social.social.url} target={social.social.target}>
            {social.social.title}
          </a>
        </FooterMenuItem>
      ))
    : menuItems?.map((menuItem) => (
        <FooterMenuItem key={menuItem.id}>
          <Link to={menuItem.uri}>{menuItem.label}</Link>
        </FooterMenuItem>
      ));

  return (
    <div className="sm:w-1/6">
      <span className="block text-white font-medium mb-5">{menuLabel}</span>
      <ul>{menuMap}</ul>
    </div>
  );
};

export default FooterMenu;
