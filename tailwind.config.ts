import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056D2",
        secondary: "#4DA1FF",
        background: "#FFFFFF",
        foreground: "#171717",
      },
    },
  },
  plugins: [],
};
export default config;
