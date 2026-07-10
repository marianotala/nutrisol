import { cn } from '@/lib/cn';
import { site } from '@/lib/site';
import { LeafIcon } from '@/components/ui/icons';

/** Logotipo de la marca: monograma + wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-clay text-ivory">
        <LeafIcon className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-tight text-espresso">
          {site.name}
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.22em] text-taupe">
          Nutrición · Wellness
        </span>
      </span>
    </span>
  );
}
