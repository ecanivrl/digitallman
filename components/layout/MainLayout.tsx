import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import Navbar from "./Navbar";
import Footer from "./Footer";
import clsx from "clsx";
import ScrollToTopButton from "../common/ScrollToTopButton";

const MainLayout = async ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"main">) => {
  return (
    <div className={twMerge("text-black400", className)} {...rest}>
      <Navbar />
      <main className={clsx("min-h-screen bg-white")}>
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
