"use client";

import React from "react";
import NextImage from "../NextImage";
import AboutPNG from "@/public/images/about.png";
import Button from "../common/Button";
import { useI18n } from "@/i18n/client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/data/variants";

const AboutComponent = () => {
  const t = useI18n();
  return (
    <div className="flex w-full flex-col justify-between gap-10 md:flex-row">
      <NextImage
        src={AboutPNG}
        alt="About Us"
        className="h-72 w-full object-cover object-center md:h-96"
      />
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full flex-col"
      >
        <p className="mb-8 text-sm lg:text-lg">{t("common.about-text")}</p>
        <Link href="/about">
          <Button showArrow={false} variant="negative" className="w-full">
            {t("common.learn-more")}
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutComponent;
