/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        muli: ["Muli", "sans-serif"],
      },
      colors: {
        steelblue: "steelblue",
        soundBoard: "rgb(161, 100, 223)",
      },
    },
  },
  plugins: [],
};
