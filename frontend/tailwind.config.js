/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      ...defaultTheme,

      colors: {
        ...defaultTheme.colors,
        transparent: 'transparent',
        white: '#FFFFFF',
        text: '#1D212F',

        admin: {
          warning: '#E76971',
          btnWhite: '#F5F5FB',

          primary: '#6259ca',
          primaryHover: '#403fad',
          primaryActive: '#6259CACC',
          headPage: '#170c6b',

          secondary: '#f1388b',
          secondaryHover: '#ec3487',
          secondaryActive: '#f75da2',

          lighten: {
            main: '#EAEDF7',
            second: '#FFFFFF',

            grey: '#474040',
            border: '#bdbdd7',
          },
          darken: {
            main: '#24243E',
            second: '#0E0E23',

            border: '#474749',
          },
        },
        dropShadow: {
          lighten: [
            '0 8px 10px rgba(0, 0, 0, 0.3)',
            '0 3px 14px rgba(0, 0, 0, 0.04)',
            '0 4px 5px rgba(0, 0, 0, 0.04)',
          ],
          darken: [
            '0 8px 10px rgba(0, 0, 0, 0.04)',
            '0 3px 14px rgba(0, 0, 0, 0.04)',
            '0 4px 5px rgba(0, 0, 0, 0.04)',
          ],
        },
      },

      fontFamily: {
        pacifico: ['var(--font-pacifico)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },

      transitionProperty: {
        ...defaultTheme.transitionProperty,
        width: 'width, max-width',
        aside: 'transform, width, max-width',
        rotate: 'rotate',
        links: 'padding, transform, color',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        ...defaultTheme.zIndex,
        100: '100',
      },
    },
  },
  plugins: [],
};
