module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      red: {
        50: "#fff7f7",
        100: "#ffefef",
        200: "#ffd6d6",
        300: "#ffbebe",
        400: "#ff8d8d",
        500: "#ff5c5c",
        600: "#e65353",
        700: "#bf4545",
        800: "#993737",
        900: "#7d2d2d",
      },
    },
  },
  plugins: [],
};
