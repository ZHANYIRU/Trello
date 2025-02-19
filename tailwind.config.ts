import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        workBg: "url('/images/Colorado Night Sky.jpg')",
      }),
      colors: {
        custom: {
          black: "#1D2125",
          customBlue: "#172B4D",
          title: "#9FACBA",
          add: "rgba(255, 255, 255, 0.239)",
          hoverAdd: "rgba(255, 255, 255, 0.11)",
          card: "#101204",
          cardBg: "#22272B",
          cardText: "#B6C2CF",
          cardHover: "#99c8ff",
          addCard: "#579DFF",
          dialogBg: "#323940",
        },
      },
      spacing: {
        "272": "272px",
      },
      height: {
        "48": "48px",
        "44": "44px",
        work: "calc(100vh - 48px)",
      },
    },
  },
  plugins: [],
};
export default config;
