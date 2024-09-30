/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        bodyFont: [
          'Lexend Deca'
        ]
      },
      screens: {
        'xs': '<500px',
        // => @media (min-width: 992px) { ... }
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
