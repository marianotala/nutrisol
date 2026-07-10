import { Container } from '@/components/ui/Container';
import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/** Encabezado estándar para páginas internas. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-linen to-ivory pt-14 pb-10 md:pt-20 md:pb-14">
      <Container className="max-w-3xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-4 text-h1 text-espresso">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lead text-taupe">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
