/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'icon-light-color': '#3C493F',  // Kleur in light mode
        'icon-dark-color': '#7E8D85',   // Kleur in dark mode
        darkbg: '#202120',
      },
      keyframes: {
        scrollTape: {
          '0%': { transform: 'translateX(100%) rotate(6deg)' },
          '100%': { transform: 'translateX(-100%) rotate(6deg)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        realisticShake: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '45%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseLocation: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'scroll-tape': 'scrollTape 10s linear infinite',
        blink: 'blink 1s step-start infinite',
        'realistic-shake': 'realisticShake 0.8s ease-in-out',
        'bounce-once': 'bounceOnce 0.6s ease-in-out',
        'pulse-location': 'pulseLocation 1.2s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
