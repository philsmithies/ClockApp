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
        inner: "inset 0 0 4em 1em #000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
