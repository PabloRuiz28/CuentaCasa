export type HomeType = "NEW" | "JOIN";

export const HOME_TYPES: readonly HomeType[] = ["NEW", "JOIN"] as const;

export const isHomeType = (value: unknown): value is HomeType =>
  value === "NEW" || value === "JOIN";
