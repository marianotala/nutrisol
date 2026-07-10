import type { MetadataRoute } from 'next';
import { site, locations } from '@/lib/site';

/**
 * Sitemap dinámico. Incluye las rutas actualmente publicadas.
 * Al agregar nuevas páginas, añádelas a `staticRoutes`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/calculadora-de-macros', priority: 0.9, freq: 'monthly' },
    { path: '/ubicaciones', priority: 0.8, freq: 'monthly' },
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${site.url}/ubicaciones/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...locationRoutes];
}
