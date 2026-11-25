export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        niatron: {
          dark: '#0B101B',
          slate: '#0F172A',
          navy: '#162033',
          surface: '#111A2E',
          orange: '#FF5E1E',
          'orange-hover': '#E04E14',
          light: '#F8FAFC',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        pcb: '0 30px 60px -15px rgba(0, 0, 0, 0.85), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        chassis: '0 25px 50px -12px rgba(0, 0, 0, 0.85), inset 0 1px 0 0 rgba(255, 255, 255, 0.18)',
        wing: '0 24px 48px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        component: '0 14px 30px -8px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};