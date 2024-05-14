"use client";

import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import HomeCard from "@/components/home/HomeCard";
import { homeCardData } from "@/components/home/data";
import { useI18n } from "@/i18n/client";
import React from "react";

const OurServicesClientPage = () => {
  const t = useI18n();

  return (
    <PageTopPaddingContainer>
      <PageHorizontalPaddingContainer>
        {/* What We Do */}
        <section className="my-20">
          <h1 className="mb-10 text-center text-3xl font-semibold md:text-6xl">
            {t("common.what-we-do")}
          </h1>
          <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {(homeCardData ?? []).map((item) => (
              <HomeCard key={item.id} homeCardItem={item} />
            ))}
          </div>
        </section>
      </PageHorizontalPaddingContainer>
    </PageTopPaddingContainer>
  );
};

export default OurServicesClientPage;
