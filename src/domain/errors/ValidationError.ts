import { AppError, ErrorCode } from "./AppError";

export type ValidationErrorCode = Extract<
  ErrorCode,
  | "VALIDATION_REQUIRED_FIELD"
  | "VALIDATION_INVALID_FORMAT"
  | "VALIDATION_INVALID_VALUE"
  | "HOUSEHOLD_CODE_INVALID"
  | "HOUSEHOLD_CODE_EXPIRED"
>;

export class ValidationError extends AppError {
  constructor(
    code: ValidationErrorCode,
    message?: string,
    options?: { cause?: unknown },
  ) {
    super(code, message, options);
    this.name = "ValidationError";
  }
}
