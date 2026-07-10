import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeading } from '@/components/ui/Section';
import { PageHero } from '@/components/ui/PageHero';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon, WhatsAppIcon } from '@/components/ui/icons';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { site, whatsappLink } from '@/lib/site';
import {
  services,
  focusAreas,
  processSteps,
} from '@/lib/services';

export const metadata: Metadata = {
  title: 'Servicios — consultas y planes de nutrición',
  description:
    'Consulta inicial, seguimiento y planes personalizados de nutrición clínica y wellness en CDMX. Descubre qué incluye cada servicio y agenda tu cita.',
  alternates: { canonical: '/servicios' },
};

// ItemList de servicios para SEO.
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.name,
      description: s.description,
      serviceType: 'Consulta de nutrición',
      provider: { '@type': 'MedicalBusiness', name: site.name },
      areaServed: 'Ciudad de México',
      url: `${site.url}/servicios#${s.slug}`,
    },
  })),
};

export default function ServiciosPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/servicios' },
        ])}
      />

      <PageHero
        eyebrow="Servicios"
        title="Consultas pensadas para tu momento"
        description="Cada tipo de sesión tiene un propósito claro. Ya sea que estés empezando o buscando continuidad, elegimos juntos el camino que mejor se adapta a ti."
      />

      {/* Servicios detallados */}
      <Section className="pt-4">
        <div className="space-y-6">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-espresso/10 bg-ivory shadow-soft"
            >
              <div className="grid gap-0 md:grid-cols-[1.4fr_1fr]">
                {/* Contenido */}
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-clay/10 font-serif text-sm font-semibold text-clay">
                      {index + 1}
                    </span>
                    <span className="eyebrow text-gold">
                      {service.highlight}
                    </span>
                  </div>

                  <h2 className="mt-5 text-h2 text-espresso">
                    {service.name}
                  </h2>
                  <p className="mt-1 text-lead text-taupe">
                    {service.tagline}
                  </p>
                  <p className="mt-5 max-w-prose leading-relaxed text-taupe">
                    {service.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-linen/60 p-5">
                    <p className="text-sm font-semibold text-espresso">
                      ¿Para quién es?
                    </p>
                    <p className="mt-1 text-sm text-taupe">{service.forWho}</p>
                  </div>
                </div>

                {/* Detalle / incluye */}
                <div className="border-t border-espresso/10 bg-linen/40 p-8 sm:p-10 md:border-l md:border-t-0">
                  <dl className="flex flex-wrap gap-x-8 gap-y-3">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-taupe">
                        Duración
                      </dt>
                      <dd className="mt-0.5 font-semibold text-espresso">
                        {service.duration}
                      </dd>
                    </div>
                    {service.price && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-taupe">
                          Inversión
                        </dt>
                        <dd className="mt-0.5 font-semibold text-espresso">
                          {service.price}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <p className="mt-6 text-sm font-semibold text-espresso">
                    Incluye
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-taupe">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 text-clay"
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Button href={site.booking.url} className="w-full">
                      {site.booking.label}
                      <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nota de precios */}
        <p className="mt-6 text-center text-xs text-taupe">
          Los montos son de referencia y pueden variar según el consultorio y
          el tipo de programa. Confirma el costo al agendar.
        </p>
      </Section>

      {/* Áreas de enfoque */}
      <Section className="bg-linen/50">
        <SectionHeading
          eyebrow="Áreas de enfoque"
          title="En qué te puedo acompañar"
          description="Diseño cada plan según tu objetivo particular, siempre con un enfoque clínico y basado en evidencia."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-3xl border border-espresso/10 bg-ivory p-7"
            >
              <h3 className="text-h3 text-espresso">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Proceso */}
      <Section>
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Tu proceso, paso a paso"
          align="center"
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="font-serif text-5xl font-semibold text-clay/25">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-h3 text-espresso">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <Container className="pb-section">
        <div className="rounded-3xl bg-espresso px-8 py-14 text-center text-ivory sm:px-16">
          <h2 className="text-h2">¿Lista o listo para empezar?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-ivory/75">
            Agenda tu consulta inicial y demos el primer paso hacia tus
            objetivos, con un plan hecho para ti.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={site.booking.url} size="lg" variant="light">
              {site.booking.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button
              href={whatsappLink()}
              size="lg"
              variant="outlineLight"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
