import { createClient } from "@supabase/supabase-js";

// Public (anon) client — safe to use in server routes because Supabase Row
// Level Security (RLS) policies control exactly what this key can do.
// See README.md for the SQL that sets up the `reviews` table + policies.
export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}
