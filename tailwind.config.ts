import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          800: "#1e40af",
        },
      },
    },
  },
  plugins: [],
};

export default config;
