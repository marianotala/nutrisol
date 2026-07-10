'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import {
  calculateMacros,
  limits,
  type ActivityLevel,
  type Goal,
  type MacrosResult,
  type Sex,
} from '@/lib/macros';
import {
  activityOptions,
  goalOptions,
  sexOptions,
} from '@/lib/macros-options';
import { MacrosResults } from '@/components/calculator/MacrosResults';

type FormState = {
  sex: Sex;
  age: string;
  weight: string;
  height: string;
  activity: ActivityLevel;
  goal: Goal;
};

const initialState: FormState = {
  sex: 'femenino',
  age: '',
  weight: '',
  height: '',
  activity: 'moderado',
  goal: 'deficit',
};

type Errors = Partial<Record<'age' | 'weight' | 'height', string>>;

function validate(state: FormState): Errors {
  const errors: Errors = {};
  const check = (
    key: 'age' | 'weight' | 'height',
    value: string,
    label: string,
    unit: string,
  ) => {
    const n = Number(value);
    const { min, max } = limits[key];
    if (value.trim() === '' || Number.isNaN(n)) {
      errors[key] = `Ingresa tu ${label}`;
    } else if (n < min || n > max) {
      errors[key] = `Debe estar entre ${min} y ${max} ${unit}`;
    }
  };
  check('age', state.age, 'edad', 'años');
  check('weight', state.weight, 'peso', 'kg');
  check('height', state.height, 'altura', 'cm');
  return errors;
}

export function MacrosCalculator() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<MacrosResult | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
    if (key in errors) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(state);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setResult(null);
      return;
    }
    setResult(
      calculateMacros({
        weight: Number(state.weight),
        height: Number(state.height),
        age: Number(state.age),
        sex: state.sex,
        activity: state.activity,
        goal: state.goal,
      }),
    );
    // Desplaza suavemente al resultado en móvil
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
      {/* Formulario */}
      <form
        onSubmit={onSubmit}
        noValidate
        className="rounded-3xl border border-espresso/10 bg-ivory p-6 shadow-soft sm:p-8"
      >
        {/* Sexo */}
        <Fieldset legend="Sexo biológico">
          <SegmentedControl
            name="sex"
            options={sexOptions}
            value={state.sex}
            onChange={(v) => update('sex', v as Sex)}
          />
        </Fieldset>

        {/* Edad / Peso / Altura */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <NumberField
            label="Edad"
            unit="años"
            value={state.age}
            error={errors.age}
            onChange={(v) => update('age', v)}
            min={limits.age.min}
            max={limits.age.max}
          />
          <NumberField
            label="Peso"
            unit="kg"
            value={state.weight}
            error={errors.weight}
            onChange={(v) => update('weight', v)}
            min={limits.weight.min}
            max={limits.weight.max}
          />
          <NumberField
            label="Altura"
            unit="cm"
            value={state.height}
            error={errors.height}
            onChange={(v) => update('height', v)}
            min={limits.height.min}
            max={limits.height.max}
          />
        </div>

        {/* Nivel de actividad */}
        <Fieldset legend="Nivel de actividad" className="mt-6">
          <div className="space-y-2">
            {activityOptions.map((opt) => (
              <RadioCard
                key={opt.value}
                name="activity"
                checked={state.activity === opt.value}
                onChange={() => update('activity', opt.value)}
                label={opt.label}
                description={opt.description}
              />
            ))}
          </div>
        </Fieldset>

        {/* Objetivo */}
        <Fieldset legend="Objetivo" className="mt-6">
          <div className="grid gap-2 sm:grid-cols-3">
            {goalOptions.map((opt) => (
              <GoalCard
                key={opt.value}
                checked={state.goal === opt.value}
                onChange={() => update('goal', opt.value)}
                label={opt.label}
                description={opt.description}
              />
            ))}
          </div>
        </Fieldset>

        <button
          type="submit"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-8 py-4 text-base font-semibold text-ivory shadow-soft transition-all duration-300 ease-out-soft hover:bg-clay-dark hover:shadow-card hover:-translate-y-0.5"
        >
          Calcular mis macros
        </button>
      </form>

      {/* Resultado */}
      <div ref={resultRef} className="scroll-mt-24">
        <MacrosResults result={result} goal={state.goal} />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Subcomponentes de formulario                                     */
/* ---------------------------------------------------------------- */

function Fieldset({
  legend,
  className,
  children,
}: {
  legend: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className={className}>
      <legend className="mb-3 text-sm font-semibold text-espresso">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function NumberField({
  label,
  unit,
  value,
  error,
  onChange,
  min,
  max,
}: {
  label: string;
  unit: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  min: number;
  max: number;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-espresso">
        {label}
      </span>
      <div className="relative">
        <input
          type="number"
          inputMode="numeric"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          className={cn(
            'w-full rounded-xl border bg-white px-3.5 py-3 pr-12 text-espresso outline-none transition-colors',
            error
              ? 'border-clay focus:border-clay'
              : 'border-espresso/15 focus:border-clay',
          )}
        />
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-taupe">
          {unit}
        </span>
      </div>
      {error && <p className="mt-1.5 text-xs text-clay-dark">{error}</p>}
    </label>
  );
}

function SegmentedControl({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <label
            key={opt.value}
            className={cn(
              'flex cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium transition-colors',
              active
                ? 'border-clay bg-clay/10 text-clay'
                : 'border-espresso/15 text-espresso hover:border-clay/40',
            )}
          >
            <input
              type="radio"
              name={name}
              className="sr-only"
              checked={active}
              onChange={() => onChange(opt.value)}
            />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}

function RadioCard({
  name,
  checked,
  onChange,
  label,
  description,
}: {
  name: string;
  checked: boolean;
  onChange: () => void;
  label: string;
  description: string;
}) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors',
        checked
          ? 'border-clay bg-clay/5'
          : 'border-espresso/15 hover:border-clay/40',
      )}
    >
      <span
        className={cn(
          'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-colors',
          checked ? 'border-clay' : 'border-espresso/30',
        )}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-clay" />}
      </span>
      <span>
        <span className="block text-sm font-semibold text-espresso">
          {label}
        </span>
        <span className="block text-xs text-taupe">{description}</span>
      </span>
      <input
        type="radio"
        name={name}
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}

function GoalCard({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  description: string;
}) {
  return (
    <label
      className={cn(
        'flex cursor-pointer flex-col rounded-xl border px-4 py-3 text-center transition-colors',
        checked
          ? 'border-clay bg-clay/10'
          : 'border-espresso/15 hover:border-clay/40',
      )}
    >
      <span
        className={cn(
          'text-sm font-semibold',
          checked ? 'text-clay' : 'text-espresso',
        )}
      >
        {label}
      </span>
      <span className="mt-0.5 text-xs text-taupe">{description}</span>
      <input
        type="radio"
        name="goal"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}
