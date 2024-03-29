import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BCSans: ["BCSans", "sans-serif"],
      },
      colors: {
        "primary-bc-white": "#f1f1f1",
        "primary-bc-blue": "#003366",
        "primary-bc-light-blue": "#355992",
        "preview-bc-green": "#2a6541",
        "primary-bc-yellow": "#d2bd3b",
        "primary-bc-tan": "#ddd3b1"
      },
    },
  },
  plugins: [],
};
export default config;