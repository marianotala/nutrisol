import { Section, SectionHeading } from '@/components/ui/Section';

const testimonials = [
  {
    quote:
      'Por primera vez sigo un plan sin sentir que estoy a dieta. Bajé de peso, pero sobre todo cambié mi relación con la comida.',
    name: 'Andrea G.',
    detail: 'Paciente · Polanco',
  },
  {
    quote:
      'Me explicó todo con claridad y ajustó el plan a mis viajes de trabajo. El seguimiento hace toda la diferencia.',
    name: 'Roberto M.',
    detail: 'Paciente · Interlomas',
  },
  {
    quote:
      'Profesional, cálida y muy preparada. Mis niveles de energía y mis análisis mejoraron en pocos meses.',
    name: 'Daniela V.',
    detail: 'Paciente · Polanco',
  },
];

export function Testimonials() {
  return (
    <Section className="bg-linen/50">
      <SectionHeading
        eyebrow="Testimonios"
        title="Historias de quienes ya dieron el paso"
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl bg-ivory p-8 shadow-soft"
          >
            <div aria-hidden="true" className="text-gold text-sm tracking-widest">
              ★★★★★
            </div>
            <blockquote className="mt-4 flex-1 text-espresso/90">
              <p className="leading-relaxed">“{t.quote}”</p>
            </blockquote>
            <figcaption className="mt-6 border-t border-espresso/10 pt-4">
              <span className="block text-sm font-semibold text-espresso">
                {t.name}
              </span>
              <span className="mt-0.5 block text-xs text-taupe">{t.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
