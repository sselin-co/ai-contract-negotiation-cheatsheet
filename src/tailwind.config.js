const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark", // and some pre-defined theme
    ],
  },
};
