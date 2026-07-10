import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import { ArrowRightIcon } from '@/components/ui/icons';
import { site, whatsappLink } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo suave con degradado cálido */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-linen via-ivory to-ivory"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-clay-light/20 blur-3xl"
      />

      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-px w-6 bg-clay" />
            Nutrición clínica · Wellness · CDMX
          </span>

          <h1 className="mt-6 text-display text-espresso">
            Come mejor, vive con más energía.
          </h1>

          <p className="mt-6 max-w-xl text-lead text-taupe">
            Planes de nutrición personalizados, sin dietas extremas ni culpa.
            Acompañamiento cercano y basado en evidencia para profesionales de
            la Ciudad de México que quieren sentirse — y verse — mejor.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.booking.url} size="lg">
              {site.booking.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href={whatsappLink()} variant="secondary" size="lg">
              Hablar por WhatsApp
            </Button>
          </div>

          {/* Prueba social rápida */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-espresso/10 pt-8">
            <div>
              <dt className="text-2xl font-semibold text-espresso font-serif">
                +10
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-taupe">
                años de experiencia
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-espresso font-serif">
                +1,500
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-taupe">
                pacientes acompañados
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-espresso font-serif">
                2
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-taupe">
                consultorios en CDMX
              </dd>
            </div>
          </dl>
        </div>

        {/* Imagen protagonista */}
        <div className="relative">
          <Figure
            alt={`${site.practitioner}, nutrióloga clínica en CDMX`}
            aspect="aspect-[4/5]"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            placeholderLabel="Retrato de la nutrióloga"
            className="shadow-card"
          />
          {/* Tarjeta flotante de credencial */}
          <div className="absolute -bottom-5 -left-5 hidden max-w-[15rem] rounded-2xl bg-ivory/95 p-5 shadow-card backdrop-blur sm:block">
            <p className="font-serif text-lg text-espresso">
              {site.practitioner}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-taupe">
              Nutrióloga clínica certificada · Especialista en wellness
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
