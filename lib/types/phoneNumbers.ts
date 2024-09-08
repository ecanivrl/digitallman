import { CountryCode } from "libphonenumber-js";

export type PhoneNumber = {
  number: string;
  countryCode: CountryCode;
};
