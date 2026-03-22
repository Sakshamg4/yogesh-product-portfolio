import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        offWhite: "#f6f5f1",
        cream: "#edebe6",
        ink: {
          900: "#141413", // Headings
          700: "#2d2d2b", // Sub-headings
          500: "#484844", // Body text
          300: "#858580", // Muted
          DEFAULT: "#484844",
        },
        accent: {
          DEFAULT: "#e54d2e",
          bg: "#fef0ec",
          border: "#f5c5b8",
        },
        dark: {
          bg: "#1a1a19",
          card: "#222221",
          text: "#f0efeb",
          muted: "#9a9a94",
          border: "#3a3a38",
        },
        borderLight: "#e2e0da",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

