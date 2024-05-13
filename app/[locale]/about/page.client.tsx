"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import React from "react";
import AboutPNG from "@/public/images/about1.png";
import AboutPNG2 from "@/public/images/about2.png";
import Img1 from "@/public/images/img7.png";
import { useI18n } from "@/i18n/client";
import NextImage from "@/components/NextImage";
import Address from "@/components/contact/Address";
import SocialComponent from "@/components/contact/SocialComponent";

const AboutClientPage = () => {
  const t = useI18n();
  return (
    <>
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          <section className="my-10 flex flex-col gap-x-5 gap-y-5 sm:my-20">
            <h1 className="mb-10 text-center text-3xl font-semibold md:text-6xl">
              {t("common.about")}
            </h1>
            <div className="flex w-full flex-col justify-between gap-10 md:flex-row">
              <NextImage
                src={AboutPNG}
                alt="About Us"
                className="h-72 w-full object-cover object-center md:h-96"
              />
              <div className="flex w-full flex-col gap-y-10">
                <h1 className="text-2xl font-semibold text-black">
                  Dijitallman.com
                </h1>
                <p className="text-sm lg:text-lg">
                  Merhaba ve Diğitallman.com a hoş geldiniz! Biz, dijital
                  dünyanın heyecan verici ve dinamik yolculuğunda sizin
                  yanınızda olan bir ekibiz. Diğitallman.com, dijital
                  deneyimlerinizi zenginleştirmek ve dijital dünyayı
                  keşfetmenizi sağlamak için tasarlanmıştır.
                  <br />
                  <b>Dijitallman.com un Doğuşu Dijitallman.com un hikayesi,</b>
                  iki girişimci ruhun, Dubai nin kalbinde doğan bir hayalle
                  başladı. Elif ve Berk, her ikisi de dijital dünyanın sunduğu
                  sınırsız potansiyele hayran ve bu potansiyeli kullanarak iş
                  dünyasında fark yaratmak isteyen iki gençti. Uzun yıllar
                  boyunca farklı firmalarda edindikleri deneyimler ve bilgi
                  birikimleri, onları ortak bir hedefe yönlendirdi. Kendi
                  dijital ajanslarını kurmak ve diğer firmalara dijital dünyada
                  başarıya ulaşmaları için yardımcı olmak.
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm lg:text-lg">
              <b>2021 yılında, Dijitallman.com hayata geçti.</b> Elif in
              yaratıcı bakış açısı ve Berk in teknik becerileri, birbirini
              tamamladı. Küçük bir ofiste başlayan bu serüven, kısa sürede
              büyüyerek İzmir in önde gelen dijital ajanslarından biri haline
              geldi.
            </p>
            <p>
              <b>
                Dijitallman.com un başarısının arkasındaki sır nedir? Cevap
                basit
              </b>
              Tutku ve bağlılık. Elif ve Berk, her projeye büyük bir tutkuyla
              yaklaşmakta ve müşterilerinin başarılarını kendi başarıları olarak
              görmektedirler. Bu tutku, onları her zaman daha iyisini yapmaya ve
              yenilikçi çözümler üretmeye teşvik etmektedir.
            </p>
            <div className="flex w-full flex-col justify-between gap-10 max-sm:flex-col-reverse md:flex-row">
              <div className="flex w-full flex-col gap-y-10">
                <p className="text-sm lg:text-lg">
                  <b>
                    Dijitallman.com un hikayesi, sadece bir başarı hikayesi
                    değil
                  </b>
                  aynı zamanda bir ilham kaynağıdır. Bu hikaye bize gösteriyor
                  ki, bir hayal ve azimle her şeyin mümkün olduğunu gösteriyor.
                  Elif ve Berk in hikayesi, dijital dünyada başarıya ulaşmak
                  isteyen herkese umut vermektedir.
                  <b>Dijitallman.com un geleceği parlak görünüyor.</b> Ajans,
                  her geçen gün yeni müşteriler kazanmakta ve sektördeki
                  itibarını güçlendirmektedir. Elif ve Berk, Dijitallman.com u
                  sadece Türkiye de değil, tüm dünyada tanınan bir marka haline
                  getirmeyi hedeflemektedirler.
                </p>

                <p className="text-sm lg:text-lg">
                  Dijitallman.com un hikayesi, bize girişimciliğin ve hayal
                  gücünün gücünü hatırlatıyor. Bu hikaye, bize her zaman daha
                  iyisini yapmaya ve kendimizi geliştirmeye teşvik ediyor.
                  Dijitallman.com un başarısı, bize dijital dünyada her şeyin
                  mümkün olduğunu gösteriyor.
                </p>
              </div>
              <NextImage
                src={AboutPNG2}
                alt="About Us"
                className="h-72 w-full object-cover object-center md:h-96"
              />
            </div>
          </section>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
      <PageBanner src={Img1} />
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          <div className="mb-20 flex flex-col gap-y-10">
            <h1 className="text-center text-lg font-semibold md:text-3xl">
              Sosyal Medya ve İletişim Bilgilerimiz
            </h1>
            <Address />
            <SocialComponent />
          </div>
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default AboutClientPage;
