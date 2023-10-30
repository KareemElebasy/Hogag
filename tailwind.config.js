/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "#A77646",
      title: "#5C534A",
      bgprimary:"#FFF7ED",
      "second-title": "#665428",
      secondary: "#C2B491",
      third: "#27365C",
      white: "#fff",
      "text-dark": "#697E95",
      black: "#000",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      gray: "#7F8387",
      brown: "#3C2A00",

      description: "#697E95",
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    screens: {
      sm: "576",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
    },
    fontFamily: {
      sans: ["tajawal", "sans-serif"],
      quran: ["amiri-quran"],
    },
    minHeight: {
      "3/4": "75%",
    },
    maxWidth: {
      "3/4": "75%",
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
