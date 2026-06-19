/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BFFF",
        secondary: "#3B82F6",
        dark: "#071B3A",
        darker: "#04142E",
        card: "#0A2147",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(0,191,255,0.3)",
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(to bottom, rgba(4,20,46,0.3), rgba(4,20,46,1))",
      },
    },
  },
  plugins: [],
};