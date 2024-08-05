/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#fefefe",
        "tooki-orange": "#FB371C"
      },
      boxShadow: {
        "green": "0px 10px 70px -12px rgba(40,201,40,1)"
      },
      backgroundColor: {
        "green-gradient": "linear-gradient(89.79deg, #FFFFFF -2.03%, rgba(230, 255, 232, 0.75) 50.93%, #FFFFFF 99.82%);"
      }
    },
  },
  plugins: [],
}

