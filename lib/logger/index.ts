/**
 * AI ORCHESTRATION PLATFORM
 * Logger Entry Point
 */

export * from './types';
export * from './logger';
export * from './console';

import { consoleLogger } from './console';

export const logger = consoleLogger;
