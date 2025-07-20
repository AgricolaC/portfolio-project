import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', // support all relevant file types
  ],
  theme: {
    extend: {
      // You can customize colors, fonts, etc. here if desired
    },
  },
  plugins: [
    typography // for prose styling (markdown, blog, etc.)
  ],
};
