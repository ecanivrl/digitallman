"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import NextImage from "@/components/NextImage";
import { StaticImageData } from "next/image";

type sliderCardItemTypes = {
  img: string | StaticImageData;
};

const SliderCard = ({
  className,
  sliderCardItem,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  sliderCardItem: sliderCardItemTypes;
}) => {
  return (
    <NextImage
      src={sliderCardItem.img}
      alt="gallery image"
      className={twMerge(
        "h-[calc(100vh_-_150px)] w-screen object-cover",
        className,
      )}
      {...rest}
    />
  );
};

export default SliderCard;
