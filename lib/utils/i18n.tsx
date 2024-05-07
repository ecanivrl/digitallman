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

export const getLocalizedPhoneInputLabels = async (locale: LanguageCode) => {
  switch (locale) {
    case "en":
      return (await import("react-phone-number-input/locale/en.json")).default;
    case "tr":
      return (await import("react-phone-number-input/locale/tr.json")).default;
    case "de":
      return (await import("react-phone-number-input/locale/de.json")).default;
  }
};
