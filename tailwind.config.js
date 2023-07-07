/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tilt: {
          "0%": { transform: "rotateY(0) rotateX(0)" },
          "50%": { transform: "rotateY(20deg) rotateX(4deg)" },
          "100%": { transform: "rotateY(0) rotateY(0)" },
        },
      },
      animation: { tilt: "tilt .6s ease-in-out forwards" },
    },
  },
  plugins: [],
};
