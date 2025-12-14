module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand colors for consistent theming and gradients
        indigoCustom: '#6366F1',
        purpleCustom: '#8B5CF6',
        pinkCustom: '#A78BFA',
      },
      animation: {
        'slide-in-bottom': 'slide-in-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
};
