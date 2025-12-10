import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        // 🔵 Clean electric blue glow (replaces green)
        blue: '0 0 10rem #2563EB',
      },
    },

    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',

      // 🔵 PRIMARY TECH BLUE THEME
      primary: {
        400: '#1E3A8A',   // buttons, links
        500: '#1E293B',   // nav, headers
        600: '#020617',   // strong accents
      },

      // 🔘 SHARP GRAYSCALE (NO BLUR)
      grayscale: {
        25:  '#F8FAFC',  // main background
        100: '#E2E8F0',  // borders
        200: '#CBD5E1',  // muted text
        500: '#475569',  // secondary text
        800: '#1E293B',  // dark UI
        950: '#020617',  // main text
      },

      // ✅ OPTIONAL ACCENT (subtle highlights)
      accent: {
        400: '#38BDF8',
        500: '#0EA5E9',
      },

      // ✅ STATUS COLORS (kept neutral & clean)
      success: '#22C55E',
      warning: '#F59E0B',
      danger:  '#EF4444',
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
