/**
 * AI ORCHESTRATION PLATFORM
 * Configuration Types
 */

export interface AppConfig {
  name: string;
  version: string;
  environment: string;
}

export interface FeatureFlags {
  ai: boolean;
  memory: boolean;
  plugins: boolean;
  workflow: boolean;
}
