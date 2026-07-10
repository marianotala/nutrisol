import Link from 'next/link';
import { cn } from '@/lib/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'light'
  | 'outlineLight';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out-soft focus-visible:outline-2 disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-clay text-ivory shadow-soft hover:bg-clay-dark hover:shadow-card hover:-translate-y-0.5',
  secondary:
    'bg-transparent text-espresso ring-1 ring-inset ring-espresso/20 hover:ring-clay hover:text-clay',
  ghost: 'bg-transparent text-clay hover:text-clay-dark',
  // Sobre fondos oscuros: botón claro (blanco)
  light:
    'bg-ivory text-espresso shadow-soft hover:bg-linen hover:shadow-card hover:-translate-y-0.5',
  // Sobre fondos oscuros: botón con contorno claro
  outlineLight:
    'bg-transparent text-ivory ring-1 ring-inset ring-ivory/40 hover:ring-ivory',
};

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in props && props.href) {
    const { href, external } = props;
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
