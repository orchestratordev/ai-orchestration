import type { Logger } from './logger';
import type { LogMeta } from './types';

function write(
  level: string,
  message: string,
  meta?: LogMeta,
) {
  const timestamp = new Date().toISOString();

  console.log(
    `[${timestamp}] [${level}] ${message}`,
    meta ?? '',
  );
}

export const consoleLogger: Logger = {
  debug: (message, meta) => write('DEBUG', message, meta),

  info: (message, meta) => write('INFO', message, meta),

  warn: (message, meta) => write('WARN', message, meta),

  error: (message, meta) => write('ERROR', message, meta),
};
