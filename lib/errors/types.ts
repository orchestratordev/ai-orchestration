export interface ErrorDetails {
  message: string;

  code: string;

  status?: number;

  cause?: unknown;
}
