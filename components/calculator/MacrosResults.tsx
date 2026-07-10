import { Button } from '@/components/ui/Button';
import { ArrowRightIcon, LeafIcon } from '@/components/ui/icons';
import { site, whatsappLink } from '@/lib/site';
import type { Goal, MacroBreakdown, MacrosResult } from '@/lib/macros';

const goalLabel: Record<Goal, string> = {
  deficit: 'para bajar de peso',
  mantenimiento: 'para mantenerte',
  superavit: 'para ganar músculo',
};

const macroMeta = [
  { key: 'protein', label: 'Proteína', color: 'bg-clay', track: 'bg-clay/15' },
  { key: 'carbs', label: 'Carbohidratos', color: 'bg-gold', track: 'bg-gold/15' },
  { key: 'fat', label: 'Grasas', color: 'bg-sage', track: 'bg-sage/20' },
] as const;

/** Estado vacío mostrado antes de calcular. */
function EmptyState() {
  return (
    <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-3xl border border-dashed border-espresso/20 bg-linen/40 p-10 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-clay/10 text-clay">
        <LeafIcon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-h3 text-espresso">Tu resultado aparecerá aquí</h3>
      <p className="mt-2 max-w-xs text-sm text-taupe">
        Completa tus datos y presiona «Calcular mis macros» para ver tu
        estimación diaria de calorías y macronutrientes.
      </p>
    </div>
  );
}

function MacroRow({
  label,
  color,
  track,
  data,
}: {
  label: string;
  color: string;
  track: string;
  data: MacroBreakdown;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-espresso">{label}</span>
        <span className="text-sm text-taupe">
          <span className="font-semibold text-espresso">{data.grams} g</span>
          {' · '}
          {data.percent}%
        </span>
      </div>
      <div className={`mt-2 h-2.5 overflow-hidden rounded-full ${track}`}>
        <div
          className={`h-full rounded-full ${color} transition-[width] duration-700 ease-out-soft`}
          style={{ width: `${data.percent}%` }}
        />
      </div>
    </div>
  );
}

export function MacrosResults({
  result,
  goal,
}: {
  result: MacrosResult | null;
  goal: Goal;
}) {
  if (!result) return <EmptyState />;

  return (
    <div className="animate-fade-up rounded-3xl bg-espresso p-6 text-ivory shadow-card sm:p-8">
      {/* Calorías objetivo */}
      <p className="text-sm font-medium text-ivory/60">
        Tu requerimiento diario estimado {goalLabel[goal]}
      </p>
      <p className="mt-2 font-serif text-5xl font-semibold sm:text-6xl">
        {result.calories.toLocaleString('es-MX')}
        <span className="ml-2 font-sans text-lg font-medium text-ivory/60">
          kcal / día
        </span>
      </p>

      {/* Macros */}
      <div className="mt-8 space-y-5 rounded-2xl bg-ivory/5 p-5">
        {macroMeta.map((m) => (
          <MacroRow
            key={m.key}
            label={m.label}
            color={m.color}
            track={m.track}
            data={result[m.key]}
          />
        ))}
      </div>

      {/* Referencias */}
      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-xl bg-ivory/5 px-4 py-3">
          <dt className="text-ivory/60">Metabolismo basal</dt>
          <dd className="mt-1 font-semibold">
            {result.bmr.toLocaleString('es-MX')} kcal
          </dd>
        </div>
        <div className="rounded-xl bg-ivory/5 px-4 py-3">
          <dt className="text-ivory/60">Mantenimiento</dt>
          <dd className="mt-1 font-semibold">
            {result.maintenance.toLocaleString('es-MX')} kcal
          </dd>
        </div>
      </dl>

      {/* CTA fuerte */}
      <div className="mt-8 rounded-2xl bg-clay p-6 text-center">
        <h3 className="text-h3">¿Y ahora qué hago con estos números?</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ivory/85">
          Un plan real considera tu historia clínica, tus gustos y tu estilo de
          vida. Agenda una consulta y lo diseñamos juntos.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={site.booking.url} variant="light">
            {site.booking.label}
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button
            href={whatsappLink(
              'Hola, acabo de usar la calculadora de macros y me gustaría agendar una consulta 🌿',
            )}
            variant="outlineLight"
          >
            WhatsApp
          </Button>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-6 text-xs leading-relaxed text-ivory/50">
        <strong className="font-semibold text-ivory/70">Importante:</strong>{' '}
        este cálculo es una estimación general con fines informativos, basada en
        la fórmula Mifflin-St Jeor. No sustituye una valoración profesional
        personalizada ni un diagnóstico médico o nutricional.
      </p>
    </div>
  );
}
