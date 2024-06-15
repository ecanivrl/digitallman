import { generatePageMetadata } from "@/components/utils";
import { getI18n } from "@/i18n/server";
import { Metadata, ResolvingMetadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import GraphicDesignClientPage from "./page.client";

export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getI18n();

  return await generatePageMetadata(
    { title: t("common.graphic-design") },
    parent,
  );
}

export default async function CorporateImageStudies({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();

  return (
    <>
      <GraphicDesignClientPage />
    </>
  );
}
