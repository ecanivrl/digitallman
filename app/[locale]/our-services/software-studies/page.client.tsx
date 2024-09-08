"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import OurServicesLink from "@/components/home/OurServicesLink";
import { useI18n } from "@/i18n/client";
import SoftwarePng1 from "@/public/images/software1.png";
import SoftwarePng from "@/public/images/software.png";
import SEOPng from "@/public/images/seo.jpg";
import MobileAppPng from "@/public/images/mobile-app1.png";
import DesignCard from "@/components/common/DesignCard";
import AnalysisPng from "@/public/images/about.png";

const SoftwareStudiesClientPage = () => {
  const t = useI18n();
  return (
    <>
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer className="mb-20 flex flex-col gap-y-10">
          <section className="mb-20">
            <h1 className="m-16 text-center text-3xl font-semibold md:text-6xl">
              {t("common.software-studies")}
            </h1>
            <div className="flex w-full flex-col gap-5 md:flex-row">
              <OurServicesLink />
              <PageBanner src={SoftwarePng1} />
            </div>
          </section>

          <div className="flex w-full flex-col gap-20">
            <DesignCard
              imgUrl={SoftwarePng}
              title={t("common.corporate-website")}
              description={t("common.corporate-website-text")}
            />
            <DesignCard
              className="!flex-row-reverse"
              imgUrl={MobileAppPng}
              title={t("common.mobile-applications")}
              description={t("common.mobile-app-text")}
            />
            <DesignCard
              imgUrl={SEOPng}
              title="SEO"
              description={t("common.seo-text")}
            />
            <DesignCard
              className="!flex-row-reverse"
              imgUrl={AnalysisPng}
              title={t("common.data-analysis")}
              description={t("common.data-analysis-text")}
            />
          </div>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default SoftwareStudiesClientPage;
