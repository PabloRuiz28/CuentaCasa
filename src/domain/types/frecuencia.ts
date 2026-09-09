export const FRECUENCIAS = ["Semanal", "Catorcenal", "Quincenal"] as const;

export type Frecuencia = (typeof FRECUENCIAS)[number];

export const isFrecuencia = (value: unknown): value is Frecuencia =>
  value === "Semanal" || value === "Catorcenal" || value === "Quincenal";
