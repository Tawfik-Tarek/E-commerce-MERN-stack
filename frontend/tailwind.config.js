/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondary': '#9A3131',
        main: "#11113A",
      } , 
      padding:{
        "primary" : "2rem",
        "default" : "1rem"
      }
    },
  },
  plugins: [],
}