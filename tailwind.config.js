const defaultTheme = require('tailwindcss/defaultTheme')

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
        sans: ['var(--font-open-sans)', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          100: '#e2e6e9',
          200: '#c6ccd3',
          300: '#a9b3bc',
          400: '#8d99a6',
          500: '#708090',
          600: '#5a6673',
          700: '#434d56',
          800: '#2d333a',
          900: '#161a1d',
        },
      },
    },
  },
  plugins: [],
};
