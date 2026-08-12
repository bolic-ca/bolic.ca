/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bolic: {
          ink: '#08080a',
          surface: '#141416',
          'surface-2': '#1c1c20',
          raise: '#232329',
          line: '#26262b',
          'line-soft': '#1c1c21',
          text: '#f5f5f4',
          muted: '#8a8a93',
          'muted-2': '#5c5c65',
          red: '#ef4444',
          'red-deep': '#dc2626',
          // muscle-category spectrum (from app)
          chest: '#ff6b6b',
          delts: '#ffd93d',
          back: '#4ecdc4',
          arms: '#e17055',
          legs: '#a29bfe',
          core: '#00b894',
        },
      },
      fontFamily: {
        // match the app: native system font (SF Pro on iOS) everywhere
        display: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        bolic: '0 30px 80px rgba(0, 0, 0, 0.55)',
        glow: '0 0 0 1px rgba(239, 68, 68, 0.35), 0 20px 60px rgba(220, 38, 38, 0.28)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'rise-in': 'rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
