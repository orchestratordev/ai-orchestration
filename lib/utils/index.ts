/**
 * Shared Utilities
 */

export const noop = () => {};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
