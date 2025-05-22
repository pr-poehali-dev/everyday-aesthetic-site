import type { Config } from "tailwindcss";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
      },
      colors: {
        gold: "#D4AF37",
        charcoal: "#1A1A18",
        offwhite: "#F5F5F0",
      },
      animation: {
        fadeIn: "fadeIn 1s ease forwards",
        slideUp: "slideUp 0.8s ease forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
