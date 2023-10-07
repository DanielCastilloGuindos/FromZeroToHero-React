/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lastSlideToLeft: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '50%': {
            transform: 'translateX(-50%)',
          },
          '99%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            display: 'none',
          }
        },
        newSlideToLeft: {
          '0%': {
            transform: 'translateX(100%)',
            display: 'block',
          },
          '50%': {
            transform: 'translateX(50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          }
        },
      },
      animation: {
        lastSlideToLeft: 'lastSlideToLeft .8s linear 1',
        newSlideToLeft:  'newSlideToLeft .8s linear 1',
      },
    },
  },
  plugins: [],
}

