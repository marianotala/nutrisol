import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/icons';
import { site, whatsappLink } from '@/lib/site';

export function FinalCta() {
  return (
    <section className="py-section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-clay px-8 py-16 text-center text-ivory sm:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-clay-light/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-espresso/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-h2">
              Da el primer paso hacia tu mejor versión
            </h2>
            <p className="mt-5 text-lead text-ivory/85">
              Agenda tu consulta hoy y empecemos a construir un plan que sí
              puedas mantener. Atención presencial en Interlomas y Polanco.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={site.booking.url}
                size="lg"
                className="bg-ivory text-espresso hover:bg-linen hover:text-espresso"
              >
                {site.booking.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button
                href={whatsappLink()}
                size="lg"
                variant="secondary"
                className="text-ivory ring-ivory/40 hover:text-ivory hover:ring-ivory"
              >
                Escríbeme por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
