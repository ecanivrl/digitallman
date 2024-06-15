import { generatePageMetadata } from "@/components/utils";
import { getI18n } from "@/i18n/server";
import { Metadata, ResolvingMetadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import DigitalMediaClientPage from "./page.client";

export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getI18n();

  return await generatePageMetadata(
    { title: t("common.digital-media") },
    parent,
  );
}

export default async function ContactStudies({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();

  return (
    <>
      <DigitalMediaClientPage />
    </>
  );
}
