/**
 * Une clases condicionales y descarta valores falsy.
 * Utilidad ligera (sin dependencias) al estilo de `clsx`.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
