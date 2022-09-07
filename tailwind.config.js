/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
  './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#D1003F',
        lightgray: '#f8f8f8',
      },
    },
  },
  plugins: [],
}
