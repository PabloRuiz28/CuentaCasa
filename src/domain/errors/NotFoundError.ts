import { AppError, ErrorCode } from "./AppError";

export type NotFoundErrorCode = Extract<
  ErrorCode,
  "NOT_FOUND" | "HOUSEHOLD_NOT_FOUND"
>;

export class NotFoundError extends AppError {
  constructor(
    code: NotFoundErrorCode,
    message?: string,
    options?: { cause?: unknown },
  ) {
    super(code, message, options);
    this.name = "NotFoundError";
  }
}
