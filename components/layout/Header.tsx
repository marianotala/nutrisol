'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { site, mainNav, whatsappLink } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/layout/Logo';
import { MenuIcon, CloseIcon } from '@/components/ui/icons';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sombra / fondo sólido al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra el menú móvil al navegar
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea el scroll del body con el menú abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'bg-ivory/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent',
      )}
    >
      <div className="container-base flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} — inicio`} className="shrink-0">
          <Logo />
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                isActive(item.href)
                  ? 'text-clay'
                  : 'text-espresso/80 hover:text-clay',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={whatsappLink()} variant="secondary" size="md">
            WhatsApp
          </Button>
          <Button href={site.booking.url} size="md">
            {site.booking.label}
          </Button>
        </div>

        {/* Botón de menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="lg:hidden -mr-2 p-2 text-espresso"
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden overflow-hidden border-t border-espresso/5 bg-ivory transition-[max-height] duration-300 ease-out-soft',
          open ? 'max-h-[80vh]' : 'max-h-0',
        )}
      >
        <nav
          className="container-base flex flex-col gap-1 py-4"
          aria-label="Móvil"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-xl px-3 py-3 text-base font-medium transition-colors',
                isActive(item.href)
                  ? 'bg-linen text-clay'
                  : 'text-espresso hover:bg-linen',
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <Button href={whatsappLink()} variant="secondary" size="lg">
              WhatsApp
            </Button>
            <Button href={site.booking.url} size="lg">
              {site.booking.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
