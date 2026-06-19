export interface ClientEnv {
  APP_NAME: string;
  APP_URL: string;
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

export interface ServerEnv {
  NODE_ENV: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
}
