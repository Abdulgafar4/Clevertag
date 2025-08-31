/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        dark: "#000000",
        light: "#ffffff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
