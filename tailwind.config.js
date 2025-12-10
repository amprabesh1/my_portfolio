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
        200: '#e0f2fe', // almost white
        400: '#38bdf8', // dark pink
        500: '#2563eb', // light pink 
        600: '#1e40af', // wine
      },
      grayscale: {
        25: '#f8fafc', // beige
        100: '#e5e7eb', 
        200: '#d1d5db',
        950: '#020617',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
