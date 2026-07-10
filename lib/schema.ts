import { site, type Location } from '@/lib/site';

/**
 * Construye el JSON-LD schema.org para una ubicación (consultorio).
 * Combina MedicalBusiness + LocalBusiness con dirección, geo,
 * horarios y datos de contacto — base para el SEO local.
 */
export function locationSchema(loc: Location) {
  const url = `${site.url}/ubicaciones/${loc.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    '@id': url,
    name: `${site.name} — ${loc.neighborhood}`,
    description: loc.blurb,
    url,
    telephone: loc.phone,
    email: site.email,
    priceRange: '$$',
    medicalSpecialty: 'Nutrition',
    image: `${site.url}/og/${loc.slug}.jpg`,
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
    hasMap: loc.mapLink,
    openingHoursSpecification: loc.openingHours.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    areaServed: loc.nearby,
    sameAs: [
      site.social.instagram,
      site.social.facebook,
      site.social.tiktok,
    ],
  };
}

/** Breadcrumb JSON-LD para páginas internas. */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
