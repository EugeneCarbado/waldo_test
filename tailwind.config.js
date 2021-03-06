module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        waldo: '#0032a0'
      },
      orange: {
        waldo: '#fe5000'
      },
      grey: {
        waldo: '#f8f8f8'
      },
      white: {
        waldo: '#ffffff'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
