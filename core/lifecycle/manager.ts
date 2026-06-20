import { logger } from '@/lib/logger';
import {
  getKernelState,
  setKernelState,
} from './lifecycle';
import { KernelState } from './state';

export function transitionTo(state: KernelState) {
  logger.info(
    `Kernel State: ${getKernelState()} → ${state}`
  );

  setKernelState(state);
}
