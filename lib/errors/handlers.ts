import { logger } from '@/lib/logger';

export function handleError(error: unknown) {
  if (error instanceof Error) {
    logger.error(error.message);

    return;
  }

  logger.error('Unknown error');
}
