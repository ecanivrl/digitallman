"use client";

import { useCurrentLocale } from "@/i18n/client";
import { formatPhoneNumber } from "@/lib/utils/formatPhoneNumber";
import { twMerge } from "tailwind-merge";
import WhatsappSVG from "@/public/icons/whatsapp.svg";
import { PhoneNumber } from "@/lib/types/phoneNumbers";

const phoneNumber: { [key: string]: PhoneNumber } = {
  en: { number: "+15714437290", countryCode: "US" },
  tr: { number: "+905013293160", countryCode: "TR" },
  de: { number: "+491635638861", countryCode: "DE" },
};

const Whatsapp = ({
  className,
  status,
}: {
  className?: string;
  status: boolean;
}) => {
  const locale = useCurrentLocale();
  const phoneDetails = phoneNumber[locale] || phoneNumber.en;
  const { number, countryCode } = phoneDetails;

  const formattedPhoneNumber = formatPhoneNumber(number);

  return (
    <a
      href={`tel:${number}`}
      className={twMerge(
        "fixed  bottom-[74px] right-3 rounded-full border border-white bg-white p-1 shadow-lg shadow-[#57B752]",
        "z-50 animate-none cursor-pointer",
        !status && "bottom-4 animate-bounce",
        className,
      )}
    >
      <WhatsappSVG className="h-10 w-10" />
    </a>
  );
};

export default Whatsapp;
