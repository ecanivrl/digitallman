import { twMerge } from "tailwind-merge";
import Spinner from "@/public/icons/spinner.svg";
import RightArrow from "@/public/icons/arrow-right.svg";

import * as React from "react";
import clsx from "clsx";

enum ButtonVariant {
  "primary",
  "secondary",
  "ghost",
  "neutral",
  "positive",
  "negative",
  "secondary-outline",
  "third",
  "gray",
}

type ButtonProps = {
  isLoading?: boolean;
  showArrow?: boolean;
  showArrowLeft?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading = false,
      variant = "primary",
      showArrow = true,
      showArrowLeft = false,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={twMerge(
          "flex items-center justify-center gap-3 rounded-full px-4 py-2.5 text-sm",
          "focus:outline-none focus-visible:ring focus-visible:ring-offset-1",
          "shadow-sm",
          "transition-colors duration-75",
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && [
              "bg-blue400 text-white",
              "hover:enabled:bg-blue300",
              "focus-visible:bg-blue300 focus-visible:ring-blue100",
              "active:enabled:bg-blue500",
              "disabled:bg-black100",
            ],
            variant === "secondary" && [
              "bg-blue100 text-blue400",
              "shadow-none",
              "hover:enabled:bg-blue300 hover:enabled:text-white",
              "focus-visible:bg-blue300 focus-visible:text-white focus-visible:ring-blue100",
              "active:enabled:bg-blue500 active:enabled:text-white",
              "disabled:bg-black100",
            ],
            variant === "ghost" && [
              // "bg-blue100 text-blue400",
              "shadow-none",
              "hover:enabled:bg-blue300 hover:enabled:text-white",
              "focus-visible:bg-blue300 focus-visible:text-white focus-visible:ring-blue100",
              "active:enabled:bg-blue500 active:enabled:text-white",
            ],
            variant === "neutral" && [
              // "bg-blue100 text-blue400",
              "shadow-none",
              // "hover:enabled:bg-blue300 hover:enabled:text-white",
              // "focus-visible:bg-blue300 focus-visible:text-white focus-visible:ring-blue100",
              // "active:enabled:bg-blue500 active:enabled:text-white",
            ],
            variant === "secondary-outline" && [
              "border border-black300 bg-white text-black300",
              "shadow-none",
              "hover:enabled:bg-blue100 hover:enabled:text-blue400",
              "focus-visible:bg-blue200 focus-visible:text-white focus-visible:ring-blue100",
              "active:enabled:border-blue400 ",
            ],
            variant === "positive" && [
              "bg-green400 text-white",
              "hover:enabled:bg-green300",
              "focus-visible:bg-green300 focus-visible:ring-green100",
              "active:enabled:bg-green500",
              "disabled:bg-black100",
            ],
            variant === "negative" && [
              "bg-red-500 text-white",
              "hover:enabled:bg-red-400",
              "focus-visible:bg-red300 focus-visible:ring-red100",
              "active:enabled:bg-red-400",
              "disabled:bg-black100",
            ],
            variant === "third" && [
              "bg-blue100 text-blue400",
              "disabled:bg-black100",
            ],
            variant === "gray" && [
              "border border-black100 bg-white text-black400",
              "hover:enabled:bg-blue200",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed disabled:text-black200 disabled:opacity-50",
          isLoading &&
            "relative text-transparent transition-none disabled:cursor-wait disabled:text-transparent [&>*:not(.loading)]:invisible",
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsx(
              "loading absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "text-black200",
            )}
          >
            <Spinner className="animate-spin" />
          </div>
        )}
        {showArrowLeft && (
          <RightArrow className="h-3 rotate-180 stroke-current" />
        )}
        {children}
        {showArrow && <RightArrow className="h-3 stroke-current" />}
      </button>
    );
  },
);

// @ts-ignore
Button.displayName = "Button";

export default Button;
