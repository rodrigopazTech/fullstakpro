import { createClient } from '@supabase/supabase-js';

// ⚠️ REEMPLAZAR CON TUS CREDENCIALES REALES DE SUPABASE
// Obtenlas en: https://supabase.com/dashboard/project/_/settings/api
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
