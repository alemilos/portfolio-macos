/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "delete-shake": "shake 0.3s ease infinite",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1px)" },
          "50%": { transform: "translateX(1px)" },
          "75%": { transform: "translateX(-1px)" },
          "100%": { transform: "translateX(1px)" },
        },
      },
    },
  },
  plugins: [],
};
