/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    backgroundColor: {
      primary: "#FF695B",
      "primary-50": "#FFF7F7",
      "primary-100": "#FFE1DE",
      secondary: "#757575",
      tertiary: "#14AE5C",
      "tertiary-50": "#EBFFEE",
      white: "#FFFFFF",
      disable: "#D9D9D9",
      darkgray: "#98979A",
    },
    colors: {
      primary: "#FF695B",
      "primary-50": "#FFF7F7",
      "primary-100": "#FFE1DE",
      secondary: "#757575",
      tertiary: "#14AE5C",
      "tertiary-50": "#EBFFEE",
      white: "#FFFFFF",
      danger: "#900B09",
      green: "#009951",
      disable: "#D9D9D9",
      darkgray: "#98979A",
    },
    fontSize: {
      "2xl": [
        "88px",
        {
          lineHeight: "108px",
          letterSpacing: "-0.04em",
          fontWeight: "600", // Semi Bold
          fontFamily: "Inter, sans-serif",
        },
      ],
      xl: [
        "64px",
        {
          lineHeight: "80px",
          letterSpacing: "-0.04em",
          fontWeight: "600", // Semi Bold
          fontFamily: "Inter, sans-serif",
        },
      ],
      lg: [
        "52px",
        {
          lineHeight: "60px",
          letterSpacing: "-0.03em",
          fontWeight: "600", // Semi Bold
          fontFamily: "Inter, sans-serif",
        },
      ],
      md: [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "-0.02em",
          fontWeight: "600", // Semi Bold
          fontFamily: "Inter, sans-serif",
        },
      ],
      sm: [
        "24px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.01em",
          fontWeight: "600", // Semi Bold
          fontFamily: "Inter, sans-serif",
        },
      ],
      "heading-xl": [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "-0.04em",
          fontWeight: "500", // Medium
          fontFamily: "Inter, sans-serif",
        },
      ],
      "heading-lg": [
        "20px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.02em",
          fontWeight: "500", // Medium
          fontFamily: "Inter, sans-serif",
        },
      ],
      "heading-md": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.01em",
          fontWeight: "500", // Medium
          fontFamily: "Inter, sans-serif",
        },
      ],
      "heading-sm": [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.01em",
          fontWeight: "500", // Medium
          fontFamily: "Inter, sans-serif",
        },
      ],
      "body-xl": [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.02em",
          fontWeight: "400", // Regular
          fontFamily: "Inter, sans-serif",
        },
      ],
      "body-lg": [
        "16px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.02em",
          fontWeight: "400", // Regular
          fontFamily: "Inter, sans-serif",
        },
      ],
      "body-md": [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.01em",
          fontWeight: "400", // Regular
          fontFamily: "Inter, sans-serif",
        },
      ],
      "body-sm": [
        "12px",
        {
          lineHeight: "16px",
          letterSpacing: "-0.01em",
          fontWeight: "400", // Regular
          fontFamily: "Inter, sans-serif",
        },
      ],
    },
    extend: {
      backgroundImage: {
        redwhite: "linear-gradient(0deg, #FFF 75%, #FFE1DE 100%)",
      },
      height: {
        50: "200px",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
