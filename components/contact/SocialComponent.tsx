import React from "react";
import { twMerge } from "tailwind-merge";
import YoutubeSVG from "@/public/icons/youtube.svg";
import InstagramSVG from "@/public/icons/instagram.svg";
import FacebookSVG from "@/public/icons/facebook.svg";
import LinkedinSVG from "@/public/icons/linkedin.svg";
import TwitterSVG from "@/public/icons/twitter.svg";
import { svgClasses } from "../layout/Navbar";

const SocialComponent = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "flex flex-wrap items-center justify-between gap-7 rounded-lg border-2 border-red-500 p-5 shadow-md sm:gap-2",

        className,
      )}
    >
      <div className="flex items-center gap-x-2">
        <YoutubeSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">Youtube</p>
      </div>
      <div className="flex items-center gap-x-2">
        <InstagramSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">
          Instagram
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <TwitterSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">Twitter</p>
      </div>
      <div className="flex items-center gap-x-2">
        <FacebookSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">
          Facebook
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <LinkedinSVG className={svgClasses} />
        <p className="text-xs font-semibold text-black sm:text-base">
          Linkedin
        </p>
      </div>
    </div>
  );
};

export default SocialComponent;
