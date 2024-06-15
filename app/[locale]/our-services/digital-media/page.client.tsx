"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import OurServicesLink from "@/components/home/OurServicesLink";
import { useI18n } from "@/i18n/client";
import DigitalPng from "@/public/images/img5.png";
import Image from "next/image";
import AccountManagementPng from "@/public/images/account-management.jpg";
import SeoPng from "@/public/images/seo.jpg";
import AdsPng from "@/public/images/ads.jpg";
import GoogleAdsPng from "@/public/images/google-ads.jpg";

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
          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Sosyal Medya Hesap Yönetimi
            </h1>
            <p>
              Sosyal medya platformlarında markanızın görünürlüğünü ve
              etkileşimini artırın. Uzman ekibimizle, sosyal medya hesaplarınızı
              profesyonelce yönetiyor, hedef kitlenize uygun içerikler üretiyor
              ve etkili reklam kampanyaları oluşturuyoruz.
            </p>
          </section>

          <section className="flex flex-col gap-y-2" id="account-management">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Hesap Yönetimi
            </h1>
            <p>
              Facebook, Instagram, WhatsApp, YouTube ve LinkedIn hesaplarınızı
              aktif ve etkili bir şekilde yönetiyoruz.
            </p>
            <Image
              src={AccountManagementPng}
              alt="Catalog"
              className="h-64 w-full rounded-md sm:w-64 "
            />
          </section>

          <section className="flex flex-col gap-y-2" id="content-production">
            <h1 className="my-1 text-xl font-semibold text-red-500 md:text-3xl">
              İçerik Üretimi
            </h1>
            <p>
              Hedef kitlenize uygun, dikkat çekici ve ilgi uyandıran içerikler
              üretiyoruz.
            </p>
          </section>

          <section className="flex flex-col gap-y-2" id="ads">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Reklam Kampanyaları
            </h1>
            <p>
              Her platforma özgü reklam kampanyaları ile markanızı doğru kitleye
              ulaştırıyoruz.{" "}
            </p>
            <Image
              src={AdsPng}
              alt="Catalog"
              className="h-64 w-full rounded-md sm:w-64 "
            />
          </section>

          <section className="flex flex-col gap-y-2" id="analysis">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Analiz ve Raporlama
            </h1>
            <p>
              Sosyal medya performansınızı düzenli olarak analiz ediyor ve
              detaylı raporlarla stratejinizi optimize ediyoruz.{" "}
            </p>
          </section>

          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              SEO (ARAMA MOTOR OPTİMİZASYONU)
            </h1>
            <p>Arama motorlarında zirveye çıkın.</p>
            <p>
              Arama motorları insanlara ne istediklerini değil, neyi
              aradıklarını verir. Lee Odden
            </p>
            <Image
              src={SeoPng}
              alt="Catalog"
              className="h-64 w-full rounded-md sm:w-64 "
            />
          </section>
          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Anahtar Kelime Araştırması
            </h1>
            <p>
              Sektörünüzde en çok aranan anahtar kelimeleri belirliyor ve
              stratejinizi bu kelimeler etrafında şekillendiriyoruz
            </p>
          </section>

          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Site İçi SEO
            </h1>
            <p>
              Web sitenizin teknik altyapısını ve içeriklerini optimize ederek
              arama motorları için daha çekici hale getiriyoruz.
            </p>
          </section>
          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Site Dışı SEO
            </h1>
            <p>
              Backlink stratejileri ve dijital PR çalışmaları ile web sitenizin
              otoritesini artırıyoruz.
            </p>
          </section>
          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              performans İzleme
            </h1>
            <p>
              SEO çalışmalarınızın etkisini düzenli olarak izliyor ve raporlarla
              gelişmeleri paylaşıyoruz.{" "}
            </p>
          </section>

          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Search Engine Marketing (SEM)
            </h1>
            <p>
              Google Ads ve Google Search Console ile Daha Fazla Müşteri Kazanın
            </p>
            <p>
              Doğru zamanda, doğru kişiye, doğru mesajı ulaştırmak dijital
              reklamcılığın özüdür. Dave Kerpen
            </p>
          </section>

          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Google Ads Kampanyaları
            </h1>
            <p>
              Anahtar kelime analizi ve reklam yazımı ile etkili Google Ads
              kampanyaları oluşturuyoruz
            </p>
            <Image
              src={GoogleAdsPng}
              alt="Catalog"
              className="h-64 w-full rounded-md sm:w-64 "
            />
          </section>

          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Google Searh Console Yönetimi
            </h1>
            <p>
              Web sitenizin performansını izliyor ve gerekli optimizasyonları
              yaparak arama motorlarındaki görünürlüğünüzü artırıyoruz
            </p>
          </section>
          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Reklam Optimizasyonu
            </h1>
            <p>
              Reklam kampanyalarınızı sürekli olarak izliyor ve en yüksek ROI
              için optimizasyon yapıyoruz.
            </p>
          </section>

          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              A/B Testleri
            </h1>
            <p>
              Farklı reklam stratejilerini test ederek en etkili yöntemleri
              belirliyoruz
            </p>
          </section>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default DigitalMediaClientPage;
