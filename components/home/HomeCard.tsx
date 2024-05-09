"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "../common/Button";
import NextImage from "../NextImage";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { useI18n } from "@/i18n/client";

type HomeCardProps = {
  img: string | StaticImageData;
  title: string;
  href: string;
};

const HomeCard = ({
  homeCardItem,
  className,
}: {
  homeCardItem: HomeCardProps;
  className?: string;
}) => {
  const t = useI18n();

  return (
    <div
      className={twMerge(
        "group relative flex h-[420px] w-full flex-col rounded-md shadow-md transition-all duration-300 hover:scale-95 ",
        className,
      )}
    >
      <div className="absolute top-0 z-10 hidden h-72 w-full rounded-t-md bg-black/30 hover:animate-pulse group-hover:block" />
      <NextImage
        src={homeCardItem.img}
        alt="img1"
        className="h-72 w-full rounded-t-md object-cover"
      />
      <h1 className="my-4 text-center text-base font-semibold text-black md:text-xl">
        {homeCardItem.title}
      </h1>
      <Link href={homeCardItem.href} passHref>
        <Button
          showArrow={true}
          type="button"
          variant="negative"
          className=" mx-auto w-[90%]"
        >
          {t("common.learn-more")}
        </Button>
      </Link>
    </div>
  );
};

export default HomeCard;
