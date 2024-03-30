/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#208E81',
        current: {
          500: '#208E81',
        }
      }
    },
  },
  plugins: [],
}

