import { AppError, ErrorCode } from "./AppError";

export type PermissionErrorCode = Extract<ErrorCode, "PERMISSION_DENIED">;

export class PermissionError extends AppError {
  constructor(
    code: PermissionErrorCode,
    message?: string,
    options?: { cause?: unknown },
  ) {
    super(code, message, options);
    this.name = "PermissionError";
  }
}
