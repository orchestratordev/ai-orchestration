import type { Provider } from "./provider";

const providers = new Map<string, Provider>();

export function registerProvider(
  provider: Provider,
) {
  providers.set(provider.id, provider);
}

export function getProvider(id: string) {
  return providers.get(id);
}

export function listProviders() {
  return [...providers.values()];
}
