/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing:{
        13: '3.25rem',
      },
      fontFamily: {
        manrope: ['Manrope']
      },
      colors: {
        wpu: '#bada55',
        kopi: '#c0ffee'
      },
    },
  },
  plugins: [],
}
