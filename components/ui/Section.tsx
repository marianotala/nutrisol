import { cn } from '@/lib/cn';
import { Container } from './Container';
import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Si es false, no envuelve el contenido en un Container. */
  contained?: boolean;
  children: ReactNode;
};

/** Bloque vertical de página con padding de sección consistente. */
export function Section({
  id,
  className,
  containerClassName,
  contained = true,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-section', className)}>
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

/** Encabezado de sección estandarizado (kicker + título + intro). */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-h2 text-espresso">{title}</h2>
      {description && (
        <p className="mt-4 text-lead text-taupe">{description}</p>
      )}
    </div>
  );
}
