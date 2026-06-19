/**
 * Generate simple unique ID
 */
export function generateId(prefix = 'ID'): string {
  return `${prefix}-${crypto.randomUUID()}`;
}
