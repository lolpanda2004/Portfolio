/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode class-based switching
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        background: "#0A0A0A",
        surface: "#111111",
      },
    },
  },
  plugins: [require("@heroui/react")],
};
