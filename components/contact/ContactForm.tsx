"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Container, FormGroupContainer } from "../common/containers";
import { TextAreaInput, TextInput } from "../common/inputs";
import { Label } from "../common/Label";
import { useI18n } from "@/i18n/client";
import CustomPhoneInput from "../i18n/CustomPhoneInput";
import Button from "../common/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";

type InputType = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = ({ className }: { className?: string }) => {
  const t = useI18n();
  const schema = yup.object<Record<keyof Partial<InputType>, yup.AnySchema>>({
    name: yup.string().required(t("common.enter-name")),
    surname: yup.string().required(t("common.enter-surname")),
    email: yup
      .string()
      .email(t("common.invalid-email"))
      .required(t("common.email-input-no-entry-error")),
    phoneNumber: yup
      .string()
      .nullable()
      .required(t("common.enter-phone-number"))
      .test(
        "valid-phone-number",
        t("common.phone-input-invalid-entry-error"),
        (value) => {
          return isValidPhoneNumber(value ?? "");
        },
      ),
    message: yup.string().required(t("common.enter-message")),
  });

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<InputType>({
    mode: "onTouched",
    reValidateMode: "onChange",
    // @ts-ignore
    resolver: yupResolver(schema),
  });

  // @ts-ignore
  const createEmailContent = (formData) => {
    return `
      Hi,
      
      My name is ${formData.name} ${formData.surname}.
      My phone number is ${formData.phoneNumber}.
      My email address is ${formData.email}.
      My message:
      ${formData.message}
      
    `;
  };

  // @ts-ignore
  const sendEmail = (emailContent) => {
    const encodedEmailContent = encodeURIComponent(emailContent);
    window.location.href = `mailto:kadri503394@gmail.com?subject=Contact Form Submission&body=${encodedEmailContent}`;
  };

  const onSubmit: SubmitHandler<InputType> = (formData) => {
    const emailContent = createEmailContent(formData);
    sendEmail(emailContent);
    reset();
  };

  return (
    <Container className="my-16 w-full max-w-5xl">
      <div className={twMerge("w-full", className)}>
        <h1 className="mb-2 text-center text-3xl font-semibold text-black md:text-6xl">
          {t("common.contact-form")}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:gap-20">
            <div className="flex w-full flex-col gap-3">
              <FormGroupContainer>
                <Label htmlFor="name">{t("common.name")}</Label>
                <TextInput
                  {...register("name")}
                  error={errors.name?.message}
                  name="name"
                  placeholder={t("common.enter-name")}
                  required
                />
                <p className="mt-1 w-[448px] text-xs text-red400 max-[768px]:w-[280px]">
                  {errors.name?.message}
                </p>
              </FormGroupContainer>
              <FormGroupContainer>
                <Label htmlFor="email">{t("common.surname")}</Label>
                <TextInput
                  {...register("surname")}
                  error={errors.surname?.message}
                  name="surname"
                  placeholder={t("common.enter-surname")}
                  required
                />
                <p className="mt-1 w-[448px] text-xs text-red400 max-[768px]:w-[280px]">
                  {errors.surname?.message}
                </p>
              </FormGroupContainer>
            </div>
            <div className="flex w-full flex-col gap-3">
              <FormGroupContainer>
                <Label htmlFor="email">{t("common.email")}</Label>
                <TextInput
                  {...register("email")}
                  error={errors.email?.message}
                  name="email"
                  placeholder={t("common.enter-email")}
                  required
                />
                <p className="mt-1 w-[448px] text-xs text-red400 max-[768px]:w-[280px]">
                  {errors.email?.message}
                </p>
              </FormGroupContainer>
              <FormGroupContainer>
                <Label htmlFor="phoneNumber">{t("common.phone-number")}</Label>
                <Controller
                  control={control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <CustomPhoneInput
                      {...field}
                      error={errors.phoneNumber?.message}
                      placeholder={t("common.enter-phone-number")}
                      required
                    />
                  )}
                />

                <p className="mt-1 w-[448px] text-xs text-red400 max-[768px]:w-[280px]">
                  {errors.phoneNumber?.message}
                </p>
              </FormGroupContainer>
            </div>
          </div>
          <FormGroupContainer className="mt-3">
            <Label htmlFor="message">{t("common.message")}</Label>
            <TextAreaInput
              {...register("message")}
              error={errors.message?.message}
              name="message"
              placeholder={t("common.enter-message")}
              required
            />

            <p className="mt-1 w-[448px] text-xs text-red400 max-[768px]:w-[280px]">
              {errors.message?.message}
            </p>
          </FormGroupContainer>

          <Button
            disabled={!isValid}
            type="submit"
            showArrow={false}
            variant="negative"
            className="mx-auto mt-6 w-[60%]"
          >
            {t("common.send")}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
