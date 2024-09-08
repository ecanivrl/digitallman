"use client";

import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  getCountryCallingCode,
  parsePhoneNumber,
} from "react-phone-number-input";
import PhoneInput, {
  Props as PhoneInputProps,
  getCountries,
} from "react-phone-number-input/input";
import { AsYouType, CountryCode, E164Number } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { twMerge } from "tailwind-merge";
import { InputValidationProps } from "@/components/common/inputs";
import PropTypes from "prop-types";
import classNames from "classnames";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { getLocalizedPhoneInputLabels, LanguageCode } from "@/lib/utils/i18n";
import DownArrow from "@/public/icons/arrow-down.svg";

const CustomPhoneInput = forwardRef<
  ElementRef<typeof PhoneInput>,
  Partial<PhoneInputProps<ComponentPropsWithoutRef<"input">>> &
    InputValidationProps & {
      initialValue?: E164Number;
      onCountryChange?: (country?: CountryCode) => void;
      countrySelectProps?: ComponentPropsWithoutRef<typeof CustomCountrySelect>;
    }
>(
  (
    {
      name,
      defaultCountry = "TR",
      disabled,
      readOnly,
      className,
      onChange,
      value,
      initialValue,
      onCountryChange,
      onClick,
      country,
      error,
      countrySelectProps,
      // numberInputProps,
      // labels,
      ...rest
    },
    ref,
  ) => {
    // TODO Fix default country when initial value country not being same
    const [internalValue, setInternalValue] = useState<E164Number | undefined>(
      initialValue,
    );

    const [internalCountry, setInternalCountry] = useState<
      CountryCode | undefined
    >(parsePhoneNumber(value ?? internalValue ?? "")?.country);

    useEffect(() => {
      if (value != null) {
        const asYouType = new AsYouType();
        asYouType.input(value);
        let newCountry = asYouType.getCountry();
        if (!newCountry && asYouType.getCallingCode() == "1") {
          newCountry = "US";
        }
        onCountrySelected(newCountry, false);
      }
    }, [value]);

    const [localizedLabels, setLocalizedLabels] =
      useState<Record<string, string>>();

    const i18n = { language: "tr" };

    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
      if (i18n.language) {
        getLocalizedPhoneInputLabels(i18n.language as LanguageCode)
          .then(setLocalizedLabels)
          .catch(() => setLocalizedLabels(undefined));
      } else {
        setLocalizedLabels(undefined);
      }
    }, [i18n.language]);

    // Solution to input not being editable after chrome autocomplete
    function focusAndClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
      e.currentTarget.value = e.currentTarget.value + "";
      onClick?.(e);
    }

    function onCountrySelected(
      selectedCountry?: CountryCode,
      focusInput?: boolean,
    ) {
      // if (country) {
      //   const newValue = `+${getCountryCallingCode(country)}`;
      //   onChange?.(newValue);
      //   if (!value) setInternalValue(newValue);
      //   inputRef.current?.focus();
      // }
      if (country == null) setInternalCountry(selectedCountry);
      onCountryChange?.(selectedCountry);
      if (focusInput == null || focusInput) inputRef.current?.focus();
    }

    const getCountrySelectOptions = useCallback(() => {
      return getCountries()
        .map((code) => {
          return {
            value: code,
            label: localizedLabels?.[code] ?? "",
            divider: false,
          };
        })
        .sort((first, second) =>
          first.label.localeCompare(second.label, i18n.language),
        );
    }, [localizedLabels]);

    const countrySelectOptions = getCountrySelectOptions();

    function setInputRef(instance: HTMLInputElement) {
      inputRef.current = instance;
      if (ref) {
        if (typeof ref === "function") {
          // TODO
          // @ts-ignore
          ref(instance);
        } else {
          // @ts-ignore
          // ref.current = instance;
        }
      }
    }

    // const currentCountry = country ?? getPhoneNumberCountry() ?? defaultCountry;
    const currentCountry = country ?? internalCountry ?? defaultCountry;

    // useEffect(() => {
    //   console.log("currentCountry", currentCountry);
    // }, [currentCountry]);

    return (
      <div
        className={twMerge(
          "PhoneInput focus-within:PhoneInput--focus",
          [
            disabled && "PhoneInput--disabled",
            readOnly && "PhoneInput--readOnly",
          ],
          "w-full overflow-hidden rounded-full bg-gray-100 text-sm",
          "text-sm text-black placeholder:text-black200",
          "outline outline-2 outline-black200 focus-within:outline-black",
          "focus-within:border-2 focus-within:border-black focus-within:ring-0",
          "ring-0 focus-within:ring-0",
          error && "text-red400 outline-red400 focus-within:outline-red400",
          "[&_.PhoneInputCountry]:rounded-full [&_.PhoneInputCountry]:bg-[#F1F3F4] [&_.PhoneInputCountry]:px-3 [&_.PhoneInputCountry]:text-black300",
          className,
        )}
      >
        {/* Country `<select/>` */}
        <CustomCountrySelect
          name={name ? `${name}Country` : undefined}
          aria-label={localizedLabels?.country}
          {...countrySelectProps}
          // value={country}
          value={currentCountry}
          options={countrySelectOptions}
          // TODO
          // @ts-ignore
          onChange={onCountrySelected}
          iconComponent={CountryIconComponent}
          arrowComponent={DownArrow}
        />
        {/* Phone number `<input/>` */}
        <PhoneInput
          ref={setInputRef}
          name={name}
          value={value ?? internalValue}
          onChange={(newValue) => {
            // Fixes onChange returning undefined when no national digits entered
            const newPhone = newValue
              ? newValue
              : `+${getCountryCallingCode(currentCountry)}`;
            if (value == null) setInternalValue(newPhone as E164Number);
            onChange?.(newPhone);
          }}
          className="PhoneInputInput w-full disabled:cursor-not-allowed disabled:opacity-[0.6]"
          disabled={disabled}
          readOnly={readOnly}
          defaultCountry={currentCountry}
          country={currentCountry}
          international={true}
          // limitMaxLength={true}
          onClick={focusAndClick}
          // @ts-ignore
          inputComponent={CommonPhoneInput}
          withCountryCallingCode={false}
          {...rest}
        />
      </div>
    );
  },
);

// @ts-ignore
CustomPhoneInput.displayName = "CustomPhoneInput";

export default CustomPhoneInput;

const CommonPhoneInput = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input">
>(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={twMerge(
        // "bg-transparent py-3 pl-4 text-base outline-none",
        "bg-gray-100 py-2.5 text-xs outline-none",
        className,
      )}
      {...rest}
    />
  );
});

// @ts-ignore
CommonPhoneInput.displayName = "Input";

const CustomCountrySelect = ({
  className,
  options,
  value,
  onChange,
  iconComponent: Icon,
  arrowComponent: Arrow,
  unicodeFlags,
  readOnly,
  ...rest
}: Omit<ComponentPropsWithoutRef<"select">, "onChange" | "value"> & {
  // `<select/>` options.
  options: { value: string; label: string; divider: boolean }[];
  /**
   * A two-letter country code.
   * Example: "US", "RU", etc.
   */
  value?: string;
  /**
   * A function of `value: string`.
   * Updates the `value` property.
   */
  onChange: (value?: string) => void;
  // Country flag component.
  iconComponent: PropTypes.ReactComponentLike;
  // Select arrow component.
  arrowComponent?: PropTypes.ReactComponentLike;
  // HTML readonly attribute.
  readOnly?: boolean;
  // Set to `true` to render Unicode flag icons instead of SVG images.
  unicodeFlags?: boolean;
}) => {
  const selectedOption = useMemo(() => {
    return getSelectedOption(options, value);
  }, [options, value]);

  function getSelectedOption(
    options: { value?: string; label: string; divider: boolean }[],
    value?: string,
  ) {
    for (const option of options) {
      if (!option.divider && option.value === value) {
        return option;
      }
    }
  }

  const onChange_ = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      onChange(value === "ZZ" ? undefined : value);
    },
    [onChange],
  );

  return (
    <div className="PhoneInputCountry">
      {/* "ZZ" means "International".
        (HTML requires each `<option/>` have some string `value`).*/}
      <select
        {...rest}
        disabled={readOnly}
        value={value || "ZZ"}
        onChange={onChange_}
        className={classNames("PhoneInputCountrySelect", className)}
      >
        {options.map(({ value, label, divider }) => (
          <option
            key={divider ? "|" : value || "ZZ"}
            value={divider ? "|" : value || "ZZ"}
            disabled={divider}
            style={divider ? DIVIDER_STYLE : undefined}
          >
            {label}
          </option>
        ))}
      </select>

      {/* Either a Unicode flag icon. */}
      {unicodeFlags && value && (
        <div className="PhoneInputCountryIconUnicode">
          {getUnicodeFlagIcon(value)}
        </div>
      )}

      {/* Or an SVG flag icon. */}
      {!(unicodeFlags && value) && (
        <Icon
          aria-hidden
          country={value}
          label={selectedOption && selectedOption.label}
          aspectRatio={unicodeFlags ? 1 : undefined}
        />
      )}

      {value && (
        <span className="mx-1 ml-2">{`${value} (+${getCountryCallingCode(
          value as CountryCode,
        )})`}</span>
      )}
      {/*{value && (*/}
      {/*  <span className="mx-1 ml-2">{`+${getCountryCallingCode(*/}
      {/*    value as CountryCode*/}
      {/*  )}`}</span>*/}
      {/*)}*/}

      {Arrow ? (
        <Arrow className="ml-1" />
      ) : (
        <div className="PhoneInputCountrySelectArrow !text-black2 !h-2 !w-2" />
      )}
    </div>
  );
};

const CountryIconComponent = ({
  country,
  label,
}: {
  country: string;
  label: string;
}) => {
  const flagUrl =
    "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg";

  return (
    <div
      className={classNames("PhoneInputCountryIcon", "overflow-hidden rounded")}
    >
      {country && (
        <img
          className="PhoneInputCountryIconImg"
          alt={label}
          role={label ? undefined : "presentation"}
          src={flagUrl
            .replace("{XX}", country)
            .replace("{xx}", country.toLowerCase())}
        />
      )}
    </div>
  );
};

const DIVIDER_STYLE = {
  fontSize: "1px",
  backgroundColor: "currentColor",
  color: "inherit",
};
