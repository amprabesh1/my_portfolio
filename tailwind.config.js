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
        400: '#2563EB', // almost white
        500: '#1D4ED8', // dark pink
        600: '#1E3A8A', // light pink 

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
