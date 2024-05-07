import React from "react";
import { twMerge } from "tailwind-merge";

export const Label = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(function Select({ className, children, ...rest }, ref) {
  return (
    <label
      ref={ref}
      className={twMerge("text-base font-semibold text-black", className)}
      {...rest}
    >
      {children}
    </label>
  );
});
