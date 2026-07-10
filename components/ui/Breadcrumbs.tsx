import Link from 'next/link';

type Crumb = { name: string; path: string };

/** Migajas de navegación accesibles. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-taupe">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-espresso">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="transition-colors hover:text-clay"
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-taupe/50">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
