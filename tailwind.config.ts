import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        waveDarken: "var(--waveDarken)",
        waveLighter: "var(--waveLighter)",
        gray: "var(--gray)",
        gray200: "var(--gray-200)",
        gray600: "var(--gray-600)",
        gray950: "var(--gray-950)",
        gray500: "var(--gray-500)",
      },
    },
  },
  plugins: [],
} satisfies Config;
