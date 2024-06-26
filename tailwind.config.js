import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "gradient-text": "gradient-text 3s ease infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "gradient-text": {
          "0%, 100%": {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          "50%": {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
