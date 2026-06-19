import type { LogMeta } from './types';

export interface Logger {
  debug(message: string, meta?: LogMeta): void;

  info(message: string, meta?: LogMeta): void;

  warn(message: string, meta?: LogMeta): void;

  error(message: string, meta?: LogMeta): void;
}
