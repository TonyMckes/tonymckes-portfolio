import type { Config } from 'tailwindcss'
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
    container: {
      center: true,
      screens: {
        md: '1024px',
      },
      padding: {
        DEFAULT: '0.5rem',
        md: '0',
      },
    },
    extend: {
      boxShadow: {
        grow: '0 0 150px 35rem rgba(34, 211, 238, 0.10)',
      },
      animation: {
        blob: 'blob infinite alternate',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1.1)',
          },
          '33%': {
            transform: 'translate(4rem, 2.845rem) scale(0.9)',
          },
          '66%': {
            transform: 'translate(-6rem, 1.25rem) scale(1)',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', ...fontFamily.serif],
      },
      colors: {
        night: {
          50: '#E4E6EC',
          100: '#D5D8E2',
          200: '#B9C0CF',
          300: '#9EA7BD',
          400: '#808BA8',
          500: '#657395',
          600: '#535E79',
          700: '#3E465B',
          800: '#2B3140',
          900: '#191C24',
          950: '#0F1116',
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
