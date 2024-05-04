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

const Footer = ({ className, ...rest }: ComponentPropsWithoutRef<"footer">) => {
  const t = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer
      className={twMerge("flex bg-gray-100 pb-10 pt-20 text-sm", className)}
      {...rest}
    >
      <PageHorizontalPaddingContainer className="flex flex-col">
        <div className="flex gap-5 max-md:flex-col md:gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex max-w-sm flex-col gap-5">
              <h1 className="w-fit rounded-lg border border-black p-2 text-2xl font-bold text-black hover:bg-gray-200">
                Digitallman.com
              </h1>
              <p className="text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                laborum, nesciunt mollitia laboriosam facilis aliquam quisquam.
                Similique doloribus asperiores harum?
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
                  <YoutubeSVG className={svgClasses} />
                </a>
                <a target="_blank" href="/?">
                  <LinkedinSVG className={svgClasses} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex grow justify-between gap-10 text-xs max-sm:flex-col sm:flex-wrap md:gap-20">
            <FooterGroup title={t("common.contact-us")}>
              <div className="flex items-center gap-x-2 text-xs">
                <LocationSVG className={svgClasses} />
                <p className="text-xs font-semibold text-black">
                  Bozkurt Mah. Selvi Sok. No 1410. İstanbul, Türkiye
                </p>
              </div>
              <div className="my-4 flex items-center gap-x-2">
                <MailSVG className={svgClasses} />
                <p className="text-xs font-semibold text-black">
                  digitallman@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <PhoneSVG className={svgClasses} />
                <p className="text-xs font-semibold text-black">
                  09+ 123 456 78 90
                </p>
              </div>
            </FooterGroup>
            <FooterGroup title={t("common.institutional")}>
              <NavLink title={t("common.who-are-we")} link="/debb" />
              <NavLink title={t("common.what-we-do")} link="/wfwf" />
              <NavLink title={t("common.our-demos")} link="/avaf" />
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
        </div>
        <div className="mx-auto mt-2 flex w-full justify-center border-b border-black200 max-md:hidden" />
        <span className="mx-auto mt-5 flex text-center sm:mt-16">
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
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
