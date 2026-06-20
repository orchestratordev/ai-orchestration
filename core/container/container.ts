import type {
  ServiceContainer,
  ServiceFactory,
} from './types';

class Container implements ServiceContainer {
  private services = new Map<string, ServiceFactory<unknown>>();

  register<T>(
    token: string,
    factory: ServiceFactory<T>,
  ) {
    this.services.set(token, factory);
  }

  resolve<T>(token: string): T {
    const factory = this.services.get(token);

    if (!factory) {
      throw new Error(`Service "${token}" not found.`);
    }

    return factory() as T;
  }

  has(token: string): boolean {
    return this.services.has(token);
  }
}

export const container = new Container();
