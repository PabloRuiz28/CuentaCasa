export type Role = "admin" | "member";

export const ROLES: readonly Role[] = ["admin", "member"] as const;

export const isRole = (value: unknown): value is Role =>
  value === "admin" || value === "member";
