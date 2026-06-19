import { ErrorCode } from './error-codes';
import type { ErrorDetails } from './types';

export class AppError extends Error {
  code: string;

  status: number;

  cause?: unknown;

  constructor({
    message,
    code = ErrorCode.UNKNOWN,
    status = 500,
    cause,
  }: ErrorDetails) {
    super(message);

    this.name = 'AppError';
    this.code = code;
    this.status = status;
    this.cause = cause;
  }
}
