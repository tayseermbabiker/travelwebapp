import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      fontSize: {
        // Body text (16px base)
        base: ['16px', { lineHeight: '1.6', letterSpacing: '0' }],

        // Info card text
        'card-mobile': ['13px', { lineHeight: '1.5', letterSpacing: '0' }],
        'card-desktop': ['14px', { lineHeight: '1.5', letterSpacing: '0' }],

        // Section headings (h2)
        '2xl': ['28px', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        '3xl': ['32px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      spacing: {
        // Info card heights
        '18': '72px',  // Mobile card height (adjusted from 75px for better spacing)
        '20': '80px',  // Desktop card height
      },
    },
  },
  plugins: [],
};

export default config;
