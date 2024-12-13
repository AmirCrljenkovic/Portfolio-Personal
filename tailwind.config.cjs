/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#222831', 
      },
      keyframes: {
        scrollTape: {
          '0%': { transform: 'translateX(100%) rotate(6deg)' },
          '100%': { transform: 'translateX(-100%) rotate(6deg)' },
        },
      },
      animation: {
        'scroll-tape': 'scrollTape 10s linear infinite', 
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'], 
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};
