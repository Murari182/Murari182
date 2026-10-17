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
        cosmic: {
          dark: '#09090D',
          darker: '#050508',
          card: '#120A13',
          border: '#2A1B28',
          borderLight: '#3D2638',
        },
        wine: {
          deep: '#160B14',
          DEFAULT: '#21101E',
          glow: '#381630',
          accent: '#4A1D40',
        },
        rose: {
          DEFAULT: '#E8B4CB',
          light: '#F5D3E3',
          dark: '#B87295',
          dim: 'rgba(232, 180, 203, 0.15)',
        },
        brass: {
          DEFAULT: '#D6A66D',
          light: '#F0C895',
          dark: '#A87A44',
          dim: 'rgba(214, 166, 109, 0.15)',
        },
        ivory: {
          DEFAULT: '#FFF7FB',
          soft: '#F4EAF0',
          muted: '#C9C4CC',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 40s linear infinite',
        'spin-reverse': 'spin-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-sweep': 'glow-sweep 6s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-sweep': {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-100%)' },
          '50%': { opacity: '0.8', transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'rose-glow': '0 0 30px -5px rgba(232, 180, 203, 0.25)',
        'brass-glow': '0 0 30px -5px rgba(214, 166, 109, 0.25)',
        'wine-glow': '0 0 40px -10px rgba(33, 16, 30, 0.8)',
        'inner-glow': 'inset 0 0 20px 0 rgba(232, 180, 203, 0.08)',
      },
    },
  },
  plugins: [],
}
