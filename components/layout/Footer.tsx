"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { PageHorizontalPaddingContainer } from "@/components/common/containers";
import { NavLink, svgClasses } from "./Navbar";
import { useI18n } from "@/i18n/client";
import LocationSVG from "@/public/icons/location.svg";
import MailSVG from "@/public/icons/mail.svg";
import YoutubeSVG from "@/public/icons/youtube.svg";
import InstagramSVG from "@/public/icons/instagram.svg";
import FacebookSVG from "@/public/icons/facebook.svg";
import LinkedinSVG from "@/public/icons/linkedin.svg";
import PhoneSVG from "@/public/icons/phone.svg";
import TwitterSVG from "@/public/icons/twitter.svg";

const Footer = ({ className, ...rest }: ComponentPropsWithoutRef<"footer">) => {
  const t = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer
      className={twMerge("flex bg-gray-100 pb-10 pt-20", className)}
      {...rest}
    >
      <PageHorizontalPaddingContainer className="flex flex-col">
        <div className="flex flex-row justify-between gap-x-6 gap-y-16 max-xl:flex-wrap">
          <div className="flex flex-col gap-y-5">
            <div className="flex max-w-sm flex-col gap-5">
              <h1 className="w-fit rounded-lg border border-black p-2 text-2xl font-bold text-black hover:bg-gray-200">
                Digitallman.com
              </h1>
              <p className="text-xs font-semibold lg:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                laborum, nesciunt mollitia laboriosam facilis aliquam quisquam.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <FooterGroup title={t("common.social-media")} className="mt-5" />
              <div className="-mt-7 flex items-center gap-4">
                <a target="_blank" href="/?">
                  <InstagramSVG className={svgClasses} />
                </a>
                <a target="_blank" href="/?">
                  <FacebookSVG className={svgClasses} />
                </a>
                <a target="_blank" href="/?">
                  <TwitterSVG className={svgClasses} />
                </a>
                <a target="_blank" href="/?">
                  <YoutubeSVG className={svgClasses} />
                </a>
                <a target="_blank" href="/?">
                  <LinkedinSVG className={svgClasses} />
                </a>
              </div>
            </div>
          </div>
          <FooterGroup title={t("common.contact-us")}>
            <div className="flex items-center gap-x-2">
              <LocationSVG className={svgClasses} />
              <p className="text-xs font-semibold text-black lg:text-base">
                Bozkurt Mah. Selvi Sok. No 10. İstanbul, Türkiye
              </p>
            </div>
            <div className="my-4 flex items-center gap-x-2">
              <MailSVG className={svgClasses} />
              <p className="text-xs font-semibold text-black lg:text-base">
                digitallman@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <PhoneSVG className={svgClasses} />
              <p className="text-xs font-semibold text-black lg:text-base">
                09+ 123 456 78 90
              </p>
            </div>
          </FooterGroup>
          <FooterGroup title={t("common.institutional")}>
            <NavLink title={t("common.about")} link="/about" />
            <NavLink title={t("common.what-we-do")} link="/our-services" />
            <NavLink title={t("common.our-demos")} link="/our-demos" />
            <NavLink title={t("common.contact")} link="/contact" />
            <NavLink title="KVKK" link="/kvkk" />
          </FooterGroup>
          <FooterGroup title={t("common.what-we-do")}>
            <NavLink title={t("common.corporate-image-studies")} link="/c" />
            <NavLink title={t("common.digital-media-studies")} link="/a" />
            <NavLink title={t("common.software-studies")} link="/r" />
            <NavLink title={t("common.communication-studies")} link="/g" />
            <NavLink title={t("common.corporate-website")} link="/n" />
          </FooterGroup>
        </div>

        <div className="mx-auto my-5 flex w-full justify-center border-b border-black200 max-md:hidden" />
        <span className="mx-auto my-5 flex text-center text-xs md:text-lg">
          © {year}{" "}
          <span className="font-medium">&nbsp; Digitallman.com &nbsp;</span> |
          &nbsp;
          {t("common.all-rights-reserved")}
        </span>
      </PageHorizontalPaddingContainer>
    </footer>
  );
};

export default Footer;

export const FooterGroup = ({
  title,
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"div"> & { title?: string }) => {
  return (
    <div className={twMerge("flex flex-col gap-5", className)} {...rest}>
      <h3 className="text-xl font-medium">{title}</h3>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
};
