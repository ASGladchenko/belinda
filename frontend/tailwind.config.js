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

        admMain: '#24243E',
        admSecond: '#0E0E23',
        admWarning: '#E76971',

        btnWhite: '#F5F5FB',

        primary: '#6259ca',
        primaryHover: '#403fad',
        primaryActive: '#6259CACC',

        secondary: '#f1388b',
        secondaryHover: '#ec3487',
        secondaryActive: '#f75da2',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
