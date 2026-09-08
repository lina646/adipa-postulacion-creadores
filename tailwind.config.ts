import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#704EFD",
          cyan: "#2CB7FF",
          soft: "#F3F4FF",
          navy: "#091E42",
          lightBlue: "#CBE8FF",
          lavender: "#DFD5FF",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Helvetica", "sans-serif"],
      },
      borderRadius: {
        adipa: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
