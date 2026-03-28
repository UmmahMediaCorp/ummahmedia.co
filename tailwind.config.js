/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#15703F',
          'green-dark': '#0A4424',
          'green-light': '#1E9B50',
          gold: '#D4A843',
          'gold-light': '#E8C974',
          'gold-dark': '#A88530',
        },
        surface: {
          cream: '#FBF8F3',
          'cream-dark': '#F5F0E8',
          beige: '#EDE7DC',
          sand: '#E5DDD0',
          muted: '#8B8578',
          'muted-dark': '#6B6358',
          light: '#FFFEFA',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      fontSize: {
        display: [
          'clamp(4rem, 12vw, 9rem)',
          { lineHeight: '0.95', letterSpacing: '-0.045em', fontWeight: '700' },
        ],
        hero: [
          'clamp(2.8rem, 7vw, 5.5rem)',
          { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        section: [
          'clamp(2.2rem, 5vw, 4rem)',
          { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' },
        ],
        subtitle: [
          'clamp(1.1rem, 2vw, 1.4rem)',
          { lineHeight: '1.55', fontWeight: '400' },
        ],
      },
    },
  },
  plugins: [],
};
