/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        conteinerShadow: "0px 25px 40px -20px #00000018"
      }
    },
  },
  plugins: [],
}

