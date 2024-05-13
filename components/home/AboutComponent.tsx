"use client";

import React from "react";
import NextImage from "../NextImage";
import AboutPNG from "@/public/images/about.png";
import Button from "../common/Button";
import { useI18n } from "@/i18n/client";
import Link from "next/link";

const AboutComponent = () => {
  const t = useI18n();
  return (
    <div className="flex w-full flex-col justify-between gap-10 md:flex-row">
      <NextImage
        src={AboutPNG}
        alt="About Us"
        className="h-72 w-full object-cover object-center md:h-96"
      />
      <div className="flex w-full flex-col gap-y-7">
        <h1 className="font-semibold text-black">
          Dijitallman.com: Dijital Dünyada Başarıya Ulaşmanın Anahtarı
        </h1>
        <p className="text-sm lg:text-lg">
          Dijitallman.com olarak, Dubai de dijital medya ve prodüksiyon
          alanlarında lider bir firmayız. Güçlü teknik kadromuz ve yenilikçi
          bakış açımızla, size en etkili dijital çözümleri sunarak, online
          dünyada fark yaratmanıza yardımcı oluyoruz.
        </p>
        <ul className="ml-4 list-disc font-bold">
          <li>Hedeflerinize Ulaşın</li>
          <li>Markanızın bilinirliğini artırın.</li>
          <li>Daha fazla müşteriye ulaşın.</li>
          <li>Satışlarınızı ve karlılığınızı artırın.</li>
          <li>Rakiplerinizin önüne geçin.</li>
        </ul>
        <Link href="/about">
          <Button showArrow={false} variant="negative" className="w-full">
            {t("common.learn-more")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutComponent;
