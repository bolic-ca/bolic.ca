/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bolic: {
          bg: '#fafaf9',
          'bg-dark': '#0a0a0b',
          elevated: '#ffffff',
          'elevated-dark': '#141416',
          subtle: '#f4f4f3',
          'subtle-dark': '#1a1a1c',
          text: '#0a0a0b',
          'text-dark': '#fafafa',
          muted: '#71717a',
          border: '#e8e8e6',
          'border-dark': '#2a2a2e',
          accent: '#f97316',
          'accent-hover': '#ea580c',
          teal: '#4ecdc4',
          coral: '#ff6b6b',
          gold: '#ffd93d',
          purple: '#a29bfe',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      boxShadow: {
        bolic: '0 24px 64px rgba(10, 10, 11, 0.08)',
        'bolic-dark': '0 24px 64px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
