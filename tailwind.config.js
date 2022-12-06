/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-brand-colors"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.6xl") },
        h2: { fontSize: theme("fontSize.1xl") },
        h3: { fontSize: theme("fontSize.xl") },
      });
    }),
  ],
};
