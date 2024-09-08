"use client";

import { useI18n } from "@/i18n/client";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "../common/Button";

const OurServicesLink = ({ className }: { className?: string }) => {
  const t = useI18n();

  return (
    <div
      className={twMerge(
        "flex h-80 w-full shrink-0 flex-col gap-y-5 rounded-lg bg-black p-5 shadow-md md:w-72",
        className,
      )}
    >
      <h1 className="mx-auto text-xl font-semibold text-white">
        {t("common.what-we-do")}
      </h1>
      <Link href="/our-services/graphic-design">
        <Button variant="negative" className="w-full">
          {t("common.graphic-design")}
        </Button>
      </Link>
      <Link href="/our-services/brand-consultancy">
        <Button variant="negative" className="w-full">
          {t("common.brand-consultancy")}
        </Button>
      </Link>
      <Link href="/our-services/digital-media">
        <Button variant="negative" className="w-full">
          {t("common.digital-media")}
        </Button>
      </Link>
      <Link href="/our-services/software-studies">
        <Button variant="negative" className="w-full">
          {t("common.software-studies")}
        </Button>
      </Link>
    </div>
  );
};

export default OurServicesLink;
