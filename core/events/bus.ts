import type { EventHandler } from "./types";

const listeners = new Map<string, EventHandler[]>();

export function on(
  event: string,
  handler: EventHandler,
) {
  const current = listeners.get(event) ?? [];

  current.push(handler);

  listeners.set(event, current);
}

export async function emit(
  event: string,
  payload?: unknown,
) {
  const handlers = listeners.get(event);

  if (!handlers) return;

  for (const handler of handlers) {
    await handler(payload);
  }
}
