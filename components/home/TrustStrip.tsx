import { Container } from '@/components/ui/Container';

const items = [
  'Cédula profesional verificada',
  'Enfoque basado en evidencia',
  'Planes 100% personalizados',
  'Seguimiento continuo',
];

/** Franja de confianza / credenciales bajo el hero. */
export function TrustStrip() {
  return (
    <div className="border-y border-espresso/10 bg-linen/60">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-espresso/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
