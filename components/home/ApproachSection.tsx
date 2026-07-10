import { Section } from '@/components/ui/Section';
import { Figure } from '@/components/ui/Figure';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/icons';

const pillars = [
  {
    title: 'Sin dietas extremas',
    body: 'Construimos hábitos sostenibles que se adaptan a tu vida real, tu agenda y tus gustos — no al revés.',
  },
  {
    title: 'Basado en evidencia',
    body: 'Cada recomendación parte de la ciencia de la nutrición actual y de tu historia clínica, no de modas.',
  },
  {
    title: 'Acompañamiento cercano',
    body: 'No te dejo con un PDF. Ajustamos juntos, resolvemos dudas y celebramos avances a lo largo del proceso.',
  },
];

export function ApproachSection() {
  return (
    <Section id="filosofia" className="bg-ivory">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Figure
          alt="Alimentos frescos y de temporada sobre una mesa"
          aspect="aspect-[5/6]"
          placeholderLabel="Filosofía de trabajo"
        />

        <div>
          <span className="eyebrow">Mi filosofía</span>
          <h2 className="mt-4 text-h2 text-espresso">
            La salud no es un castigo. Es una forma de cuidarte.
          </h2>
          <p className="mt-5 text-lead text-taupe">
            Creo en una nutrición amable y realista: la que respeta tu cultura,
            tu ritmo y tu relación con la comida. Mi objetivo es que logres
            resultados que puedas mantener toda la vida.
          </p>

          <ul className="mt-8 space-y-6">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="flex gap-4">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-clay/10 text-sm font-semibold text-clay">
                  ✓
                </span>
                <div>
                  <h3 className="text-base font-semibold text-espresso">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-taupe">
                    {pillar.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button href="/sobre-mi" variant="ghost">
              Conoce mi historia
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
