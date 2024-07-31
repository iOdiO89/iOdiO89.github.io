import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFF',
        grey: {
          100: '#F2F2F7',
          200: '#D1D1D6',
          300: '#C7C7CC',
          400: '#AEAEB2',
          500: '#8E8E93',
          600: '#636366',
          700: '#48484A',
          800: '#3A3A3C',
          900: '#2C2C2E',
        },
        black: '#262626',
        main: '#5E3BEE',
      },
      screens: {
        mo: { raw: 'only screen and (max-width: 480px)' }, // 0px ~ 480px
        tab: { raw: 'only screen and (min-width: 481px) and (max-width: 734px)' }, // 481px ~ 734px
        pc: { raw: 'only screen and (min-width: 735px) and (max-width: 1068px)' }, // 735px ~ 1068px
        big: { raw: 'only screen and (min-width: 1441px)' }, // 1441px ~
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
