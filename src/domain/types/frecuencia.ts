export type Frecuencia = "Semanal" | "Catorcenal" | "Quincenal";

export const FRECUENCIAS: readonly Frecuencia[] = [
  "Semanal",
  "Catorcenal",
  "Quincenal",
] as const;

export const isFrecuencia = (value: unknown): value is Frecuencia =>
  value === "Semanal" || value === "Catorcenal" || value === "Quincenal";
