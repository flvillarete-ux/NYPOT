import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        warm: "#F5F5DC",
        primary: "#1A1A1A",
        secondary: "#6B705C",
        accent: "#D18A67",
        sage: "#9cac96",
      },
    },
  },
  plugins: [],
};
export default config;
