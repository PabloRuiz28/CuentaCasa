export type ErrorCode =
  // Autenticación
  | "AUTH_INVALID_CREDENTIALS"
  | "AUTH_EMAIL_IN_USE"
  | "AUTH_WEAK_PASSWORD"
  | "AUTH_USER_NOT_FOUND"
  | "AUTH_NOT_AUTHENTICATED"
  | "AUTH_SESSION_EXPIRED"
  // Validación
  | "VALIDATION_REQUIRED_FIELD"
  | "VALIDATION_INVALID_FORMAT"
  | "VALIDATION_INVALID_VALUE"
  // Red
  | "NETWORK_OFFLINE"
  | "NETWORK_TIMEOUT"
  | "NETWORK_UNREACHABLE"
  // Datos
  | "NOT_FOUND"
  | "CONFLICT"
  | "PERMISSION_DENIED"
  // Hogar (multi-tenancy)
  | "HOUSEHOLD_CODE_INVALID"
  | "HOUSEHOLD_CODE_EXPIRED"
  | "HOUSEHOLD_ALREADY_MEMBER"
  | "HOUSEHOLD_NOT_FOUND"
  // Caché
  | "CACHE_READ_ERROR"
  | "CACHE_WRITE_ERROR"
  // Fallback
  | "UNKNOWN";

export type ErrorCategory =
  | "auth"
  | "validation"
  | "network"
  | "permission"
  | "notFound"
  | "conflict"
  | "cache"
  | "unknown";

const CODE_TO_CATEGORY: Record<ErrorCode, ErrorCategory> = {
  AUTH_INVALID_CREDENTIALS: "auth",
  AUTH_EMAIL_IN_USE: "auth",
  AUTH_WEAK_PASSWORD: "auth",
  AUTH_USER_NOT_FOUND: "auth",
  AUTH_NOT_AUTHENTICATED: "auth",
  AUTH_SESSION_EXPIRED: "auth",

  VALIDATION_REQUIRED_FIELD: "validation",
  VALIDATION_INVALID_FORMAT: "validation",
  VALIDATION_INVALID_VALUE: "validation",

  NETWORK_OFFLINE: "network",
  NETWORK_TIMEOUT: "network",
  NETWORK_UNREACHABLE: "network",

  NOT_FOUND: "notFound",
  CONFLICT: "conflict",
  PERMISSION_DENIED: "permission",

  HOUSEHOLD_CODE_INVALID: "validation",
  HOUSEHOLD_CODE_EXPIRED: "validation",
  HOUSEHOLD_ALREADY_MEMBER: "conflict",
  HOUSEHOLD_NOT_FOUND: "notFound",

  CACHE_READ_ERROR: "cache",
  CACHE_WRITE_ERROR: "cache",

  UNKNOWN: "unknown",
};

export class AppError extends Error {
  readonly code: ErrorCode;
  readonly category: ErrorCategory;

  constructor(
    code: ErrorCode,
    message?: string,
    options?: { cause?: unknown },
  ) {
    super(message ?? code, options?.cause !== undefined ? { cause: options.cause } : undefined);
    this.name = "AppError";
    this.code = code;
    this.category = CODE_TO_CATEGORY[code];
  }
}

export const isAppError = (error: unknown): error is AppError =>
  error instanceof AppError;
