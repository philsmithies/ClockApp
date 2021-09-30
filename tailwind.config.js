module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      boxShadow: {
        vignette: "box-shadow: inset 0 0 5em 1em #000",
      },
      boxShadow: {
        inner: "inset 0 0 4em 1em #000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
