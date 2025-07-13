/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: require('tailwindcss/colors').rose,
        brand: {
          blue: '#2647A4', // your logo color
          'brand-blue': '#1e40af', 
        },
        backdropBlur: {
      xs: '2px',
    },
    colors: {
      'brand-blue': '#2362ac',
    },
    colors: {
       'brand-blue': '#1e40af', 
    },
      },
    },
  },
  // tailwind.config.js

  theme: {
    extend: {
      colors: {
        pink: {
          50: "#fff1f5",
          100: "#ffe4e9",
          600: "#d63384", // Strong brand pink
          700: "#b0306b",
        },
        brand: {
          blue: "#385170",
          light: "#ece9f1",
        },
      },
    },
  },

  plugins: [],
}
