import React from "react";
import NextImage from "../NextImage";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

type PageBannerProps = {
  pageName?: string;
  src: string | StaticImageData;
  className?: string;
};

const PageBanner = ({ pageName, src, className }: PageBannerProps) => {
  return (
    <div
      className={twMerge(
        "relative mt-44 flex h-64 w-full items-center justify-center max-[900px]:mt-24 sm:h-96",
        className,
      )}
    >
      <NextImage
        src={src}
        alt="Banner"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-6xl font-bold text-white shadow-md">
        {pageName}
      </div>
    </div>
  );
};

export default PageBanner;
