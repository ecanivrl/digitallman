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
import Image from "next/image";
import CatalogPng from "@/public/images/catalog.jpg";
import BannerPng from "@/public/images/banner.jpg";
import SocialPng from "@/public/images/img4.png";

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
            <PageBanner src={GraphicDesignPng} />
          </div>
        </section>
        <section className="flex flex-col gap-y-2">
          <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
            Görsel Anlatımda Yaratıcılık
          </h1>
          <p>
            Grafik tasarım, markanızın görsel anlatım dilidir. Profesyonel ve
            yaratıcı tasarımlar, markanızın hikayesini etkili bir şekilde
            anlatır ve hedef kitlenizle güçlü bir bağ kurar.
          </p>
        </section>
        <section className="flex flex-col gap-y-2" id="broşür">
          <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
            Cardvisit, Broşür ve Katalog Tasarımı
          </h1>
          <p>
            Ürün ve hizmetlerinizi en iyi şekilde tanıtan broşürler ve
            kataloglar tasarlıyoruz.
          </p>
          <Image
            src={CatalogPng}
            alt="Catalog"
            className="h-64 w-full rounded-md sm:w-64 "
          />
        </section>
        <section className="flex flex-col gap-y-2" id="banner">
          <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
            Afiş ve Banner Tasarımı
          </h1>
          <p>
            Reklam kampanyalarınız için dikkat çekici afişler ve dijital
            bannerlar oluşturuyoruz
          </p>
          <Image
            src={BannerPng}
            alt="Catalog"
            className="h-64 w-full rounded-md sm:w-64 "
          />
        </section>
        <section className="flex flex-col gap-y-2" id="social-media">
          <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
            Sosyal Medya Görselleri
          </h1>
          <p>
            Sosyal medya hesaplarınız için etkileyici ve ilgi çekici görsel
            içerikler üretiyoruz.
          </p>
          <Image
            src={SocialPng}
            alt="Catalog"
            className="h-64 w-full rounded-md sm:w-64 "
          />
        </section>
        <section className="flex flex-col gap-y-2" id="institutional">
          <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
            Kurumsal Sunumlar
          </h1>
          <p>
            Profesyonel ve etkileyici sunumlar tasarlayarak, iş
            toplantılarınızda fark yaratmanızı sağlıyoruz.
          </p>
        </section>
      </PageHorizontalPaddingContainer>
    </PageTopPaddingContainer>
  );
};

export default GraphicDesignClientPage;
