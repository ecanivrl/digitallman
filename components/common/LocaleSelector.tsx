"use client";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useChangeLocale, useCurrentLocale } from "@/i18n/client";
import clsx from "clsx";
import useOnExternalClick from "../hooks/useOnExternalClick";
import { LanguageCode, languageList } from "@/lib/utils/i18n";

const LocaleSelector = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnExternalClick(ref, () => setOpen(false), !open);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div ref={ref} className={twMerge("relative", className)} {...rest}>
      {/*  Display */}
      <button
        className={clsx(
          "flex items-center gap-3 rounded-lg px-4 py-2",
          open && "rounded-b-none bg-gray-100 shadow-2xl",
        )}
        onClick={() => setOpen(!open)}
      >
        {languageList[locale] && (
          <img
            src={languageList[locale].flag}
            alt={languageList[locale].nativeName}
            className="aspect-[1.5] h-4 shrink-0 rounded"
          />
        )}
        <span>{locale.toUpperCase()}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180",
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {/*  Dropdown */}
      <div
        className={clsx(
          "shadow-red/20 absolute left-0 right-0 top-full z-[100] flex flex-col overflow-hidden rounded-b-lg bg-gray-100 shadow-2xl",
          !open && "hidden",
        )}
      >
        {Object.values(languageList).map((lang) => (
          <button
            key={lang.code}
            className={clsx(
              "flex items-center gap-3 rounded-none px-4 py-2",
              locale == lang.code && "bg-black400",
            )}
            onClick={() => {
              changeLocale(lang.code as LanguageCode);
              setOpen(false);
            }}
          >
            <img
              src={lang.flag}
              alt={lang.nativeName}
              className="aspect-[1.5] h-4 shrink-0 rounded"
            />
            <span
              className={clsx(
                locale == lang.code ? "text-white" : "text-black",
              )}
            >
              {lang.code.toUpperCase()}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocaleSelector;
