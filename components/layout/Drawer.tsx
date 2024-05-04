"use client";

import React, { useEffect, useRef, useState } from "react";
import useOnExternalClick from "@/components/hooks/useOnExternalClick";
import CloseSVG from "@/public/icons/close.svg";
import { NavLink } from "./Navbar";
import { useI18n } from "@/i18n/client";
import LocaleSelector from "../common/LocaleSelector";
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

  return (
    <aside
      ref={ref}
      className={`fixed top-0 z-50 h-screen w-[90%] rounded-r-2xl border-r border-gray-100 bg-white px-6 py-1 sm:w-72 ${
        isOpen ? "left-0" : "-left-full"
      } drop-shadow-xl transition-all duration-1000`}
    >
      <CloseSVG
        className="ml-auto mt-5 w-5 cursor-pointer justify-end"
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <div className="flex w-full flex-col gap-y-10">
        <h1 className="text-xl font-bold">Digitallman.com</h1>

        <NavLink
          className="w-full border border-black text-center"
          title={t("home.homepage")}
          link="/"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          className="w-full border border-black text-center"
          title={t("common.who-are-we")}
          link="#hakkımızda"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          className="w-full border border-black text-center"
          title={t("common.what-we-do")}
          link="#hizmetlerimiz"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          className="w-full border border-black text-center"
          title={t("common.our-demos")}
          link="#galeri"
          onClick={() => setIsOpen(false)}
        />
        <NavLink
          className="w-full border border-black text-center"
          title={t("common.contact")}
          link="/contact"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <LocaleSelector className="mt-8 border border-black bg-gray-100" />
    </aside>
  );
};

export default Drawer;
