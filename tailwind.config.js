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
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',

      // 🔵 PRIMARY TECH BLUE
      primary: {
        400: '#2563EB',   // buttons, links
        500: '#1D4ED8',   // nav, headers
        600: '#1E3A8A',   // strong accents
      },

      // 🔘 CLEAN GRAYSCALE (NO BLUR)
      grayscale: {
        25:  '#F8FAFC',  // background
        100: '#E2E8F0',  // borders
        200: '#CBD5E1',  // muted text
        500: '#475569',  // secondary text
        800: '#1E293B',  // dark UI
        950: '#020617',  // main text
      },

      // ✅ OPTIONAL ACCENT (for highlights)
      accent: {
        400: '#38BDF8',  // cyan highlight
        500: '#0EA5E9',
      },

      // ✅ SUCCESS / STATUS COLORS
      success: '#22C55E',
      warning: '#F59E0B',
      danger:  '#EF4444',
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
