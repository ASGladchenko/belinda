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

        client: {
          light: {
            header: 'rgba(255, 255, 255, 0.3)',
          },
        },

        admin: {
          warning: '#E76971',
          btnWhite: '#F5F5FB',

          headPage: '#170c6b',

          primary: '#6259ca',
          primaryHover: '#403fad',
          primaryActive: '#6259CACC',
          primaryGhost: 'rgba(98, 89, 202, 0.3);',

          secondary: '#f1388b',
          secondaryHover: '#ec3487',
          secondaryActive: '#f75da2',
          secondaryGhost: 'rgba(247, 93, 162, 0.4);',

          overlay: 'rgba(36, 36, 61, 0.6);',
          overlay1: 'rgba(234, 237, 247, 0.4);',

          lighten: {
            main: '#EAEDF7',
            second: '#FFFFFF',

            crumps: '#8f9cc0',
            crumpsActive: '#7787bc',
            crumpsHover: '#170c6b',

            grey: '#474040',
            border: '#bdbdd7',
          },
          darken: {
            main: '#24243E',
            second: '#0E0E23',

            crumps: '#8f9cc0',
            crumpsActive: '#D0D0E2',
            crumpsHover: '#FFFFFF',

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
        jost: ['var(--font-jost)', 'sans-serif'],
      },

      transitionProperty: {
        ...defaultTheme.transitionProperty,
        height: 'height',
        width: 'width, max-width',
        aside: 'transform, width, max-width',
        rotate: 'rotate',
        links: 'padding, transform, color',
        opacity: 'opacity',
        color: 'background-color, color',
        h: 'height',
      },

      container: {
        'max-width': '1900px',
        center: true,
        padding: {
          DEFAULT: '20px',
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      zIndex: {
        ...defaultTheme.zIndex,
        100: '100',
        999: '999',
        1000: '1000',
      },

      keyframes: {
        scale: {
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },

        left_appearance: {
          '0%': { transform: 'translateX(-20%)', opacity: 0 },
          '70%': { opacity: 0.6 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },

        down_appearance: {
          '0%': { transform: 'translateY(20%)', opacity: 0 },
          '70%': { opacity: 0.6 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },

      animation: {
        'scale-4': 'scale 4s ease-in-out infinite',
        'left-appearance': 'left_appearance 0.5s ease-in-out forwards',
        'down-appearance': 'down_appearance 0.6s ease-in-out forwards',
      },

      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        '100%': '100%',
        '150%': '150%',
      },
    },
  },
  plugins: [],
};
