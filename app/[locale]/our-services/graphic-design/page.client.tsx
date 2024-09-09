"use client";

import PageBanner from "@/components/common/PageBanner";
import { useI18n } from "@/i18n/client";
import React from "react";
import GraphicDesignPng from "@/public/images/graphic-design.jpg";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import OurServicesLink from "@/components/home/OurServicesLink";
import GraphicPng from "@/public/images/graphic.png";
import SocialPng from "@/public/images/img4.png";
import DesignCard from "@/components/common/DesignCard";
import CorporatePng from "@/public/images/corporate.png";
import GraphicPNG from "@/public/images/graphic2.png";
import BilboardPNG from "@/public/images/bilboard.png";

const GraphicDesignClientPage = () => {
  const t = useI18n();
  return (
    <PageTopPaddingContainer>
      <PageHorizontalPaddingContainer className="mb-20 flex flex-col gap-y-10">
        <section>
          <h1 className="m-16 text-center text-3xl font-semibold md:text-6xl">
            {t("common.graphic-design")}
          </h1>
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <OurServicesLink />
            <PageBanner src={GraphicPng} />
          </div>
        </section>
        <div className="flex w-full flex-col gap-20">
          <DesignCard
            imgUrl={GraphicDesignPng}
            title={t("common.creativity-in-visual-expression")}
            description={t("common.creavitiy-in-visual-expression-text")}
          />

          <DesignCard
            className="!flex-row-reverse"
            imgUrl={BilboardPNG}
            title={t("common.poster-and-banner-design")}
            description={t("common.poster-and-banner-text")}
          />
          <DesignCard
            imgUrl={GraphicPNG}
            title={t("common.cardvisit-brochure-catalog-design")}
            description={t("common.cardvisit-brochure-catalog-design-text")}
          />
          <DesignCard
            className="!flex-row-reverse"
            imgUrl={SocialPng}
            title={t("common.social-media-images")}
            description={t("common.social-media-images-text")}
          />
          <DesignCard
            imgUrl={CorporatePng}
            title={t("common.corporate-presentations")}
            description={t("common.corporate-presentations-text")}
          />
        </div>
      </PageHorizontalPaddingContainer>
    </PageTopPaddingContainer>
  );
};

export default GraphicDesignClientPage;
