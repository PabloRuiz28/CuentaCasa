import { ValidationError } from "@domain/errors";
import type { ZodError } from "zod";

export const toValidationError = (error: ZodError): ValidationError => {
  const issue = error.issues[0];
  const code =
    issue?.code === "too_small"
      ? "VALIDATION_REQUIRED_FIELD"
      : "VALIDATION_INVALID_VALUE";
  return new ValidationError(code, issue?.message);
};
