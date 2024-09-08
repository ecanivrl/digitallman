import { useCurrentLocale } from "@/i18n/client";
import { phoneNumbers } from "../../lib/data/phoneNumbers";

export function GetPhoneNumber() {
  const locale = useCurrentLocale();
  return phoneNumbers[locale] || phoneNumbers.en;
}
