import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/icons';

const sample = [
  { label: 'Proteína', value: '150 g', color: 'bg-clay' },
  { label: 'Carbohidratos', value: '210 g', color: 'bg-gold' },
  { label: 'Grasas', value: '65 g', color: 'bg-sage' },
];

export function MacrosTeaser() {
  return (
    <Section className="bg-espresso text-ivory">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            <span className="h-px w-6 bg-gold-light" />
            Herramienta gratuita
          </span>
          <h2 className="mt-6 text-h2">
            Calcula tus macros en menos de un minuto
          </h2>
          <p className="mt-5 text-lead text-ivory/70">
            Descubre una estimación de tus calorías diarias y el reparto de
            proteína, carbohidratos y grasa según tu objetivo. Sin registro, sin
            fricción — directo al resultado.
          </p>
          <div className="mt-9">
            <Button
              href="/calculadora-de-macros"
              size="lg"
              className="bg-ivory text-espresso hover:bg-linen hover:text-espresso"
            >
              Usar la calculadora
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ivory/50">
            Es una estimación general con fines informativos y no sustituye una
            valoración profesional personalizada.
          </p>
        </div>

        {/* Mockup del resultado */}
        <div className="rounded-3xl bg-ivory p-8 text-espresso shadow-card">
          <p className="text-sm font-medium text-taupe">Requerimiento diario estimado</p>
          <p className="mt-2 font-serif text-5xl font-semibold text-espresso">
            2,120
            <span className="ml-2 text-lg font-sans font-medium text-taupe">
              kcal
            </span>
          </p>

          <div className="mt-8 space-y-5">
            {sample.map((macro) => (
              <div key={macro.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-espresso">
                    {macro.label}
                  </span>
                  <span className="font-semibold text-espresso">
                    {macro.value}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-sand">
                  <div
                    className={`h-full rounded-full ${macro.color}`}
                    style={{
                      width:
                        macro.label === 'Proteína'
                          ? '70%'
                          : macro.label === 'Carbohidratos'
                            ? '90%'
                            : '45%',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-xl bg-linen px-4 py-3 text-xs text-taupe">
            Ejemplo ilustrativo. Tu resultado dependerá de tus datos.
          </p>
        </div>
      </div>
    </Section>
  );
}
