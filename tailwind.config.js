import tailwindHighlightJS from "tailwind-highlightjs";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [tailwindHighlightJS],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  theme: {
    hljs: {
      theme: "atom-one-dark",
    },
    extend: {
      colors: {
        clementine: "#e68f50",
      },
    },
  },
};
