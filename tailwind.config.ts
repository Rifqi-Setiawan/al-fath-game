import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",      // penting: path ke folder app
    "./src/components/**/*.{ts,tsx}", // penting: path ke folder components
  ],
  theme: {
    extend: {
      colors: {
        alfath: {
          gold: "#D9C42F",      // warna utama dari logo
          goldDark: "#B49F1F",  // versi lebih gelap
          goldLight: "#EFE48C",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
