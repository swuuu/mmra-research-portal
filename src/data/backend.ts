import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://mydccwohktthpzprtgkr.supabase.co', process.env.SUPABASE_KEY!);

