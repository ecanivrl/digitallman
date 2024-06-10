"use client";

import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  FormGroupContainer,
  PageTopPaddingContainer,
} from "../common/containers";
import Button from "../common/Button";
import { TextInput } from "../common/inputs";
import { Label } from "../common/Label";
import CustomPhoneInput from "../i18n/CustomPhoneInput";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/data/variants";
import { useI18n } from "@/i18n/client";
import { isValidPhoneNumber } from "react-phone-number-input";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  fields: string[];
};

const ServiceRequestSection = () => {
  const t = useI18n();

  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set([]),
  );
  const [contactFormOpened, setContactFormOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const schema = yup
    .object({
      fields: yup
        .array()
        .nullable()
        .required(t("common.select-service"))
        .min(1, t("common.select-service")),
      name: yup.string().required(t("common.enter-name")),
      surname: yup.string().required(t("common.enter-surname")),
      email: yup
        .string()
        .required(t("common.enter-email"))
        .email(t("common.correct-email")),
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
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onTouched",
    reValidateMode: "onChange",
    // @ts-ignore
    resolver: yupResolver(schema),
  });

  const services = [
    "common.web-design",
    "common.mobile-design",
    "common.corporate-identity",
    "common.logo-design",
    "common.business-card-design",
    "common.social-media-consultancy",
    "common.backend",
    "common.frontend",
    "common.website",
    "common.mobile-application",
    "common.digital-marketing",
    "common.social-media-management",
    "common.advertising-visual-design",
    "common.sign-design",
    "SEO",
    "common.website-consultancy",
    "common.character-design",
    "common.catalog-design",
  ];

  function resetFilter() {
    setSelectedServices(new Set([]));
  }

  const onError: SubmitErrorHandler<Inputs> = (errors, event) => {
    console.log("errors", errors);
    if (errors) {
      for (let subject of Object.keys(errors)) {
        // @ts-ignore
        if (errors[subject]) {
          // @ts-ignore
          alert(errors[subject].message);
          return;
        }
      }
    }
  };

  useEffect(() => {
    setValue("fields", [...selectedServices], {
      shouldDirty: true,
      shouldTouch: true,
    });
  }, [selectedServices]);

  const createEmailContent = (formData: Inputs) => {
    const cleanedFields = formData.fields.map((field) =>
      field.startsWith("common.")
        ? field.replace("common.", "").toUpperCase()
        : field,
    );

    return `
      Hi,
      
      My name is ${formData.name} ${formData.surname}.
      My phone number is ${formData.phoneNumber}.
      My email address is ${formData.email}.
      Services I'm interested in: ${cleanedFields.join(", ")}
      
    `;
  };

  const sendEmail = (emailContent: string) => {
    const encodedEmailContent = encodeURIComponent(emailContent);
    window.location.href = `mailto:kadri503394@gmail.com?subject=Service Request&body=${encodedEmailContent}`;
  };

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const emailContent = createEmailContent(formData);
    sendEmail(emailContent);
    reset();
  };

  return (
    <PageTopPaddingContainer className="relative my-20">
      <div className="relative">
        <div className="absolute left-4 top-0 h-72 w-72 rounded-full bg-red-100 mix-blend-multiply blur-[110px] filter" />
        <div className="absolute right-4 top-0 h-72 w-72 rounded-full bg-yellow-100 mix-blend-multiply blur-[110px] filter" />
        <div className="absolute bottom-8 left-20 h-72 w-72 rounded-full bg-green-100 mix-blend-multiply blur-[110px] filter" />
        <div className="absolute bottom-8 right-20 h-72 w-72 rounded-full bg-blue-100 mix-blend-multiply blur-[110px] filter" />
        <section className="flex flex-col items-center">
          <h1 className="mb-10 text-center text-3xl font-semibold md:text-6xl">
            {t("common.get-offer-now")}
          </h1>
          <p className="mb-10 max-w-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu lobortis
            integer eu in. Ipsum magna a vestibulum erat ultricies gravida
            egestas amet turpis.
          </p>
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-10 flex flex-wrap items-center justify-center gap-6"
            >
              {services.map((service, index) => (
                <Checkbox
                  key={index}
                  className={
                    (index + 1) % 4 === 0
                      ? "text-yellow-500"
                      : (index + 1) % 3 === 0
                        ? "text-green-500"
                        : (index + 1) % 2 === 0
                          ? "text-red-500"
                          : "text-blue-500"
                  }
                  // @ts-ignore
                  label={t(service)}
                  checked={selectedServices.has(service)}
                  onCheck={(checked) => {
                    if (checked) {
                      setSelectedServices((old) => {
                        const newSet = new Set(old);
                        newSet.add(service);
                        return newSet;
                      });
                    } else {
                      setSelectedServices((old) => {
                        const newSet = new Set(old);
                        newSet.delete(service);
                        return newSet;
                      });
                    }
                  }}
                />
              ))}
            </motion.div>
            <div className="mb-5 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Button
                showArrow={false}
                disabled={selectedServices.size === 0}
                className="flex w-full gap-1 p-3 text-sm md:w-48"
                variant="negative"
                type="button"
                onClick={() => {
                  resetFilter();
                  setContactFormOpened(false);
                }}
              >
                {t("common.reset-filter")}
              </Button>
              {!contactFormOpened && (
                <Button
                  showArrow={false}
                  type="button"
                  variant="negative"
                  disabled={selectedServices.size === 0}
                  className="flex w-full gap-1 p-3 text-sm md:w-48"
                  onClick={() => setContactFormOpened(true)}
                >
                  {t("common.get-quote")}
                </Button>
              )}
            </div>
            {contactFormOpened && (
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
                className="flex w-full max-w-4xl flex-col gap-5"
              >
                <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
                  <FormGroupContainer>
                    <Label htmlFor="name">{t("common.name")}</Label>
                    <TextInput
                      {...register("name")}
                      placeholder={t("common.enter-name")}
                      required
                      error={errors.name?.message}
                    />
                    <p className="text-sm text-red-500">
                      {errors.name?.message}
                    </p>
                  </FormGroupContainer>
                  <FormGroupContainer>
                    <Label htmlFor="surname">{t("common.surname")}</Label>
                    <TextInput
                      {...register("surname")}
                      placeholder={t("common.enter-surname")}
                      required
                      error={errors.surname?.message}
                    />
                    <p className="text-sm text-red-500">
                      {errors.surname?.message}
                    </p>
                  </FormGroupContainer>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
                  <FormGroupContainer>
                    <Label htmlFor="email">{t("common.email")}</Label>
                    <TextInput
                      {...register("email")}
                      placeholder={t("common.enter-email")}
                      required
                      error={errors.email?.message}
                    />
                    <p className="text-sm text-red-500">
                      {errors.email?.message}
                    </p>
                  </FormGroupContainer>
                  <FormGroupContainer>
                    <Label htmlFor="phoneNumber">
                      {t("common.phone-number")}
                    </Label>
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
                    <p className="text-sm text-red-500">
                      {errors.phoneNumber?.message}
                    </p>
                  </FormGroupContainer>
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    showArrow={false}
                    className="mx-auto w-full md:w-[45%]"
                    type="submit"
                    variant="negative"
                    isLoading={loading}
                    disabled={!isValid}
                  >
                    {t("common.send")}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </section>
      </div>
    </PageTopPaddingContainer>
  );
};

export default ServiceRequestSection;

const Checkbox = ({
  className,
  initiallyChecked = false,
  onCheck,
  checked,
  label,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  initiallyChecked?: boolean;
  label: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
}): JSX.Element => {
  const [internalChecked, setInternalChecked] = useState(
    checked != null ? checked : initiallyChecked,
  );

  const check = () => {
    setInternalChecked(checked != null ? !checked : !internalChecked);
    onCheck?.(checked != null ? !checked : !internalChecked);
  };

  return (
    <div className={twMerge("my-4", className)} {...rest}>
      <label className="group relative block cursor-pointer select-none pl-8">
        <input
          className="peer absolute h-0 w-0 cursor-pointer opacity-0 checked:block"
          type="checkbox"
          checked={checked != null ? checked : internalChecked}
          onChange={check}
        />
        <div className="absolute left-0 top-0 flex aspect-square h-6 items-center justify-center rounded-md border border-current p-0.5 [&>*]:peer-checked:bg-current">
          <span className="h-full w-full rounded" />
        </div>
        <span className="text-dark text-sm">{label}</span>
      </label>
    </div>
  );
};
