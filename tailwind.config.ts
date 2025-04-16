import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",   // Extra small (fixed to 320 for standard mobile)
      sm: "640px",   // Small devices (e.g. phones)
      md: "768px",   // Medium devices (e.g. tablets)
      lg: "1024px",  // Large devices (e.g. small laptops)
      xl: "1280px",  // Extra large devices (e.g. desktops)
      "2xl": "1536px", // 2XL devices
    },
  },
  plugins: [],
};

export default config;
