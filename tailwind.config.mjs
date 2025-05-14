import { defineConfig } from "tailwindcss/helpers";

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#008F55",
        brandGold: "#CFB53B"
      }
    }
  },
  plugins: []
});
