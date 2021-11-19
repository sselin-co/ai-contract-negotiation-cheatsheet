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
      {
        osler: {
          primary: "#94343F",
          "primary-focus": "#612229",
          "primary-content": "#ffffff",
          secondary: "#2094f3",
          "secondary-focus": "#2094f3",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#ffffff",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#2a2e37",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "dark", // and some pre-defined theme
      "forest",
      "synthwave",
    ],
  },
};
