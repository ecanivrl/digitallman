"use client";

import { Form } from "@ariakit/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Container, FormGroupContainer } from "../common/containers";
import { CheckboxInput, TextAreaInput, TextInput } from "../common/inputs";
import { Label } from "../common/Label";
import { useI18n } from "@/i18n/client";
import CustomPhoneInput from "../i18n/CustomPhoneInput";
import Button from "../common/Button";

const ContactForm = ({ className }: { className?: string }) => {
  const t = useI18n();

  return (
    <Container className="w-full max-w-5xl">
      <div className={twMerge("my-10 w-full", className)}>
        <h1 className="mb-2 text-center text-2xl font-semibold text-black md:text-4xl">
          {t("common.contact-form")}
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:gap-20">
          <div className="flex w-full flex-col gap-3">
            <FormGroupContainer>
              <Label htmlFor="name">{t("common.name")}</Label>
              <TextInput
                name="name"
                placeholder={t("common.enter-name")}
                required
              />
            </FormGroupContainer>
            <FormGroupContainer>
              <Label htmlFor="email">{t("common.surname")}</Label>
              <TextInput
                name="surname"
                placeholder={t("common.enter-surname")}
                required
              />
            </FormGroupContainer>
          </div>
          <div className="flex w-full flex-col gap-3">
            <FormGroupContainer>
              <Label htmlFor="email">{t("common.email")}</Label>
              <TextInput
                name="email"
                placeholder={t("common.enter-email")}
                required
              />
            </FormGroupContainer>
            <FormGroupContainer>
              <Label htmlFor="phone">{t("common.phone-number")}</Label>
              <CustomPhoneInput
                name="phone"
                placeholder={t("common.enter-phone-number")}
                required
              />
            </FormGroupContainer>
          </div>
        </div>
        <FormGroupContainer className="mt-3">
          <Label htmlFor="message">Mesajınız</Label>
          <TextAreaInput
            name="message"
            placeholder="Mesajınızı buraya yazınız"
            required
          />
        </FormGroupContainer>
        <div className="mx-auto mt-4 flex items-center justify-center gap-x-2 text-sm">
          <CheckboxInput
            id="personal-data"
            className="cursor-pointe whitespace-nowrap text-sm font-normal text-black400"
          />
          <label htmlFor="personal-data">
            {t("common.personal-data-agreement")}I agree to the processing of my
            personal data
          </label>
        </div>
        <Button variant="negative" className="mx-auto mt-6 w-[60%]">
          Gönder
        </Button>
      </div>
    </Container>
  );
};

export default ContactForm;
