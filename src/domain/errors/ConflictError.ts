import { AppError, ErrorCode } from "./AppError";

export type ConflictErrorCode = Extract<
  ErrorCode,
  "CONFLICT" | "HOUSEHOLD_ALREADY_MEMBER"
>;

export class ConflictError extends AppError {
  constructor(
    code: ConflictErrorCode,
    message?: string,
    options?: { cause?: unknown },
  ) {
    super(code, message, options);
    this.name = "ConflictError";
  }
}
