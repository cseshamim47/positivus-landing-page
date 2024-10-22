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
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "var(--accent-green)",
        dark: "var(--accent-dark)",
        gray: "var(--accent-gray)"
      },
      height: {
        '63': '252px', // 4*63
      },
      minWidth:{
        'testimonial': '466px'
      },
      fontSize:{
        '4.5xl': '3rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
export default config;
