import type { Config } from 'tailwindcss';

/**
 * Sistema de diseño — "Wellness moderno"
 * -------------------------------------------------------------
 * Paleta cálida y sofisticada: bases de lino/marfil, acento
 * terracota/arcilla, dorado sutil y un salvia apagado usado con
 * moderación. Intencionalmente NO clínico-frío ni verde-yoga.
 * Los colores se exponen también como variables CSS en globals.css
 * para poder usarlos fuera de utilidades (p. ej. gradientes SVG).
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bases neutras cálidas
        ivory: '#FAF6F0',
        linen: '#F2EBDF',
        sand: '#E7DBC9',
        // Texto
        espresso: '#33291F',
        taupe: '#7A6E60',
        // Acento primario (terracota / arcilla)
        clay: {
          DEFAULT: '#B8674A',
          light: '#CE8064',
          dark: '#994F37',
        },
        // Acento secundario (dorado apagado)
        gold: {
          DEFAULT: '#C6A15B',
          light: '#D9BC82',
        },
        // Acento de apoyo (salvia — uso mínimo)
        sage: {
          DEFAULT: '#9CA891',
          light: '#BEC7B4',
        },
      },
      fontFamily: {
        // Serif de display para títulos (elegante, editorial)
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Sans limpio para cuerpo / UI
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala tipográfica fluida (mobile-first)
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.6rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.3rem, 2.5vw, 1.75rem)', { lineHeight: '1.25' }],
        'lead': ['clamp(1.1rem, 1.6vw, 1.35rem)', { lineHeight: '1.6' }],
      },
      maxWidth: {
        content: '1200px',
        prose: '68ch',
      },
      spacing: {
        section: 'clamp(4rem, 9vw, 8rem)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 20px -8px rgba(51, 41, 31, 0.15)',
        card: '0 12px 40px -18px rgba(51, 41, 31, 0.25)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
