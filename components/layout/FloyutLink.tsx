"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { NavLink } from "./Navbar";
import { useI18n } from "@/i18n/client";
import TickSVG from "@/public/icons/tick.svg";

export type FlyoutContentProps = {
  children?: any;
  FlyoutContent?: () => JSX.Element;
  href: string;
};

const FlyoutLink = ({ href, children, FlyoutContent }: FlyoutContentProps) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  return (
    <div
      className={twMerge(
        "group relative shrink-0 cursor-pointer max-xl:hidden",
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="relative text-sm font-semibold text-black400 hover:text-red-500 lg:text-lg"
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-gradient-radial from-red-500 to-black transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ x: "-50%" }}
            className="absolute left-[207px] top-12 -translate-x-1/2 -translate-y-1/2 transform"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;

export const PricingContent = () => {
  const t = useI18n();

  return (
    <div className="grid w-screen grid-cols-4 gap-5 rounded-lg bg-black p-6 shadow-lg">
      <div className="flex w-full flex-col gap-y-1 rounded-lg bg-white p-3 shadow-md">
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
      <div className="flex w-full flex-col  gap-y-1 rounded-lg bg-white p-3 shadow-md">
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
      <div className="flex w-full flex-col  gap-y-1 rounded-lg bg-white p-3 shadow-md">
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
      <div className="flex w-full flex-col  gap-y-1 rounded-lg bg-white p-3 shadow-md">
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
