import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "319px", // Extra small devices
        sm: "425px", // Small devices
        md: "768px", // Tablets
        lg: "1024px", // Laptops
        xl: "1280px", // Large laptops/desktops
        "2xl": "1536px", // Extra-large screens
      },
    },
  },
  plugins: [],
} satisfies Config;
