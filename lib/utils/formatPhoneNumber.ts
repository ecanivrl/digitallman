import { formatPhoneNumberIntl } from "react-phone-number-input";

export const formatPhoneNumber = (phoneNumber: string) => {
  return formatPhoneNumberIntl(phoneNumber);
};
