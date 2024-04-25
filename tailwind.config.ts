import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#000",
      primary: "#ffee93",
      secondary: "#adf7b6",
      background: "#463239",
      hover: "#c19770",
      'black-900': "#c19770",
      'sky_blue': {
        DEFAULT: '#8ecae6',
        100: '#0d2e3d',
        200: '#1b5c7a',
        300: '#288ab7',
        400: '#51aed9',
        500: '#8ecae6',
        600: '#a5d5eb',
        700: '#bbdff0',
        800: '#d2eaf5',
        900: '#e8f4fa'
      },
      'blue_green': {
        DEFAULT: '#219ebc',
        100: '#071f25',
        200: '#0d3e4b',
        300: '#145d70',
        400: '#1a7d95',
        500: '#219ebc',
        600: '#39bcdc',
        700: '#6bcce5',
        800: '#9cddee',
        900: '#ceeef6'
      },
      'prussian_blue': {
        DEFAULT: '#023047',
        100: '#00090e',
        200: '#01131c',
        300: '#011c2a',
        400: '#012638',
        500: '#023047',
        600: '#04699b',
        700: '#06a3f1',
        800: '#54c3fb',
        900: '#a9e1fd'
      },
      'selective_yellow': {
        DEFAULT: '#ffb703',
        100: '#342500',
        200: '#684b00',
        300: '#9c7000',
        400: '#d09500',
        500: '#ffb703',
        600: '#ffc637',
        700: '#ffd569',
        800: '#ffe39b',
        900: '#fff1cd'
      },
      'ut_orange': {
        DEFAULT: '#fb8500',
        100: '#321b00',
        200: '#643500',
        300: '#965000',
        400: '#c86b00',
        500: '#fb8500',
        600: '#ff9e2f',
        700: '#ffb663',
        800: '#ffce97',
        900: '#ffe7cb'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],

};
export default config;
