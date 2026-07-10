import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/ui/PageHero';
import { Figure } from '@/components/ui/Figure';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/icons';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { site, locations } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Ubicaciones — consultorios en Interlomas y Polanco',
  description:
    'Consulta de nutrición clínica y wellness en la Ciudad de México. Encuentra a la nutrióloga en sus consultorios de Interlomas y Polanco: dirección, horarios y mapa.',
  alternates: { canonical: '/ubicaciones' },
};

export default function UbicacionesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Ubicaciones', path: '/ubicaciones' },
        ])}
      />

      <PageHero
        eyebrow="Ubicaciones"
        title="Dos consultorios en la Ciudad de México"
        description="Atención presencial en Interlomas y Polanco. Elige el consultorio que más te convenga y agenda tu consulta."
      />

      <Section className="pt-4">
        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <article
              key={loc.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-espresso/10 bg-ivory shadow-soft"
            >
              <Link href={`/ubicaciones/${loc.slug}`} className="group block">
                <Figure
                  alt={`Consultorio de nutrición en ${loc.neighborhood}`}
                  aspect="aspect-[16/10]"
                  placeholderLabel={`Consultorio ${loc.neighborhood}`}
                  className="rounded-none"
                />
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="text-h3 text-espresso">{loc.neighborhood}</h2>
                <p className="mt-2 text-sm text-taupe">
                  {loc.addressLine} · {loc.city}, {loc.state}
                </p>

                <dl className="mt-5 space-y-1.5 text-sm">
                  {loc.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <dt className="text-taupe">{h.day}</dt>
                      <dd className="font-medium text-espresso">{h.time}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-taupe">
                  {loc.blurb}
                </p>

                <div className="mt-6">
                  <Button href={`/ubicaciones/${loc.slug}`} variant="secondary">
                    Ver detalles y mapa
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Container className="pb-section">
        <div className="rounded-3xl bg-clay px-8 py-12 text-center text-ivory">
          <h2 className="text-h2">¿No sabes cuál te queda mejor?</h2>
          <p className="mx-auto mt-3 max-w-lg text-ivory/85">
            Escríbeme y con gusto te oriento sobre el consultorio y el horario
            que mejor se adapten a ti.
          </p>
          <div className="mt-7">
            <Button href={site.booking.url} variant="light">
              {site.booking.label}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
