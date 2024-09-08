"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import OurServicesLink from "@/components/home/OurServicesLink";
import { useI18n } from "@/i18n/client";
import DigitalPng from "@/public/images/img5.png";
import AdsPng from "@/public/images/ads.jpg";
import GoogleAdsPng from "@/public/images/google-ads.jpg";
import DesignCard from "@/components/common/DesignCard";
import SocialMediaPng from "@/public/images/social-media.png";
import ContentPng from "@/public/images/content.png";
import SEOPng from "@/public/images/seo.jpg";
import AnalysisPng from "@/public/images/about.png";

const DigitalMediaClientPage = () => {
  const t = useI18n();
  return (
    <>
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer className="mb-20 flex flex-col gap-y-10">
          <section className="mb-20">
            <h1 className="m-16 text-center text-3xl font-semibold md:text-6xl">
              {t("common.digital-media")}
            </h1>
            <div className="flex w-full flex-col gap-5 md:flex-row">
              <OurServicesLink />
              <PageBanner src={DigitalPng} />
            </div>
          </section>

          <div className="flex w-full flex-col gap-20">
            <DesignCard
              imgUrl={SocialMediaPng}
              title={t("common.social-media-account-management")}
              description={t("common.corporate-website-text")}
            />
            <DesignCard
              className="!flex-row-reverse"
              imgUrl={ContentPng}
              title={t("common.content-production")}
              description={t("common.content-production-text")}
            />
            <section className="flex flex-col gap-y-2">
              <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
                {t("common.google-search-console-management")}
              </h1>
              <p>{t("common.google-search-console-management-text")}</p>
            </section>
            <DesignCard
              imgUrl={SEOPng}
              title="SEO"
              description={t("common.seo-text")}
            />
            <section className="flex flex-col gap-y-2">
              <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
                {t("common.keyword-research")}
              </h1>
              <p>{t("common.keyword-research-text")}</p>
            </section>
            <DesignCard
              className="!flex-row-reverse"
              imgUrl={AdsPng}
              title={t("common.ads")}
              description={t("common.ads-text")}
            />
            <DesignCard
              imgUrl={AnalysisPng}
              title={t("common.data-analysis")}
              description={t("common.data-analysis-text")}
            />
            <section className="flex flex-col gap-y-2">
              <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
                {t("common.Performance-Monitoring")}
              </h1>
              <p>{t("common.Performance-Monitoring-text")}</p>
            </section>
            <DesignCard
              imgUrl={GoogleAdsPng}
              title={t("common.google-ads")}
              description={t("common.google-ads-text")}
            />
          </div>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default DigitalMediaClientPage;
