import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1A2F",
          800: "#122C4B",
          700: "#1A3E67",
        },
        gold: {
          400: "#D4AF37",
          500: "#C4A032",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
