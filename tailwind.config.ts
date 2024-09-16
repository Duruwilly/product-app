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
        black: "rgba(0, 0, 0, 0.9)",
        grey: "rgba(0, 0, 0, 0.6)",
        lightGrey: "rgba(0, 0, 0, 0.4)",
        primary: "#8A226F",
        secondary: "#FFEAFA",
      },
      backgroundColor: {
        primary: "#8A226F",
        secondary: "#FFEAFA",
      },
      borderColor: {
        primary: "#8A226F",
      },
    },
  },
  plugins: [],
};
export default config;
