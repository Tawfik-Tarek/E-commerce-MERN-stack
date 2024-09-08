/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondary': '#DB4444',
        main: "#11113A",
      } , 
      padding:{
        "primary" : "6rem",
        "default" : "1rem"
      }
    },
  },
  plugins: [],
}