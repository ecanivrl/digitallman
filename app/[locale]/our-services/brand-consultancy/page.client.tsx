"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import OurServicesLink from "@/components/home/OurServicesLink";
import BrandPng from "@/public/images/img9.png";
import BrandManagementPng from "@/public/images/brand-management.png";
import BrandPositioningPng from "@/public/images/brand-positioning.png";
import { useI18n } from "@/i18n/client";
import AnalysisPng from "@/public/images/about.png";
import DesignCard from "@/components/common/DesignCard";

const BrandConsultancyClientPage = () => {
  const t = useI18n();
  return (
    <>
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer className="mb-20 flex flex-col gap-y-10">
          <section>
            <h1 className="m-16 text-center text-3xl font-semibold md:text-6xl">
              {t("common.brand-consultancy")}
            </h1>
            <div className="flex w-full flex-col gap-5 md:flex-row">
              <OurServicesLink />
              <PageBanner src={BrandPng} />
            </div>
          </section>
          <div className="flex w-full flex-col gap-20">
            <DesignCard
              imgUrl={BrandManagementPng}
              title={t("common.strategic-brand-management")}
              description={t("common.strategic-brand-management-text")}
            />
            <DesignCard
              className="!flex-row-reverse"
              imgUrl={AnalysisPng}
              title={t("common.market-analysis")}
              description={t("common.market-analysis-text")}
            />
            <DesignCard
              imgUrl={BrandPositioningPng}
              title={t("common.brand-positioning")}
              description={t("common.brand-positioning-text")}
            />
          </div>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default BrandConsultancyClientPage;
