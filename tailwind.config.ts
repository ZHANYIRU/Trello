import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        workBackGround:
          "url('https://telegraph-image-8s5.pages.dev/file/4663037a5eb61f927f57a.jpg')",
      },
      colors: {
        customBlack: "#1D2125",
        customBlue: "#172B4D",
        titleColor: "#9FACBA",
        addColor: "rgba(255, 255, 255, 0.239)",
        hoverAddColor: "rgba(255, 255, 255, 0.11)",
        cardBlack: "#101204",
        cardBackGround: "#22272B",
        cardTextColor: "#B6C2CF",
        cardHoverColor: "#99c8ff",
        addCardColor: "#579DFF",
      },
      width: {
        "272": "272px",
      },
      height: {
        "48": "48px",
        "44": "44px",
        workHeight: "calc(100vh - 48px)",
      },
    },
  },
  plugins: [],
};
export default config;
