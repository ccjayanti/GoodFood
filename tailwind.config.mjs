/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chocDark: "var(--choc-dark)",
        chocLight: "var(--choc-light)",
        ivory: "var(--ivory)",
        sand: "var(--sand)",
        sky: "var(--sky)",
        clay: "var(--clay)",
        sage: "var(--sage)",
        slate: "var(--slate)",
        ocean: "var(--ocean)",
        gray: "var(--gray)",
        mist: "var(--mist)",
        sepia: "var(--sepia)",
        transparentBg: "var(--transparent-bg)",
      },
      fontFamily: {
        regular: "var(--regular)",
        italic: "var(--italic)",
      },
    },
  },
  plugins: [],
};
