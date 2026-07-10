import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Figure } from '@/components/ui/Figure';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  ArrowRightIcon,
  WhatsAppIcon,
  LeafIcon,
} from '@/components/ui/icons';
import { locationSchema, breadcrumbSchema } from '@/lib/schema';
import { site, locations, getLocation, whatsappLink } from '@/lib/site';

type Params = { params: { slug: string } };

/** Pre-genera una página estática por consultorio. */
export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  const title = `Nutrióloga en ${loc.neighborhood} — ${loc.city}`;
  return {
    title,
    description: loc.blurb,
    alternates: { canonical: `/ubicaciones/${loc.slug}` },
    openGraph: {
      title: `${title} · ${site.name}`,
      description: loc.blurb,
      url: `${site.url}/ubicaciones/${loc.slug}`,
    },
  };
}

export default function LocationPage({ params }: Params) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const bookingMessage = `Hola, me gustaría agendar una consulta en el consultorio de ${loc.neighborhood} 🌿`;

  return (
    <>
      <JsonLd data={locationSchema(loc)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Ubicaciones', path: '/ubicaciones' },
          { name: loc.neighborhood, path: `/ubicaciones/${loc.slug}` },
        ])}
      />

      {/* Encabezado */}
      <section className="bg-gradient-to-b from-linen to-ivory pt-8 pb-10 md:pb-14">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Inicio', path: '/' },
              { name: 'Ubicaciones', path: '/ubicaciones' },
              { name: loc.neighborhood, path: `/ubicaciones/${loc.slug}` },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Consultorio</span>
            <h1 className="mt-4 text-h1 text-espresso">
              Nutrición en {loc.neighborhood}
            </h1>
            <p className="mt-5 text-lead text-taupe">{loc.blurb}</p>
          </div>
        </Container>
      </section>

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Info */}
          <div>
            <Figure
              alt={`Consultorio de ${site.practitioner} en ${loc.neighborhood}`}
              aspect="aspect-[16/10]"
              placeholderLabel={`Consultorio ${loc.neighborhood}`}
              priority
            />

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {/* Dirección */}
              <div className="rounded-2xl border border-espresso/10 bg-ivory p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-clay">
                  Dirección
                </h2>
                <p className="mt-3 text-espresso">{loc.addressLine}</p>
                <p className="text-taupe">
                  {loc.city}, {loc.state}, C.P. {loc.postalCode}
                </p>
                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clay hover:text-clay-dark"
                >
                  Cómo llegar
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>

              {/* Horarios */}
              <div className="rounded-2xl border border-espresso/10 bg-ivory p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-clay">
                  Horarios
                </h2>
                <dl className="mt-3 space-y-1.5 text-sm">
                  {loc.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <dt className="text-taupe">{h.day}</dt>
                      <dd className="font-medium text-espresso">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Zonas cercanas */}
            <div className="mt-6 rounded-2xl border border-espresso/10 bg-linen/50 p-6">
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-clay">
                <LeafIcon className="h-4 w-4" />
                Zonas cercanas
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {loc.nearby.map((zone) => (
                  <li
                    key={zone}
                    className="rounded-full bg-ivory px-3 py-1 text-sm text-espresso"
                  >
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contacto + agenda (sticky en escritorio) */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-espresso p-8 text-ivory shadow-card">
              <h2 className="text-h3">Agenda en {loc.neighborhood}</h2>
              <p className="mt-3 text-sm text-ivory/70">
                Reserva tu consulta presencial. Si tienes dudas sobre el
                horario o cómo llegar, escríbeme por WhatsApp.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href={site.booking.url} size="lg" variant="light">
                  {site.booking.label}
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Button
                  href={whatsappLink(bookingMessage)}
                  size="lg"
                  variant="outlineLight"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </Button>
                <a
                  href={`tel:${loc.phone.replace(/\s/g, '')}`}
                  className="mt-1 text-center text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  {loc.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Mapa */}
      <section className="pb-section">
        <Container>
          <h2 className="text-h3 text-espresso">Ubicación en el mapa</h2>
          <div className="mt-5 overflow-hidden rounded-3xl border border-espresso/10 shadow-soft">
            <iframe
              src={loc.mapEmbedUrl}
              title={`Mapa del consultorio en ${loc.neighborhood}`}
              className="h-[380px] w-full md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </>
  );
}
