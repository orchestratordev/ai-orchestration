/**
 * Client Environment
 */

export const clientEnv = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "AI ORCHESTRATION PLATFORM",

  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? "",

  SUPABASE_URL:
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",

  SUPABASE_ANON_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
};
