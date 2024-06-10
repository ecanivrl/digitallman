"use client";

import React, { useEffect, useRef, useState } from "react";
import useOnExternalClick from "@/components/hooks/useOnExternalClick";
import CloseSVG from "@/public/icons/close.svg";
import { NavLink } from "./Navbar";
import { useI18n } from "@/i18n/client";
import LocaleSelector from "../common/LocaleSelector";
import Link from "next/link";
const Drawer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen?: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const t = useI18n();

  const ref = useRef<HTMLDivElement>(null);
  const [externalClickListenerEnabled, setExternalClickListenerEnabled] =
    useState(false);

  useOnExternalClick(
    ref,
    () => setIsOpen(false),
    !externalClickListenerEnabled,
  );

  useEffect(() => {
    setExternalClickListenerEnabled(isOpen!);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const NavLinkClasses =
    "w-[90%] border py-3 rounded-lg bg-red-500 text-white text-center hover:text-white hover:scale-90 transition-all duration-300 mx-auto";

  return (
    <aside
      ref={ref}
      className={`fixed top-0 z-50 h-screen w-full items-center rounded-r-2xl border-r border-gray-100 bg-white px-6 py-1 drop-shadow-xl
        transition-all duration-1000 sm:w-72
         ${isOpen ? "left-0" : "-left-full"} `}
    >
      <CloseSVG
        className="ml-auto mt-5 w-6 cursor-pointer justify-end"
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <div className="flex w-full flex-col gap-y-10">
        <Link href="/" className="mx-auto w-[90%]">
          <h1 className="mt-5 rounded-lg border border-black p-2 text-center text-lg font-bold text-black hover:bg-gray-200 lg:text-2xl">
            Digitallman.com
          </h1>
        </Link>

        <NavLink
          className={NavLinkClasses}
          title={t("home.homepage")}
          link="/"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          className={NavLinkClasses}
          title={t("common.about")}
          link="/about"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          className={NavLinkClasses}
          title={t("common.what-we-do")}
          link="/our-services"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          className={NavLinkClasses}
          title={t("common.our-demos")}
          link="/our-demos"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          className={NavLinkClasses}
          title={t("common.contact")}
          link="/contact"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <LocaleSelector className="mx-auto mt-8 w-[50%] bg-gray-100 " />
    </aside>
  );
};

export default Drawer;
