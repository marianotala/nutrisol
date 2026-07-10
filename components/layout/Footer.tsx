import Link from 'next/link';
import { site, mainNav, locations, whatsappLink } from '@/lib/site';
import { Logo } from '@/components/layout/Logo';
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  WhatsAppIcon,
} from '@/components/ui/icons';

const socials = [
  { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: site.social.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: site.social.tiktok, label: 'TikTok', Icon: TikTokIcon },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-espresso/10 bg-linen">
      <div className="container-base grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-taupe">
            {site.tagline}. Acompañamiento cercano y basado en evidencia para
            cuidar tu salud sin dietas extremas.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full bg-ivory text-espresso transition-colors hover:bg-clay hover:text-ivory"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <nav aria-label="Pie de página">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-espresso">
            Navegación
          </h3>
          <ul className="mt-5 space-y-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-taupe transition-colors hover:text-clay"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ubicaciones */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-espresso">
            Consultorios
          </h3>
          <ul className="mt-5 space-y-5">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/ubicaciones/${loc.slug}`}
                  className="group block"
                >
                  <span className="text-sm font-semibold text-espresso transition-colors group-hover:text-clay">
                    {loc.neighborhood}
                  </span>
                  <span className="mt-1 block text-sm text-taupe">
                    {loc.addressLine}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-espresso">
            Contacto
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-taupe">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-clay"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="transition-colors hover:text-clay"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-espresso transition-colors hover:text-clay"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escríbeme por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-espresso/10">
        <div className="container-base flex flex-col items-start justify-between gap-3 py-6 text-xs text-taupe sm:flex-row sm:items-center">
          <p>
            © {year} {site.name} · {site.practitioner}. Todos los derechos
            reservados.
          </p>
          <p className="max-w-md text-taupe/80">
            La información de este sitio es orientativa y no sustituye una
            consulta profesional personalizada.
          </p>
        </div>
      </div>
    </footer>
  );
}
