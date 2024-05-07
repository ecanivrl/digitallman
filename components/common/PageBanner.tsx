import React from "react";

const PageBanner = ({ pageName }: { pageName: string }) => {
  return (
    <div className="mt-44 flex h-64 items-center justify-center bg-red-700 bg-[url(/images/banner.png)] bg-cover bg-center bg-no-repeat max-[900px]:mt-24">
      <div className="text-6xl font-bold text-white shadow-md">{pageName}</div>
    </div>
  );
};

export default PageBanner;
