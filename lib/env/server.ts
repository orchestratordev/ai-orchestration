export const serverEnv = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',

  SUPABASE_SERVICE_ROLE_KEY:
    process.env.SUPABASE_SERVICE_ROLE_KEY,
};
