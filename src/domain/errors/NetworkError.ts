import { AppError, ErrorCode } from "./AppError";

export type NetworkErrorCode = Extract<
  ErrorCode,
  "NETWORK_OFFLINE" | "NETWORK_TIMEOUT" | "NETWORK_UNREACHABLE"
>;

export class NetworkError extends AppError {
  constructor(
    code: NetworkErrorCode,
    message?: string,
    options?: { cause?: unknown },
  ) {
    super(code, message, options);
    this.name = "NetworkError";
  }
}
