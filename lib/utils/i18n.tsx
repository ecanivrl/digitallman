import Language from "../types/i18n/Language";

export const languageList = {
  tr: {
    code: "tr",
    nativeName: "Türkçe",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg",
    unicodeFlagCountry: "TR",
  } as Language,
  en: {
    code: "en",
    nativeName: "English",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    unicodeFlagCountry: "US",
  } as Language,

  de: {
    code: "de",
    nativeName: "Almanca",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
    unicodeFlagCountry: "DE",
  } as Language,
};

export type LanguageCode = keyof typeof languageList;
