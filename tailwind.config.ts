import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff6f0",
          100: "#ffe8d7",
          500: "#f16a2f",
          600: "#df5520",
          700: "#b94318",
          900: "#172626",
        },
        accent: {
          400: "#fa844d",
          500: "#ed6429",
          600: "#d84e19",
        },
      },
    },
  },
  plugins: [],
};

export default config;
