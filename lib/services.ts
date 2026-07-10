/**
 * Datos de servicios / tipos de consulta.
 * Fuente única de verdad para el preview del home y la página
 * de servicios. Precios y duraciones son placeholder realistas —
 * ajustar a los valores reales de la clínica.
 */

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  /** Precio placeholder en MXN. Ajustar / eliminar según convenga. */
  price?: string;
  highlight: string;
  description: string;
  forWho: string;
  includes: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'consulta-inicial',
    name: 'Consulta inicial',
    tagline: 'El punto de partida de tu proceso',
    duration: '60–75 min',
    price: '$1,200 MXN',
    highlight: 'Ideal para empezar',
    description:
      'Una valoración completa para entender tu historia, tu estilo de vida y tus objetivos. Salimos de la sesión con un plan personalizado y accionable desde el primer día.',
    forWho:
      'Para quienes inician su proceso o quieren un diagnóstico nutricional profesional y un plan a la medida.',
    includes: [
      'Historia clínica y nutricional completa',
      'Evaluación de composición corporal',
      'Análisis de hábitos y estilo de vida',
      'Plan de alimentación personalizado',
      'Metas claras y medibles',
    ],
    featured: true,
  },
  {
    slug: 'consulta-seguimiento',
    name: 'Consulta de seguimiento',
    tagline: 'Donde ocurren los resultados',
    duration: '30–45 min',
    price: '$700 MXN',
    highlight: 'Ajuste continuo',
    description:
      'Revisamos avances, ajustamos el plan según tu progreso y resolvemos dudas. El acompañamiento constante es lo que convierte los cambios en hábitos duraderos.',
    forWho:
      'Para pacientes en proceso activo que buscan continuidad, ajustes y motivación sostenida.',
    includes: [
      'Revisión de avances y mediciones',
      'Ajuste del plan de alimentación',
      'Resolución de dudas y obstáculos',
      'Estrategias para mantener la constancia',
    ],
  },
  {
    slug: 'planes-personalizados',
    name: 'Planes personalizados',
    tagline: 'Programas diseñados a tu medida',
    duration: 'Programa',
    price: 'Desde $2,500 MXN',
    highlight: 'A tu medida',
    description:
      'Programas de nutrición clínica y wellness estructurados para un objetivo específico, con seguimiento cercano a lo largo de varias semanas.',
    forWho:
      'Para quienes buscan un acompañamiento integral y sostenido hacia una meta concreta.',
    includes: [
      'Valoración inicial completa',
      'Plan y material personalizado',
      'Consultas de seguimiento incluidas',
      'Acompañamiento entre sesiones',
      'Seguimiento de metas de largo plazo',
    ],
  },
];

/** Objetivos frecuentes que se atienden en consulta. */
export const focusAreas: { title: string; description: string }[] = [
  {
    title: 'Composición corporal',
    description:
      'Reducción de grasa, aumento de masa muscular y recomposición saludable.',
  },
  {
    title: 'Salud metabólica',
    description:
      'Colesterol, glucosa, resistencia a la insulina y presión arterial.',
  },
  {
    title: 'Nutrición deportiva',
    description:
      'Rendimiento, energía y recuperación para tu entrenamiento.',
  },
  {
    title: 'Bienestar digestivo',
    description:
      'Alimentación para mejorar la digestión y tu relación con la comida.',
  },
];

/** Pasos del proceso de acompañamiento. */
export const processSteps: { title: string; description: string }[] = [
  {
    title: 'Agenda tu cita',
    description:
      'Reserva en línea o por WhatsApp el consultorio y horario que más te convengan.',
  },
  {
    title: 'Valoración',
    description:
      'En la consulta inicial analizamos tu historia, hábitos y objetivos a fondo.',
  },
  {
    title: 'Tu plan',
    description:
      'Diseño un plan personalizado, realista y alineado con tu estilo de vida.',
  },
  {
    title: 'Seguimiento',
    description:
      'Ajustamos juntos en cada sesión para convertir los cambios en hábitos.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
