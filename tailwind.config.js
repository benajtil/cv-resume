/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require["@tailwindcss/line-clamp"]],
};
module.exports = {
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      animation: {
        ripple: "ripple 2s infinite ease-out",
      },
    },
  },
  plugins: [],
};
