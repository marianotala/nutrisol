import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Figure } from '@/components/ui/Figure';
import { ArrowRightIcon } from '@/components/ui/icons';
import { locations } from '@/lib/site';

export function LocationsPreview() {
  return (
    <Section id="ubicaciones" className="bg-ivory">
      <SectionHeading
        eyebrow="Ubicaciones"
        title="Dos consultorios en la Ciudad de México"
        description="Encuéntrame en Interlomas y Polanco. Elige el consultorio más cercano y agenda tu consulta presencial."
        align="center"
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            href={`/ubicaciones/${loc.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-espresso/10 bg-linen/40 transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-card"
          >
            <Figure
              alt={`Consultorio de nutrición en ${loc.neighborhood}`}
              aspect="aspect-[16/10]"
              placeholderLabel={`Consultorio ${loc.neighborhood}`}
              className="rounded-none"
            />
            <div className="p-7">
              <h3 className="text-h3 text-espresso">{loc.neighborhood}</h3>
              <p className="mt-2 text-sm text-taupe">{loc.addressLine}</p>
              <p className="mt-1 text-sm text-taupe">
                {loc.city}, {loc.state}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clay">
                Ver detalles y mapa
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
