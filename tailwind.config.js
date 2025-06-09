/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#D9D9D9",
        secondary: "#F8FAFC",
        accent: "#EF4444",
        background: "#F3F4F6",
        text: "#111827",
        tertiary: "#FFFFFF",
        buttonAction: "#2563EB",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Merriweather"', "serif"],
      },
      animation: {
        gradient: "gradientBG 10s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
