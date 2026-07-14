/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode via class strategy (for theme toggle)
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette matching reference purple/indigo theme
      colors: {
        primary: {
          50:  '#f5f0ff',
          100: '#ede5ff',
          200: '#ddd0ff',
          300: '#c4aaff',
          400: '#a87eff',
          500: '#8b5cf6', // Main purple accent
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        // Hero gradient colors (matches reference)
        heroFrom: '#EADFF8',
        heroVia: '#ffffff',
        heroTo:  '#E5F8F7',
        // Stat card background
        statBg: '#edd8ff80',
      },
      // Custom font family
      fontFamily: {
        sans: ['Work Sans', 'Inter', 'sans-serif'],
      },
      // Custom animations
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out both',
        'slideInLeft': 'slideInLeft 0.6s ease-out both',
        'scaleIn': 'scaleIn 0.5s ease-out both',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
      },
      // Box shadow extensions
      boxShadow: {
        'card': '0 4px 24px 0 rgba(139,92,246,0.10)',
        'card-hover': '0 8px 40px 0 rgba(139,92,246,0.20)',
      },
    },
  },
  plugins: [],
};
