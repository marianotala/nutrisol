import type { ActivityLevel, Goal, Sex } from '@/lib/macros';

/** Etiquetas y descripciones de las opciones para la UI. */

export const sexOptions: { value: Sex; label: string }[] = [
  { value: 'femenino', label: 'Femenino' },
  { value: 'masculino', label: 'Masculino' },
];

export const activityOptions: {
  value: ActivityLevel;
  label: string;
  description: string;
}[] = [
  {
    value: 'sedentario',
    label: 'Sedentario',
    description: 'Poco o nada de ejercicio; trabajo de escritorio',
  },
  {
    value: 'ligero',
    label: 'Ligero',
    description: 'Ejercicio ligero 1–3 días por semana',
  },
  {
    value: 'moderado',
    label: 'Moderado',
    description: 'Ejercicio moderado 3–5 días por semana',
  },
  {
    value: 'intenso',
    label: 'Intenso',
    description: 'Ejercicio intenso 6–7 días por semana',
  },
  {
    value: 'atleta',
    label: 'Muy intenso',
    description: 'Entrenamiento diario o trabajo físico exigente',
  },
];

export const goalOptions: {
  value: Goal;
  label: string;
  description: string;
}[] = [
  {
    value: 'deficit',
    label: 'Bajar de peso',
    description: 'Déficit calórico (−20%)',
  },
  {
    value: 'mantenimiento',
    label: 'Mantenerme',
    description: 'Mantener mi peso actual',
  },
  {
    value: 'superavit',
    label: 'Ganar músculo',
    description: 'Superávit calórico (+15%)',
  },
];
