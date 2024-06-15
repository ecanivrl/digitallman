"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import OurServicesLink from "@/components/home/OurServicesLink";
import BrandPng from "@/public/images/img11.png";
import { useI18n } from "@/i18n/client";
import AnalysisPng from "@/public/images/about.png";
import Image from "next/image";

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
          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Stratejik Marka Yönetimi
            </h1>
            <p>
              Marka danışmanlığı, markanızın stratejik yönünü belirlemek ve
              piyasada güçlü bir yer edinmek için yapılan kapsamlı çalışmaları
              kapsar. Doğru strateji ve yönlendirmelerle markanızın değerini ve
              bilinirliğini artırır.
            </p>
          </section>
          <section className="flex flex-col gap-y-2" id="brand-strategy">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Marka Stratejisi
            </h1>
            <p>
              Markanızın vizyon ve misyonunu belirleyerek, uzun vadeli stratejik
              planlar oluşturuyoruz.
            </p>
          </section>
          <section className="flex flex-col gap-y-2" id="market-analysis">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Pazar Analizi
            </h1>
            <p>
              Sektör ve rakip analizleri yaparak, markanızın güçlü yönlerini ve
              fırsatlarını belirliyoruz
            </p>

            <Image
              src={AnalysisPng}
              alt="Catalog"
              className="h-64 w-full rounded-md sm:w-64 "
            />
          </section>
          <section className="flex flex-col gap-y-2" id="brand-positioning">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Marka Konumlandırma
            </h1>
            <p>
              Hedef kitlenizde güçlü bir izlenim yaratacak marka konumlandırma
              çalışmaları gerçekleştiriyoruz.
            </p>
          </section>
          <section className="flex flex-col gap-y-2" id="Reputation-management">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              İtibar Yönetimi
            </h1>
            <p>
              Marka itibarınızı korumak ve güçlendirmek için stratejik iletişim
              ve PR çalışmaları yapıyoruz.
            </p>
          </section>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default BrandConsultancyClientPage;
