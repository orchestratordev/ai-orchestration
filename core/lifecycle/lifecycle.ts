import { KernelState } from './state';

let currentState = KernelState.BOOTING;

export function getKernelState(): KernelState {
  return currentState;
}

export function setKernelState(state: KernelState) {
  currentState = state;
}
