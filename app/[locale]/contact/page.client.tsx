"use client";

import Map from "@/components/contact/Map";
import PageBanner from "@/components/common/PageBanner";
import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from "@/components/common/containers";
import React from "react";
import Address from "@/components/contact/Address";
import SocialComponent from "@/components/contact/SocialComponent";
import ContactForm from "@/components/contact/ContactForm";
import ContactPNG from "@/public/images/contact.png";
import { useI18n } from "@/i18n/client";

const ContactClientPage = () => {
  const t = useI18n();
  return (
    <>
      <h1 className="mt-44 text-center text-3xl font-semibold md:text-6xl">
        {t("common.contact")}
      </h1>
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          <Address />
          <Map />
          <SocialComponent />
          <ContactForm />
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
      <PageBanner src={ContactPNG} className="my-10" />
    </>
  );
};

export default ContactClientPage;
