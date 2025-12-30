import { createClient } from '@supabase/supabase-js';

// ⚠️ REEMPLAZAR CON TUS CREDENCIALES REALES DE SUPABASE
// Obtenlas en: https://supabase.com/dashboard/project/_/settings/api
const supabaseUrl = 'https://iuuyvsrwncdslmsryazz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1dXl2c3J3bmNkc2xtc3J5YXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMjMwMDgsImV4cCI6MjA4MjY5OTAwOH0.VgnotJhXG3t1pzHYVgaK1d1lt07gj5ptqj-443ZhExA';

export const supabase = createClient(supabaseUrl, supabaseKey);
