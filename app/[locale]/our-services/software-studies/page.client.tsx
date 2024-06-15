"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import OurServicesLink from "@/components/home/OurServicesLink";
import { useI18n } from "@/i18n/client";
import SoftwarePng from "@/public/images/img10.png";
import MobilePng from "@/public/images/mobile-app.jpg";
import Image from "next/image";
import InstitutionalPng from "@/public/images/img9.png";

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
              <PageBanner src={SoftwarePng} />
            </div>
          </section>
          <section
            className="flex flex-col gap-y-2"
            id="e-commerce-and-mobile-applications"
          >
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Kurumsal Web Siteleri, E-Ticaret Çözümleri ve Mobil Uygulamalar
            </h1>
            <p>
              İhtiyaçlarınıza özel yazılım çözümleri sunuyoruz. Kurumsal web
              siteleri, e-ticaret platformları ve mobil uygulamalar ile dijital
              varlığınızı güçlendiriyoruz.
            </p>
          </section>
          <section className="flex flex-col gap-y-2" id="institutional">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Kurumsal Web Sitesi
            </h1>
            <p>
              İhtiyaçlarınıza özel yazılım çözümleri sunuyoruz. Kurumsal web
              siteleri, e-ticaret platformları ve mobil uygulamalar ile dijital
              varlığınızı güçlendiriyoruz
            </p>
            <Image
              src={InstitutionalPng}
              alt="Catalog"
              className="h-64 w-full rounded-md sm:w-64 "
            />
            <br />
            <p>
              Profesyonel ve kullanıcı dostu kurumsal web siteleri tasarlıyoruz.
              Markanızı en iyi şekilde yansıtan, SEO uyumlu ve mobil uyumlu web
              siteleri ile dijital dünyada güçlü bir varlık oluşturun. Tasarım
              ve Geliştirme Markanıza özgü, estetik ve işlevsel web siteleri
              tasarlıyoruz. İçerik Yönetim Sistemi (CMS): Kolay kullanımlı CMS
              entegrasyonları ile web sitenizi güncel tutmanızı sağlıyoruz.
              Responsive Tasarım: Tüm cihazlarla uyumlu, mobil dostu web
              siteleri oluşturuyoruz. SEO Uyumlu: Arama motorlarında üst
              sıralarda yer almanız için SEO uyumlu web siteleri geliştiriyoruz.
            </p>
          </section>
          <section className="flex flex-col gap-y-2" id="e-commerce">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              E-Ticaret Web Sitesi
            </h1>
            <p>
              Gelişmiş e-ticaret platformları ile online satışlarınızı artırın.
              Güvenli ödeme sistemleri, kullanıcı dostu arayüzler ve etkili
              pazarlama araçları ile müşteri deneyimini iyileştirin. E-Ticaret
              Platformu: Kapsamlı ve güvenli e-ticaret platformları
              geliştiriyoruz. Ürün Yönetimi: Kolayca yönetebileceğiniz ürün ve
              stok yönetim sistemleri kuruyoruz. Ödeme Sistemleri Entegrasyonu:
              Güvenli ve çeşitli ödeme seçenekleri sunan sistemler entegre
              ediyoruz. Müşteri Deneyimi Optimizasyonu: Kullanıcı dostu arayüz
              ve hızlı alışveriş süreçleri ile müşteri deneyimini
              iyileştiriyoruz
            </p>
          </section>
          <section className="flex flex-col gap-y-2">
            <h1 className="text-xl font-semibold text-red-500 md:text-3xl">
              Mobil Uygulamalar ve Mobil Yazılım Geliştirmeler
            </h1>
            <p>
              iOS ve Android platformlarında çalışan mobil uygulamalar
              geliştiriyoruz. İş süreçlerinizi kolaylaştıran ve müşterilerinize
              değer katan mobil çözümler sunuyoruz.cl Mobil Uygulama Geliştirme:
              iOS ve Android platformları için yenilikçi ve işlevsel mobil
              uygulamalar geliştiriyoruz. Kullanıcı Arayüzü (UI) ve Kullanıcı
              Deneyimi (UX) Tasarımı: Çekici ve kullanımı kolay arayüzler
              tasarlıyoruz. Uygulama İçi Entegrasyonlar: Uygulamalarınıza
              gerekli tüm entegrasyonları yaparak işlevselliğini artırıyoruz.
              Bakım ve Güncelleme: Uygulamalarınızın sorunsuz çalışmasını
              sağlamak için düzenli bakım ve güncelleme hizmetleri sunuyoruz.
            </p>
            <Image
              src={MobilePng}
              alt="Catalog"
              className="h-64 w-full rounded-md sm:w-64 "
            />
          </section>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default SoftwareStudiesClientPage;
