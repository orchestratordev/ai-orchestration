/**
 * AI ORCHESTRATION PLATFORM
 * Logger Types
 */

export type LogLevel =
  | 'debug'
  | 'info'
  | 'warn'
  | 'error';

export interface LogMeta {
  module?: string;
  userId?: string;
  requestId?: string;
  [key: string]: unknown;
}
