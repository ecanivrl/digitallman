import { getI18n } from "@/i18n/server";
import { Metadata, ResolvingMetadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { generatePageMetadata } from "@/components/utils";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import Slider from "@/components/home/Slider";
import SliderCard from "@/components/home/SliderCard";
import { homeCardData, sliderData } from "@/components/home/data";
import HomeCard from "@/components/home/HomeCard";
import AboutComponent from "@/components/home/AboutComponent";
import ServiceRequestSection from "@/components/home/ServiceRequestSection";

export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getI18n();

  return await generatePageMetadata({ title: t("home.homepage") }, parent);
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();

  return (
    <>
      <PageTopPaddingContainer className="min-[900px]:mt-10">
        {/* Slider  */}
        <Slider
          cards={(sliderData ?? []).map((item) => (
            <SliderCard key={item.id} sliderCardItem={item} />
          ))}
        />
      </PageTopPaddingContainer>
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          {/* What We Do */}
          <section>
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
      {/* ServiceRequestSection */}
      <PageHorizontalPaddingContainer>
        <ServiceRequestSection />
      </PageHorizontalPaddingContainer>
      {/* {About} */}
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          <section className="mb-20">
            <h1 className="mb-10 text-center text-3xl font-semibold md:text-6xl">
              {t("common.about")}
            </h1>
            <AboutComponent />
          </section>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
}
