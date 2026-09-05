/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        legal: {
          darkest: '#0B0F19',
          navy: '#0F172A',
          card: '#1E293B',
          cardHover: '#24334A',
          border: '#334155',
          borderLight: '#475569',
          amber: '#F59E0B',
          amberLight: '#FCD34D',
          amberDark: '#D97706',
          blue: '#2563EB',
          blueLight: '#60A5FA',
          cyan: '#06B6D4',
          emerald: '#10B981',
          gold: '#D4AF37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 20px -5px rgba(245, 158, 11, 0.25)',
        'glow-blue': '0 0 20px -5px rgba(37, 99, 235, 0.25)',
        'subtle': '0 4px 20px 0 rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
