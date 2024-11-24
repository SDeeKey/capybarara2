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
        gray50: "var(--gray50)",
        gray100: "var(--gray100)",
        gray200: "var(--gray-200)",
        gray500: "var(--gray-500)",
        gray600: "var(--gray-600)",
        gray900: "var(--gray-900)",
        gray950: "var(--gray-950)",
      },
      lineHeight: {
        '72': '72px',
      },
    },
  },
  plugins: [],
} satisfies Config;
