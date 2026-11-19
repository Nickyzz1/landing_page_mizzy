export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#07080C',
        surface: {
          DEFAULT: '#0D0F17',
          muted: '#121522',
          elevated: '#171B2B',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(99, 102, 241, 0.25)',
        },
        accent: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          light: '#818CF8',
          purple: '#7C3AED',
          cyan: '#38BDF8',
          emerald: '#10B981',
          muted: 'rgba(99, 102, 241, 0.16)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '1.25rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.06)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

