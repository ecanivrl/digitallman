import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black400: "#2C2C2C",
        black300: "#5A5A5A",
        black200: "#999999",
        black100: "#E6E6E6",
        red500: "#B83131",
        red400: "#DC3D3D",
        red300: "#FF4C4C",
        red200: "#F3BBBB",
        red100: "#F3E7E9",
        green500: "#238B28",
        green400: "#33A838",
        green300: "#3ACC40",
        green200: "#BBE8BD",
        green100: "#E2F2E9",
        orange500: "#DD5100",
        orange400: "#FF5D00",
        orange300: "#FF782A",
        orange200: "#FF975B",
        orange100: "#FFEBE0",
        blue500: "#4712BA",
        blue400: "#5316D8",
        blue300: "#6F50EC",
        blue200: "#8280FF",
        blue100: "#F2F2FF",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
