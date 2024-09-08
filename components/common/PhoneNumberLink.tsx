import { useCurrentLocale } from "@/i18n/client";
import { formatPhoneNumber } from "@/lib/utils/formatPhoneNumber";
import { svgClasses } from "../layout/Navbar";
import PhoneSVG from "@/public/icons/phone.svg";
import { PhoneNumber } from "@/lib/types/phoneNumbers";
import { twMerge } from "tailwind-merge";

const phoneNumbers: { [key: string]: PhoneNumber } = {
  en: { number: "+15714437290", countryCode: "US" },
  tr: { number: "+905013293160", countryCode: "TR" },
  de: { number: "+491635638861", countryCode: "DE" },
};

const PhoneNumberLink = ({ className }: { className?: string }) => {
  const locale = useCurrentLocale();
  const phoneDetails = phoneNumbers[locale] || phoneNumbers.en;
  const { number, countryCode } = phoneDetails;

  const formattedPhoneNumber = formatPhoneNumber(number);

  return (
    <a
      href={`tel:${number}`}
      className={twMerge("flex cursor-pointer items-center gap-x-2", className)}
    >
      <PhoneSVG className={svgClasses} />
      <p className="text-xs font-semibold text-black lg:text-base">
        {formattedPhoneNumber}
      </p>
    </a>
  );
};

export default PhoneNumberLink;
