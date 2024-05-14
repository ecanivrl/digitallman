"use client";

import { useI18n } from "@/i18n/client";
import { twMerge } from "tailwind-merge";
import { NavLink } from "../layout/Navbar";
import TickSVG from "@/public/icons/tick.svg";

const ServicesComponent = ({ designType }: { designType?: boolean }) => {
  const t = useI18n();

  return (
    <div
      className={twMerge(
        "grid grid-cols-1 gap-x-2 gap-y-6 md:grid-cols-2 xl:grid-cols-4",
      )}
    >
      <div className="flex w-full flex-col gap-y-1 rounded-lg border-2 border-black bg-white p-3 shadow-md">
        <h2 className="rounded-md bg-red-500 py-2 text-center text-xl font-semibold text-white">
          {t("common.corporate-image-studies")}
        </h2>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.corporate-identity-studies")}
            link="/test"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.graphic-design-studies")} link="/test" />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.promotional-films")} link="/test" />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.post-production-service")} link="/test" />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.brand-consultancy")} link="/test" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-1 rounded-lg border-2 border-black bg-white p-3 shadow-md">
        <h2 className="rounded-md bg-red-500 py-2 text-center text-xl font-semibold text-white">
          {t("common.digital-media-studies")}
        </h2>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.social-media-account-management")}
            link="/test"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.social-media-advertising-management")}
            link="/test"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.google-ads-advertising-management")}
            link="/test"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />

          <NavLink title={t("common.registration-service-maps")} link="/test" />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.seo-service")} link="/test" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-1 rounded-lg border-2 border-black bg-white p-3 shadow-md">
        <h2 className="rounded-md bg-red-500 py-2 text-center text-xl font-semibold text-white">
          {t("common.communication-studies")}
        </h2>

        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.corporate-website")} link="/test" />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.e-commer-site")} link="/test" />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.des")} link="/test" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-1 rounded-lg border-2 border-black bg-white p-3 shadow-md">
        <h2 className="rounded-md bg-red-500 py-2 text-center text-xl font-semibold text-white">
          {t("common.software-studies")}
        </h2>

        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.tv-advertising-works")} link="/test" />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.radio-advertising-works")} link="/test" />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink title={t("common.voice-over-service")} link="/test" />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
