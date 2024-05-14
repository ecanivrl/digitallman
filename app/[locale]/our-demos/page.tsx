// import {
//   PageHorizontalPaddingContainer,
//   PageTopPaddingContainer,
// } from "@/components/common/containers";
// import React from "react";

// const OurDemos = () => {
//   return (
//     <PageTopPaddingContainer>
//       <PageHorizontalPaddingContainer>
//         <div className="mt-8 text-black">OurDemos</div>
//       </PageHorizontalPaddingContainer>
//     </PageTopPaddingContainer>
//   );
// };

// export default OurDemos;

import { generatePageMetadata } from "@/components/utils";
import { getI18n } from "@/i18n/server";
import { Metadata, ResolvingMetadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import OurDemosClientPage from "./page.client";

export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getI18n();

  return await generatePageMetadata({ title: t("common.our-demos") }, parent);
}

export default async function OurDemos({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();

  return (
    <>
      <OurDemosClientPage />
    </>
  );
}
