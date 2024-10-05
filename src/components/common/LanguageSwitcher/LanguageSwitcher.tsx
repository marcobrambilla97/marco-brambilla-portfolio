import React from "react";
import { Link } from "gatsby";
import { IPageLangProps } from "../../../types/page-types";
import { ILanguage } from "../../../types/components-types";
import { IWpPageQuery } from "../../../types/queries-types";

const LanguageSwitcher = ({ currentLang, translations }: IPageLangProps) => {
  const availableLang = translations?.filter(
    (language: ILanguage) => language.code !== currentLang,
  );
  const spanText = currentLang === "EN" ? "Cambia in" : "Switch to";

  return (
    <>
      {translations && (
        <ul className="sm:mr-[14rem]">
          {availableLang?.map((language: IWpPageQuery) => (
            <li key={language.language.code}>
              <Link to={language.uri} className="py-3 mb-3 block sm:py-0 sm:mb-0">
                <span className="visible sm:hidden">{spanText}</span>{" "}
                {language.language.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default LanguageSwitcher;
