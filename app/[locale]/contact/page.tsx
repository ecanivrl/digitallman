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

const Contact = () => {
  return (
    <>
      <PageBanner pageName="İletişim" />
      <PageTopPaddingContainer>
        <PageHorizontalPaddingContainer>
          <Address />
          <Map />
          <SocialComponent />
          <ContactForm />
        </PageHorizontalPaddingContainer>
      </PageTopPaddingContainer>
    </>
  );
};

export default Contact;
