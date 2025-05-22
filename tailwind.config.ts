import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        charcoal: "#1A1A18",
        gold: "#D4AF37",
        offwhite: "#F5F5F5",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
