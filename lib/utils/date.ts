export function now(): Date {
  return new Date();
}

export function nowISO(): string {
  return new Date().toISOString();
}
