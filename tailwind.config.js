import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#cffafe', // almost white
        400: '#22d3ee', // dark pink
        500: '#06b6d4', // light pink 
        600: '#0e7490', // wine
      },
      grayscale: {
        25: '#020617', // beige
        100: '#020617', 
        200: '#0f172a',
        950: '#f8fafc',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
