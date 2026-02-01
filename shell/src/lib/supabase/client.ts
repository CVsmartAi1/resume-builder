import { createBrowserClient } from '@supabase/ssr';
import { Database } from '@/types/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function createClient() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase environment variables not set. Please check your .env.local file.');
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseKey);
}

export const supabase = createClient();
