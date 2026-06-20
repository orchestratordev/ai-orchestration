import type { RegistryItem } from './types';

export const serviceRegistry: RegistryItem[] = [
  {
    token: 'LOGGER',
    description: 'Platform Logger',
  },
  {
    token: 'DATABASE',
    description: 'Database Service',
  },
  {
    token: 'AI_PROVIDER',
    description: 'AI Provider',
  },
];
