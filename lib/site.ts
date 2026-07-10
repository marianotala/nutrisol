/**
 * Configuración central del sitio.
 * Fuente única de verdad para marca, navegación, contacto y
 * ubicaciones. Los datos son placeholder realistas — reemplazar
 * con la información real de la clínica antes de producción.
 */

export const site = {
  name: 'Nutrisol',
  // Nombre profesional de la nutrióloga (placeholder)
  practitioner: 'Dra. Valeria Ríos',
  credentials: 'Nutrióloga clínica certificada · Cédula Prof. 0000000',
  tagline: 'Nutrición clínica y wellness personalizado en Ciudad de México',
  description:
    'Consulta de nutrición clínica con enfoque en wellness para profesionales de CDMX. Planes personalizados, acompañamiento cercano y resultados sostenibles. Consultorios en Interlomas y Polanco.',
  // Dominio de producción (actualizar al desplegar en Vercel)
  url: 'https://nutrisol.mx',
  locale: 'es-MX',
  email: 'hola@nutrisol.mx',
  phone: '+52 55 1234 5678',
  // Número en formato E.164 sin signos, para enlaces de WhatsApp
  whatsapp: '525512345678',
  whatsappMessage:
    'Hola, me gustaría agendar una consulta de nutrición 🌿',
  booking: {
    // Reemplazar por el enlace real (Calendly, Doctoralia, etc.)
    url: '#agendar',
    label: 'Agendar consulta',
  },
  social: {
    instagram: 'https://instagram.com/nutrisol',
    facebook: 'https://facebook.com/nutrisol',
    tiktok: 'https://tiktok.com/@nutrisol',
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Ubicaciones', href: '/ubicaciones' },
  { label: 'Calculadora', href: '/calculadora-de-macros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export type Location = {
  slug: string;
  name: string;
  neighborhood: string;
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  geo: { lat: number; lng: number };
  phone: string;
  hours: { day: string; time: string }[];
  // URL de embed de Google Maps (placeholder — reemplazar)
  mapEmbedUrl: string;
  mapLink: string;
};

export const locations: Location[] = [
  {
    slug: 'interlomas',
    name: 'Consultorio Interlomas',
    neighborhood: 'Interlomas',
    addressLine: 'Blvd. Interlomas 5, Piso 3, Consultorio 302',
    city: 'Huixquilucan',
    state: 'Estado de México',
    postalCode: '52760',
    country: 'MX',
    geo: { lat: 19.3907, lng: -99.2836 },
    phone: '+52 55 1234 5678',
    hours: [
      { day: 'Lunes a Viernes', time: '9:00 – 19:00' },
      { day: 'Sábado', time: '9:00 – 14:00' },
      { day: 'Domingo', time: 'Cerrado' },
    ],
    mapEmbedUrl:
      'https://www.google.com/maps?q=Interlomas,Huixquilucan&output=embed',
    mapLink: 'https://maps.google.com/?q=Interlomas+Huixquilucan',
  },
  {
    slug: 'polanco',
    name: 'Consultorio Polanco',
    neighborhood: 'Polanco',
    addressLine: 'Av. Presidente Masaryk 111, Piso 2, Consultorio 205',
    city: 'Miguel Hidalgo',
    state: 'Ciudad de México',
    postalCode: '11560',
    country: 'MX',
    geo: { lat: 19.4324, lng: -99.1962 },
    phone: '+52 55 1234 5678',
    hours: [
      { day: 'Lunes a Viernes', time: '10:00 – 20:00' },
      { day: 'Sábado', time: '10:00 – 15:00' },
      { day: 'Domingo', time: 'Cerrado' },
    ],
    mapEmbedUrl:
      'https://www.google.com/maps?q=Polanco,CDMX&output=embed',
    mapLink: 'https://maps.google.com/?q=Polanco+CDMX',
  },
];

/** Construye un enlace de WhatsApp con mensaje pre-cargado. */
export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
