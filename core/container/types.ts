export type ServiceFactory<T> = () => T;

export interface ServiceContainer {
  register<T>(token: string, factory: ServiceFactory<T>): void;

  resolve<T>(token: string): T;

  has(token: string): boolean;
}
