/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Neue Montreal", "sans-serif"],
        secondary: ["Telegraf", "sans-serif"],
      },
      screens: {},
      fontSize: {
        sm: ["clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)", "1"],
        base: ["clamp(1rem, 0.34vw + 0.91rem, 1.19rem)", "1"],
        lg: ["clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)", "1"],
        xl: ["clamp(1.56rem, 1vw + 1.31rem, 2.11rem)", "1"],
        "2xl": ["clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)", "1"],
        "3xl": ["clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)", "1"],
        "4xl": ["clamp(3.05rem, 3.54vw + 2.17rem, 5rem)", "1"],
        "5xl": ["clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)", "1"],
        "6xl": ["clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)", "1"],
      },
      transitionDelay: {
        "ease-in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
        "ease-in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
    variants: {
      extend: {
        backgroundColor: ["active"],
      },
    },
  },
  plugins: ["@tailwindcss/jit"],
};
