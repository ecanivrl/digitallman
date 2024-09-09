import React from "react";
import LocationSVG from "@/public/icons/location.svg";
import MailSVG from "@/public/icons/mail.svg";
import WhatsappSVG from "@/public/icons/whatsapp.svg";
import PhoneSVG from "@/public/icons/phone.svg";
import { twMerge } from "tailwind-merge";
import { svgClasses } from "@/components/layout/Navbar";

const Address = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "flex flex-wrap items-center justify-between gap-4 rounded-lg border-2 border-red-500 p-5 shadow-md sm:gap-2",
        className,
      )}
    >
      <div className="flex items-center gap-x-2">
        <LocationSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">
          1234 Street Name, City Name, Country
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <MailSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">
          info@digitallman.com
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <PhoneSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">
          0501 329 31 60
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <WhatsappSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">
          0501 329 31 60
        </p>
      </div>
    </div>
  );
};

export default Address;
