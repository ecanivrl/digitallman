import React from "react";
import NextImage from "../NextImage";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

type PageBannerProps = {
  src: string | StaticImageData;
  className?: string;
};

const PageBanner = ({ src, className }: PageBannerProps) => {
  return (
    <div
      className={twMerge(
        "flex h-80 w-full items-center justify-center",
        className,
      )}
    >
      <NextImage
        src={src}
        alt="Banner"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default PageBanner;
