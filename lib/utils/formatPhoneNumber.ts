// import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";
import { formatPhoneNumberIntl } from "react-phone-number-input";

// export function formatPhoneNumber(
//   phoneNumber: string,
//   countryCode: CountryCode,
// ): string {
//   const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode);

//   if (parsedNumber) {
//     return parsedNumber.formatInternational();
//   }
//   return phoneNumber;
// }

export const formatPhoneNumber = (phoneNumber: string) => {
  return formatPhoneNumberIntl(phoneNumber);
};
