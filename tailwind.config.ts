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
        "primary-bc-blue": "#355992",
        "preview-bg-green": "#00a651"
      },
    },
  },
  plugins: [],
};
export default config;