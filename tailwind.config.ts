import type { Config } from 'tailwindcss';

/**
 * Sistema de diseño — "Wellness moderno" (blanco + azul verdoso)
 * -------------------------------------------------------------
 * Paleta limpia y sofisticada: base blanca, acento teal (azul
 * verdoso) como color principal, un aqua/menta como acento
 * secundario y un azul-teal suave de apoyo. Mucho espacio en blanco.
 *
 * NOTA DE MANTENIMIENTO: los nombres de los tokens son "slots"
 * semánticos por rol, no por color literal:
 *   ivory  → fondo base (blanco)      linen → superficie sutil
 *   sand   → bordes / placeholder     espresso → texto/oscuro (tinta)
 *   taupe  → texto secundario         clay  → ACENTO PRIMARIO (teal)
 *   gold   → acento secundario (aqua) sage  → acento de apoyo (azul-teal)
 * Los colores se exponen también como variables CSS en globals.css.
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
        // Bases neutras (blanco + tinte teal muy sutil)
        ivory: '#FBFDFD', // fondo base — se lee blanco
        linen: '#EFF6F5', // superficie sutil / secciones alternas
        sand: '#D8E7E5', // bordes / placeholder
        // Texto (tinta teal-carbón)
        espresso: '#123B37', // texto principal / secciones oscuras
        taupe: '#5E736F', // texto secundario
        // Acento primario (teal — azul verdoso)
        clay: {
          DEFAULT: '#0D7F74',
          light: '#3BA79B',
          dark: '#0A5D55',
        },
        // Acento secundario (aqua / menta)
        gold: {
          DEFAULT: '#4FB0A4',
          light: '#86C9BF',
        },
        // Acento de apoyo (azul-teal suave)
        sage: {
          DEFAULT: '#6FA8B5',
          light: '#9CC6CF',
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
