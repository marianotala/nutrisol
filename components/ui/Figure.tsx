import Image from 'next/image';
import { cn } from '@/lib/cn';
import { LeafIcon } from '@/components/ui/icons';

type FigureProps = {
  /** Ruta de la imagen real. Si se omite, se muestra un placeholder. */
  src?: string;
  alt: string;
  /** Relación de aspecto (Tailwind aspect-*). Ej: 'aspect-[4/5]'. */
  aspect?: string;
  className?: string;
  /** Marca la imagen como prioritaria (LCP) para Core Web Vitals. */
  priority?: boolean;
  sizes?: string;
  /** Etiqueta descriptiva mostrada en el placeholder. */
  placeholderLabel?: string;
  fill?: boolean;
};

/**
 * Contenedor de imagen. Cuando `src` existe usa next/image (optimizada);
 * mientras el cliente sube su fotografía real, muestra un placeholder
 * cálido con la relación de aspecto correcta (cero layout shift).
 */
export function Figure({
  src,
  alt,
  aspect = 'aspect-[4/3]',
  className,
  priority,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  placeholderLabel,
  fill = false,
}: FigureProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl bg-sand',
        !fill && aspect,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-sand via-linen to-clay-light/30 text-taupe"
          role="img"
          aria-label={alt}
        >
          <LeafIcon className="h-10 w-10 text-clay/50" />
          <span className="px-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-taupe/70">
            {placeholderLabel ?? 'Fotografía próximamente'}
          </span>
        </div>
      )}
    </div>
  );
}
