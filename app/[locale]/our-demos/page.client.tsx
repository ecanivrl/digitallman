"use client";

import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import Slider from "@/components/home/Slider";
import { NavLink } from "@/components/layout/Navbar";
import { useI18n } from "@/i18n/client";
import TickSVG from "@/public/icons/tick.svg";
import { sliderData } from "@/components/home/data";
import DemoCard from "@/components/our-demos/DemoCard";
import { PricingContent } from "@/components/layout/FloyutLink";
import ServicesComponent from "@/components/home/ServicesComponent";

const OurDemosClientPage = () => {
  const t = useI18n();

  return (
    <PageTopPaddingContainer>
      <PageHorizontalPaddingContainer>
        <section className="my-10 flex flex-col gap-x-5 gap-y-5 sm:my-20">
          <h1 className="mb-2 text-center text-3xl font-semibold md:text-6xl">
            {t("common.our-demos")}
          </h1>
          <p className="my-2 text-center  text-base md:text-xl">
            {t("common.our-demos-text")}
          </p>

          <Slider
            className="my-16"
            per={true}
            cards={(sliderData ?? []).map((item) => (
              <DemoCard key={item.id} sliderCardItem={item} />
            ))}
          />

          <h2 className="mt-16 text-xl font-semibold md:text-3xl">
            {t("common.our-product-services")}
          </h2>
          <ServicesComponent />
        </section>
      </PageHorizontalPaddingContainer>
    </PageTopPaddingContainer>
  );
};

export default OurDemosClientPage;
