import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e7d32',   // a deep green
          light: '#60ad5e',
          dark: '#005005',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: (theme) => ({
        primary: {
          css: {
            '--tw-prose-body': theme('colors.gray.800'),
            '--tw-prose-headings': theme('colors.primary.DEFAULT'),
            '--tw-prose-links': theme('colors.primary.light'),
            '--tw-prose-bold': theme('colors.primary.dark'),
            '--tw-prose-underline': theme('colors.primary.DEFAULT'),
          }
        }
      })
    },
  },
  plugins: [typography],
};

