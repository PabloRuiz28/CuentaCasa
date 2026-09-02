import { AppError, ErrorCode } from "./AppError";

export type AuthErrorCode = Extract<
  ErrorCode,
  | "AUTH_INVALID_CREDENTIALS"
  | "AUTH_EMAIL_IN_USE"
  | "AUTH_WEAK_PASSWORD"
  | "AUTH_USER_NOT_FOUND"
  | "AUTH_NOT_AUTHENTICATED"
  | "AUTH_SESSION_EXPIRED"
>;

export class AuthError extends AppError {
  constructor(
    code: AuthErrorCode,
    message?: string,
    options?: { cause?: unknown },
  ) {
    super(code, message, options);
    this.name = "AuthError";
  }
}
