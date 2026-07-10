import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ApproachSection } from '@/components/home/ApproachSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { MacrosTeaser } from '@/components/home/MacrosTeaser';
import { LocationsPreview } from '@/components/home/LocationsPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCta } from '@/components/home/FinalCta';
import { JsonLd } from '@/components/seo/JsonLd';
import { site, locations } from '@/lib/site';

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: '/' },
};

// Datos estructurados: negocio médico con dos sedes en CDMX (SEO local).
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  medicalSpecialty: 'Nutrition',
  priceRange: '$$',
  areaServed: 'Ciudad de México',
  location: locations.map((loc) => ({
    '@type': 'MedicalClinic',
    name: loc.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.addressLine,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.postalCode,
      addressCountry: loc.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.geo.lat,
      longitude: loc.geo.lng,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema} />
      <Hero />
      <TrustStrip />
      <ApproachSection />
      <ServicesPreview />
      <MacrosTeaser />
      <LocationsPreview />
      <Testimonials />
      <FinalCta />
    </>
  );
}
