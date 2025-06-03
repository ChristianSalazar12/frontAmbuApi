/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#D9D9D9",
        secondary: "#F59E0B",
        accent: "#EF4444",
        background: "#F3F4F6",
        text: "#111827",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Merriweather"', "serif"],
      },
    },
  },
  plugins: [],
};
