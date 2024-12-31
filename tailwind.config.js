/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rubik80s: ['"Rubik 80s Fade"', 'cursive'],
      },
      cursor: {
        'Crix': 'url(crix.cur), pointer',
        'CrixP': 'url(crixP.cur), pointer'
      }
    },
  },
  plugins: [],
}

