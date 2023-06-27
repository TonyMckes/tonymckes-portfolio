import type { Config } from 'tailwindcss'
// @ts-expect-error Types
import tailwindcssAnimate from 'tailwindcss-animate'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', ...fontFamily.serif],
      },
      colors: {
        primary: {
          50: '#f1fcfa',
          100: '#d0f7f1',
          200: '#a0efe4',
          300: '#69dfd3',
          400: '#4ecdc4',
          500: '#20aca4',
          600: '#178a86',
          700: '#176e6c',
          800: '#175858',
          900: '#174a49',
        },
        night: {
          50: '#f4f6f9',
          100: '#dce2eb',
          200: '#b9c5d6',
          300: '#8e9fba',
          400: '#67789a',
          500: '#4c5d80',
          600: '#3c4865',
          700: '#323c53',
          800: '#2c3243',
          900: '#0f1116',
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
