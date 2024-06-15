"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import React from "react";
import AboutPNG from "@/public/images/about1.png";
import Img1 from "@/public/images/img7.png";
import { useI18n } from "@/i18n/client";
import NextImage from "@/components/NextImage";
import Address from "@/components/contact/Address";
import SocialComponent from "@/components/contact/SocialComponent";

const AboutClientPage = () => {
  const t = useI18n();
  return (
    <>
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          <section className="my-10 flex flex-col gap-x-5 gap-y-5 sm:my-20">
            <h1 className="mb-10 text-center text-3xl font-semibold md:text-6xl">
              {t("common.about")}
            </h1>
            <p className="text-sm lg:text-lg">{t("common.about-text")}</p>

            <NextImage
              src={AboutPNG}
              alt="About Us"
              className="h-72 w-full object-cover object-center md:h-96"
            />
          </section>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
      <PageBanner src={Img1} />
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          <div className="mb-20 flex flex-col gap-y-10">
            <h1 className="text-center text-lg font-semibold md:text-3xl">
              Sosyal Medya ve İletişim Bilgilerimiz
            </h1>
            <Address />
            <SocialComponent />
          </div>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default AboutClientPage;
