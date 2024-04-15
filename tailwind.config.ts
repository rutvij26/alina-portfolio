import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#ffc09f",
      primary: "#ffee93",
      secondary: "#adf7b6",
      background: "#463239",
      hover: "#ed6b86",
      'hover-200': "#ee7992",
      'hover-100': "#f0889e",
      'black-900': "#000",
    },
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],

};
export default config;
