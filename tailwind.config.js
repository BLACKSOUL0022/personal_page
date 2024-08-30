/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.css", "./index.js"],
  theme: {
    extend: {
      colors: {
      },
      spacing: {
        "300": "300px",
        "400": "400px",
        "800": "800px",
        "1200": "1200px",
        "1600": "1600px"
      },
    },
  },
  plugins: [],
}

