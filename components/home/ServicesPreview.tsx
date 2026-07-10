import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/icons';

const services = [
  {
    name: 'Consulta inicial',
    duration: '60–75 min',
    description:
      'Evaluación completa: historia clínica, composición corporal, hábitos y objetivos. Salimos con un plan personalizado desde el día uno.',
    highlight: 'Ideal para empezar',
  },
  {
    name: 'Consulta de seguimiento',
    duration: '30–45 min',
    description:
      'Revisamos avances, ajustamos el plan y resolvemos dudas. El acompañamiento constante es donde ocurren los resultados.',
    highlight: 'Ajuste continuo',
  },
  {
    name: 'Planes personalizados',
    duration: 'Programa',
    description:
      'Programas de nutrición clínica y wellness diseñados para tu objetivo: composición corporal, salud metabólica o rendimiento.',
    highlight: 'A tu medida',
  },
];

export function ServicesPreview() {
  return (
    <Section id="servicios" className="bg-linen/50">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Servicios"
          title="Consultas pensadas para tu momento"
          description="Cada tipo de sesión tiene un propósito claro. Elegimos juntos el camino que mejor se adapta a ti."
        />
        <Button href="/servicios" variant="secondary" className="shrink-0">
          Ver todos los servicios
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.name}
            className="group flex flex-col rounded-3xl border border-espresso/10 bg-ivory p-8 transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-clay/30 hover:shadow-card"
          >
            <span className="eyebrow text-gold">{service.highlight}</span>
            <h3 className="mt-4 text-h3 text-espresso">{service.name}</h3>
            <p className="mt-1 text-sm font-medium text-taupe">
              {service.duration}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-taupe">
              {service.description}
            </p>
            <Button
              href="/servicios"
              variant="ghost"
              className="mt-6 self-start px-0"
            >
              Más información
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}
