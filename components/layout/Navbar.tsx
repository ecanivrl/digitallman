"use client";

import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { PageHorizontalPaddingContainer } from "../common/containers";
import useIsCurrentRoute from "../hooks/useIsCurrentRoute";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import useResponsive from "../hooks/useResponsive";
import HamburgerMenuSVG from "@/public/icons/hamburger.svg";
import Drawer from "./Drawer";
import clsx from "clsx";
import LocationSVG from "@/public/icons/location.svg";
import MailSVG from "@/public/icons/mail.svg";
import YoutubeSVG from "@/public/icons/youtube.svg";
import InstagramSVG from "@/public/icons/instagram.svg";
import FacebookSVG from "@/public/icons/facebook.svg";
import LinkedinSVG from "@/public/icons/linkedin.svg";
import LocaleSelector from "../common/LocaleSelector";
import { useI18n } from "@/i18n/client";

const Navbar = ({ className, ...rest }: ComponentPropsWithoutRef<"header">) => {
  const t = useI18n();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 0);
    const onScroll = (): void => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return (): void => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const { md } = useResponsive({ watchPoints: ["md"] });

  return (
    <div
      className={twMerge("fixed top-0 z-40 w-full shadow-lg", className)}
      {...rest}
    >
      {!scrolled && <TopInformation />}
      <header
        className={clsx(
          "flex w-full py-4 transition-all duration-300",
          "bg-gray-100",
          "max-md:shadow-[0px_4px_20px_rgba(0,0,0,0.1);]",
          scrolled &&
            "supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:backdrop-blur-md max-md:supports-[backdrop-filter]:bg-white/60",
        )}
      >
        <PageHorizontalPaddingContainer className="w-full">
          {md ? (
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h1 className="rounded-lg border border-black p-2 text-lg font-bold text-black hover:bg-gray-200 lg:text-2xl">
                  Digitallman.com
                </h1>
              </Link>
              <div className="flex items-center justify-between gap-x-1">
                <NavLink title={t("home.homepage")} link="/" />
                <NavLink title={t("common.who-are-we")} link="/debb" />
                <NavLink title={t("common.what-we-do")} link="/wfwf" />
                <NavLink title={t("common.our-demos")} link="/avaf" />
                <NavLink title={t("common.contact")} link="/contact" />
                <LocaleSelector />
              </div>
            </div>
          ) : (
            <div className="flex w-full items-center justify-between">
              <HamburgerMenuSVG
                className="cursor-pointer rounded-full"
                onClick={() => setDrawerOpen(!isDrawerOpen)}
              />
              <Link href="/">
                <h1 className="rounded-lg border border-black p-2 text-2xl font-bold text-black hover:bg-gray-200">
                  Digitallman.com
                </h1>
              </Link>
              <div />
            </div>
          )}
        </PageHorizontalPaddingContainer>
      </header>

      <Drawer isOpen={isDrawerOpen} setIsOpen={setDrawerOpen} />
    </div>
  );
};

export default Navbar;

export const NavLink = ({
  title,
  link,
  className,
  onClick,
}: {
  title: ReactNode;
  link: string;
  className?: string;
  onClick?: () => void;
}) => {
  const { isCurrentRoute } = useIsCurrentRoute(link);
  const linkUrl = new URL(link, "https://example.com");
  return (
    <Link
      onClick={onClick}
      className={twMerge(
        `${isCurrentRoute ? "font-bold" : "hover:text-black300"}
         whitespace-nowrap px-2.5 py-2 text-sm font-semibold
         `,
        className,
      )}
      href={link}
      scroll={!linkUrl.hash}
    >
      {title}
    </Link>
  );
};

export const TopInformation = () => {
  const t = useI18n();

  return (
    <>
      <div className="w-full bg-black400">
        <PageHorizontalPaddingContainer className="mx-auto flex w-full max-w-[1340px] items-center justify-between px-5 py-5 max-[900px]:hidden md:px-10 ">
          <div className="flex items-center gap-x-2 text-xs">
            <LocationSVG className={svgClasses} />
            <p className="text-xs font-semibold text-white">
              Bozkurt Mah. Selvi Sok. No 1410. İstanbul, Türkiye
            </p>
          </div>
          <div className="flex items-center justify-between gap-x-10">
            <div className="flex items-center gap-x-2">
              <MailSVG className={svgClasses} />
              <p className="text-xs font-semibold text-white">
                digitallman@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-xs font-semibold text-white">
                {t("common.social-media")}
              </span>
              <InstagramSVG className={svgClasses} />
              <FacebookSVG className={svgClasses} />
              <YoutubeSVG className={svgClasses} />
              <LinkedinSVG className={svgClasses} />
            </div>
          </div>
        </PageHorizontalPaddingContainer>
      </div>
    </>
  );
};

export const svgClasses =
  "h-7 w-7 cursor-pointer transition-all duration-100 hover:scale-125";
