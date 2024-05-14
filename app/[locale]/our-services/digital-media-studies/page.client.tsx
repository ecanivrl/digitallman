"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import { corporateImageData } from "@/components/home/data";
import OurservicesCard from "@/components/our-services/OurservicesCard";
import { useI18n } from "@/i18n/client";
import DigitalPng from "@/public/images/img5.png";

const DigitalMediaStudiesClientPage = () => {
  const t = useI18n();
  return (
    <>
      <PageBanner src={DigitalPng} />
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          <section className="mb-20">
            <h1 className="mb-10 text-center text-3xl font-semibold md:text-6xl">
              {t("common.digital-media-studies")}
            </h1>
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {(corporateImageData ?? []).map((item) => (
                <OurservicesCard key={item.id} serviceCardItem={item} />
              ))}
            </div>
          </section>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default DigitalMediaStudiesClientPage;
