/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'arabic-heading': ['Cairo', 'Arial', 'sans-serif'],
        'arabic-body': ['Tajawal', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd5ff',
          300: '#8cbaff',
          400: '#5694ff',
          500: '#2970ff',
          600: '#0047AB',
          700: '#0038a1',
          800: '#002e85',
          900: '#00296d',
          950: '#001a4a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fff4c5',
          200: '#fee985',
          300: '#fdd546',
          400: '#fcc318',
          500: '#F9A602',
          600: '#db7706',
          700: '#b75209',
          800: '#93400e',
          900: '#7a350f',
          950: '#461b04',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards',
        slideUp: 'slideUp 0.5s ease forwards',
        slideIn: 'slideIn 0.5s ease forwards',
        scaleIn: 'scaleIn 0.5s ease forwards',
        pulse: 'pulse 2s infinite',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'glass': 'blur(10px)',
      },
    },
  },
  plugins: [],
};