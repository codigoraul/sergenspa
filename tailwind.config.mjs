/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#9b0202',
        'primary-dark': '#7a0101',
        'primary-light': '#c20303',
        title: '#172531',
        paragraph: '#44525F',
        'gray-light': '#F5F7FA',
        'gray-medium': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
