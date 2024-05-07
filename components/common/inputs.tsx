"use client";

import React, {
  ComponentPropsWithRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import EyeOffSVG from "@/public/icons/eye-off.svg";
import EyeOnSVG from "@/public/icons/eye-on.svg";
import { useI18n } from "@/i18n/client";

export type InputValidationProps = {
  error?: string;
  maxCharacter?: number;
};

export const TextInput = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input"> & InputValidationProps
>(({ className, onClick, error, ...rest }, ref) => {
  // Solution to input not being editable after chrome autocomplete
  function focusAndClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.currentTarget.value = e.currentTarget.value + "";
    onClick?.(e);
  }

  return (
    <input
      ref={ref}
      onClick={focusAndClick}
      className={twMerge(
        "w-full rounded-full bg-white py-2 pl-4 text-sm max-md:text-xs",
        "text-base text-black placeholder:text-black200",
        "outline outline-1 outline-black200/50 focus-visible:outline-black",
        "disabled:cursor-not-allowed disabled:opacity-[0.6]",
        error && "text-red400 outline-red400 focus-visible:outline-red400",
        className,
      )}
      {...rest}
    />
  );
});

// @ts-ignore
TextInput.displayName = "TextInput";

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input"> & InputValidationProps
>(({ className, onClick, error, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Solution to input not being editable after chrome autocomplete
  function focusAndClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.currentTarget.value = e.currentTarget.value + "";
    onClick?.(e);
  }

  return (
    <div className={twMerge("relative w-full", className)}>
      <input
        ref={ref}
        onClick={focusAndClick}
        type={showPassword ? "text" : "password"}
        className={twMerge(
          "w-full rounded-full bg-white py-2.5 pl-4 text-sm max-md:text-xs",
          "text-base text-black placeholder:text-black200",
          "outline outline-1 outline-black200/50 focus-visible:outline-black",
          error && "text-red400 outline-red400 focus-visible:outline-red400",
          className,
        )}
        {...rest}
      />
      {showPassword ? (
        <EyeOffSVG
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={togglePassword}
        />
      ) : (
        <EyeOnSVG
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={togglePassword}
        />
      )}
    </div>
  );
});

// @ts-ignore
PasswordInput.displayName = "PasswordInput";

export const TextAreaInput = React.forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithRef<"textarea"> & InputValidationProps
>(({ className, onClick, error, ...rest }, ref) => {
  // Solution to input not being editable after chrome autocomplete
  function focusAndClick(e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) {
    e.currentTarget.value = e.currentTarget.value + "";
    onClick?.(e);
  }

  return (
    <textarea
      ref={ref}
      onClick={focusAndClick}
      className={twMerge(
        "h-32 w-full resize-none rounded-2xl bg-white px-2 py-2.5",
        "text-base text-black placeholder:text-black200",
        "outline outline-1 outline-black200/50 focus-visible:outline-black",
        "disabled:cursor-not-allowed disabled:opacity-[0.6]",
        error && "text-red400 outline-red400 focus-visible:outline-red400",
        className,
      )}
      {...rest}
    />
  );
});

// @ts-ignore
TextAreaInput.displayName = "TextAreaInput";

export const CheckboxInput = React.forwardRef<
  HTMLInputElement,
  InputValidationProps & ComponentPropsWithRef<"input">
>(({ className, error, ...rest }, ref) => {
  return (
    <div className="relative flex items-center">
      <input
        ref={ref}
        type="checkbox"
        className={twMerge(
          "relative h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-black bg-white",
          "checked:bg-white hover:ring hover:ring-transparent focus:outline-none",
          "disabled:cursor-not-allowed disabled:border-black200 disabled:checked:bg-black200",
          "after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('/icons/tick1.svg')] after:bg-[length:80%] after:bg-center after:bg-no-repeat after:content-['']",
          className,
        )}
        {...rest}
      />
    </div>
  );
});

// @ts-ignore
CheckboxInput.displayName = "CheckboxInput";
