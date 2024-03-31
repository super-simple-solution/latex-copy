/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#fde68a',
        current: {
          500: '#fde68a',
        }
      }
    },
  },
  plugins: [],
}

