const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          50: "#f4f6f7",
          100: "#e3e6ea",
          200: "#cad1d7",
          300: "#a5b0bb",
          400: "#708090",
          500: "#5e6d7c",
          600: "#515c69",
          700: "#454d59",
          800: "#3e444c",
          900: "#373b42",
        },
      },
    },
  },
  plugins: [],
};
