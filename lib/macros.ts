/**
 * Lógica de la calculadora de macros.
 * Función pura (sin dependencias de UI) para poder probarla y
 * reutilizarla. Fórmula Mifflin-St Jeor para el metabolismo basal.
 */

export type Sex = 'femenino' | 'masculino';

export type ActivityLevel =
  | 'sedentario'
  | 'ligero'
  | 'moderado'
  | 'intenso'
  | 'atleta';

export type Goal = 'deficit' | 'mantenimiento' | 'superavit';

export type MacrosInput = {
  /** Peso en kilogramos */
  weight: number;
  /** Altura en centímetros */
  height: number;
  /** Edad en años */
  age: number;
  sex: Sex;
  activity: ActivityLevel;
  goal: Goal;
};

export type MacroBreakdown = {
  grams: number;
  kcal: number;
  /** Porcentaje del total de calorías (0–100) */
  percent: number;
};

export type MacrosResult = {
  /** Metabolismo basal (kcal/día) */
  bmr: number;
  /** Gasto energético total en mantenimiento (kcal/día) */
  maintenance: number;
  /** Calorías objetivo según la meta (kcal/día) */
  calories: number;
  protein: MacroBreakdown;
  carbs: MacroBreakdown;
  fat: MacroBreakdown;
};

/** Factores de actividad estándar aplicados al BMR. */
export const activityFactors: Record<ActivityLevel, number> = {
  sedentario: 1.2,
  ligero: 1.375,
  moderado: 1.55,
  intenso: 1.725,
  atleta: 1.9,
};

/** Ajuste calórico según el objetivo (multiplicador sobre mantenimiento). */
export const goalFactors: Record<Goal, number> = {
  deficit: 0.8, // −20 %
  mantenimiento: 1,
  superavit: 1.15, // +15 %
};

/** Proteína recomendada (g por kg de peso) según objetivo. */
const proteinPerKg: Record<Goal, number> = {
  deficit: 2.0,
  mantenimiento: 1.8,
  superavit: 1.8,
};

/** Porcentaje de calorías provenientes de grasa. */
const fatCaloriePercent = 0.25;

const KCAL_PER_G = { protein: 4, carbs: 4, fat: 9 } as const;

const round = (n: number) => Math.round(n);

/**
 * Calcula calorías objetivo y reparto de macronutrientes.
 * Asume inputs ya validados (números positivos y razonables).
 */
export function calculateMacros(input: MacrosInput): MacrosResult {
  const { weight, height, age, sex, activity, goal } = input;

  // Mifflin-St Jeor
  const base = 10 * weight + 6.25 * height - 5 * age;
  const bmr = sex === 'masculino' ? base + 5 : base - 161;

  const maintenance = bmr * activityFactors[activity];
  const calories = maintenance * goalFactors[goal];

  // Proteína a partir del peso corporal
  const proteinG = proteinPerKg[goal] * weight;
  const proteinKcal = proteinG * KCAL_PER_G.protein;

  // Grasa como % de las calorías totales
  const fatKcal = calories * fatCaloriePercent;
  const fatG = fatKcal / KCAL_PER_G.fat;

  // Carbohidratos: lo que resta (nunca negativo)
  const carbsKcal = Math.max(calories - proteinKcal - fatKcal, 0);
  const carbsG = carbsKcal / KCAL_PER_G.carbs;

  const pct = (kcal: number) =>
    calories > 0 ? (kcal / calories) * 100 : 0;

  return {
    bmr: round(bmr),
    maintenance: round(maintenance),
    calories: round(calories),
    protein: {
      grams: round(proteinG),
      kcal: round(proteinKcal),
      percent: round(pct(proteinKcal)),
    },
    carbs: {
      grams: round(carbsG),
      kcal: round(carbsKcal),
      percent: round(pct(carbsKcal)),
    },
    fat: {
      grams: round(fatG),
      kcal: round(fatKcal),
      percent: round(pct(fatKcal)),
    },
  };
}

/** Rangos de validación permitidos por campo. */
export const limits = {
  weight: { min: 30, max: 250 },
  height: { min: 120, max: 230 },
  age: { min: 15, max: 100 },
} as const;
