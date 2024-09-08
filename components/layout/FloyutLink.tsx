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
        className="relative text-sm font-semibold text-black400 hover:text-red-500 lg:text-base"
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
            className="absolute left-[200px] top-12 -translate-x-1/2 -translate-y-1/2 transform"
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
    <div className="grid w-screen grid-cols-4 gap-5 rounded-lg bg-white p-6 shadow-lg">
      <div className="flex w-full flex-col gap-y-1 rounded-lg border border-red-500 bg-white/10 p-3 shadow-md">
        <Link href="/our-services/graphic-design">
          <h2 className="rounded-md bg-red-500 py-2 text-center text-xl font-semibold text-white">
            {t("common.graphic-design")}
          </h2>
        </Link>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.cardvisit-brochure-catalog-design")}
            link="/our-services/graphic-design"
            as="/our-services/graphic-design#broşür"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.poster-and-banner-design")}
            link="/our-services/graphic-design"
            as="/our-services/graphic-design#banner"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.social-media-images")}
            link="/our-services/graphic-design"
            as="/our-services/graphic-design#social-media"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.corporate-presentations")}
            link="/our-services/graphic-design"
            as="/our-services/graphic-design#institutional"
          />
        </div>
      </div>

      <div className="flex w-full flex-col  gap-y-1 rounded-lg border border-red-500 bg-white/10 p-3 shadow-md">
        <Link href="/our-services/brand-consultancy">
          <h2 className="rounded-md bg-red-500 py-2 text-center text-xl font-semibold text-white">
            {t("common.brand-consultancy")}
          </h2>
        </Link>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.brand-strategy")}
            link="/our-services/brand-consultancy"
            as="/our-services/brand-consultancy#brand-strategy"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.market-analysis")}
            link="/our-services/brand-consultancy"
            as="/our-services/brand-consultancy#market-analysis"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.brand-positioning")}
            link="/our-services/brand-consultancy"
            as="/our-services/brand-consultancy#brand-positioning"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />

          <NavLink
            title={t("common.reputation-management")}
            link="/our-services/brand-consultancy"
            as="/our-services/brand-consultancy#reputation-management"
          />
        </div>
      </div>

      <div className="flex w-full flex-col  gap-y-1 rounded-lg border border-red-500 bg-white/10 p-3 shadow-md">
        <Link href="/our-services/digital-media">
          <h2 className="rounded-md bg-red-500 py-2 text-center text-xl font-semibold text-white">
            {t("common.digital-media")}
          </h2>
        </Link>

        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title="Instagram, YouTube ve LinkedIn"
            link="/our-services/digital-media"
            as="/our-services/digital-media#account-management"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.account-management")}
            link="/our-services/digital-media"
            as="/our-services/digital-media#account-management"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.content-production")}
            link="/our-services/digital-media"
            as="/our-services/digital-media#content-production"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.ads")}
            link="/our-services/digital-media"
            as="/our-services/digital-media#ads"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.analysis-and-reporting")}
            link="/our-services/digital-media"
            as="/our-services/digital-media#analysis"
          />
        </div>
      </div>

      <div className="flex w-full flex-col  gap-y-1 rounded-lg border border-red-500 bg-white/10 p-3 shadow-md">
        <Link href="/our-services/software-studies">
          <h2 className="rounded-md bg-red-500 py-2 text-center text-xl font-semibold text-white">
            {t("common.software-studies")}
          </h2>
        </Link>

        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.e-commerce")}
            link="/our-services/software-studies"
            as="/our-services/software-studies#e-commerce-and-mobile-applications"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.mobile-applications")}
            link="/our-services/software-studies"
            as="/our-services/software-studies#e-commerce-and-mobile-applications"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.corporate-website")}
            link="/our-services/software-studies"
            as="/our-services/software-studies#institutional"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title="SEO"
            link="/our-services/software-studies"
            as="/our-services/software-studies#e-commerce"
          />
        </div>
        <div className="flex items-center">
          <TickSVG className="h-4 w-4" />
          <NavLink
            title={t("common.data-analysis")}
            link="/our-services/software-studies"
            as="/our-services/software-studies#e-commerce"
          />
        </div>
      </div>
    </div>
  );
};
